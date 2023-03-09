import React, { useState } from 'react';
import styles from './QuantityInput.module.scss';
import PropTypes from 'prop-types';
import addProductToCart from 'api/addProductToCart';
import decreaseProductQuantity from 'api/decreaseProductQuantity';
import getCart from 'api/getCart';
import deleteProductFromCart from 'api/deleteProductFromCart';
import updateCart from 'api/updateCart';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity, decreaseProduct, itemAdded } from 'store/cartSlice';

import Icon from 'components/Icon';

const QuantityInput = ({ id, quantity }) => {
    const isLogIn = useSelector((state) => state.store.login.isLogIn);
    const [cartQuantity, setCartQuantity] = useState(quantity);
    const dispatch = useDispatch();
    const increaseProductQuantity = () => {
        dispatch(itemAdded(id));
        console.log(id);
        if (isLogIn) {
            addProductToCart(id).then((res) => {
                const quantity = res.data.products.filter(
                    (product) => product.product._id === id,
                )[0].cartQuantity;
                setCartQuantity(quantity);
            });
        }
    };

    const decreaseProductQuantityInput = async () => {
        dispatch(decreaseProduct(id));
        if (isLogIn) {
            const resCart = await getCart();
            const tempQuantity = resCart.data.products.filter(
                (product) => product.product._id === id,
            )[0].cartQuantity;
            if (tempQuantity > 1) {
                const response = await decreaseProductQuantity(id);
                const quantity = response.data.products.filter(
                    (product) => product.product._id === id,
                )[0].cartQuantity;
                setCartQuantity(quantity);
            }
        }
    };

    const onChangeInputHandler = (e) => {
        e.stopPropagation();
        const newValue = +e.currentTarget.value;
        setCartQuantity((prevState) => {
            if (newValue >= 100) return 99;
            if (newValue <= 0) return 0;
            if (/^[1-9]\d*$/.test(newValue)) return newValue;
            return prevState;
        });
    };

    const updateCartFunc = async () => {
        const response = await deleteProductFromCart(id);
        const cartItems = response.data.products;
        updateCart({ products: [{ product: id, cartQuantity: cartQuantity }, ...cartItems] }).then(
            (res) => console.log(res),
        );
    };

    const onBlurInputHandler = (e) => {
        e.stopPropagation();
        const currentValue = +e.currentTarget.value;
        setCartQuantity((prevState) => {
            if (!currentValue) return 1;
            return prevState;
        });
        dispatch(changeQuantity({ id, quantity: cartQuantity }));
        if (isLogIn) {
            updateCartFunc();
        }
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
