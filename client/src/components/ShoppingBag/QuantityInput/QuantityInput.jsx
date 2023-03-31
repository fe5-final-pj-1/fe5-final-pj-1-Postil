import React, { useEffect, useState } from 'react';
import styles from './QuantityInput.module.scss';
import PropTypes from 'prop-types';
import addProductToCart from 'api/addProductToCart';
import decreaseProductQuantity from 'api/decreaseProductQuantity';
import getOneProduct from 'api/getOneProduct';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity, decreaseProduct, itemAdded } from 'store/cartSlice/cartSlice';
import Icon from 'components/Icon';

const QuantityInput = ({ id, quantity }) => {
    const isLogIn = useSelector((state) => state.store.login.isLogIn);
    const [cartQuantity, setCartQuantity] = useState(quantity);
    const [itemQuantityInDB, setItemQuantityInDB] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        getOneProduct(id).then((res) => setItemQuantityInDB(res.data.quantity));
    }, [id]);

    const increaseProductQuantity = () => {
        if (cartQuantity >= itemQuantityInDB) {
            return;
        }
        dispatch(itemAdded(id));
        setCartQuantity((prev) => prev + 1);
        if (isLogIn) {
            addProductToCart(id);
        }
    };

    const decreaseProductQuantityInput = async () => {
        dispatch(decreaseProduct(id));
        if (cartQuantity > 1) {
            setCartQuantity((prev) => prev - 1);
        }
        if (isLogIn && cartQuantity > 1) {
            decreaseProductQuantity(id);
        }
    };

    const checkInputValue = (newValue) => {
        if (newValue <= 0) return 0;
        if (newValue >= itemQuantityInDB) return itemQuantityInDB;
        if (newValue >= 100) return 99;
        if (/^[1-9]\d*$/.test(newValue)) return newValue;
        return cartQuantity;
    };

    const onChangeInputHandler = (e) => {
        e.stopPropagation();
        const newValue = +e.currentTarget.value;
        const result = checkInputValue(newValue);
        dispatch(changeQuantity({ id, quantity: result ? result : 1 }));
        if (result !== cartQuantity) setCartQuantity(result);
    };

    const onBlurInputHandler = (e) => {
        e.stopPropagation();
        const currentValue = +e.currentTarget.value;
        setCartQuantity((prevState) => {
            if (!currentValue) return 1;
            return prevState;
        });
        dispatch(changeQuantity({ id, quantity: cartQuantity ? cartQuantity : 1 }));
    };

    return (
        <div className={styles.numInputBlock}>
            <input
                type="text"
                name="amount"
                value={cartQuantity}
                onChange={onChangeInputHandler}
                onBlur={onBlurInputHandler}
                className={styles.numInput}
            />
            <div className={styles.numInputBtns}>
                <button
                    className={styles.counterBtn}
                    id="increase"
                    onClick={increaseProductQuantity}
                >
                    <Icon type="bagCounterIncrease" />
                </button>
                <button className={styles.counterBtn} onClick={decreaseProductQuantityInput}>
                    <Icon type="bagCounterDecrease" />
                </button>
            </div>
        </div>
    );
};

export default QuantityInput;

QuantityInput.propTypes = {
    quantity: PropTypes.number,
    id: PropTypes.string,
};
