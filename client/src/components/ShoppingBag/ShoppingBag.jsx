import React, { useEffect, useState } from 'react';
import ListItem from 'components/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ShoppingBag.module.scss';
import getOneProduct from 'api/getOneProduct';
import getCart from 'api/getCart';
import createCart from 'api/createCart';
// eslint-disable-next-line no-unused-vars
import { removeAllItems } from 'store/cartSlice';
import updateCart from 'api/updateCart';
import { Oval } from 'react-loader-spinner';

const ShoppingBag = () => {
    const [cart, setCart] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);
    const cartStorage = useSelector((state) => state.store.cart);
    const isLogIn = useSelector((state) => state.store.login.isLogIn);
    // eslint-disable-next-line no-unused-vars
    const dispatch = useDispatch();
    const addProducts = async () => {
        const tempCart = [];
        for (let i = 0; i < cartStorage.length; i++) {
            const product = await getOneProduct(cartStorage[i].product);
            tempCart.push({
                product: product.data,
                cartQuantity: cartStorage[i].cartQuantity,
            });
        }
        console.log(tempCart);
        // console.log(cartStorage);
        setIsLoaded(true);
        setCart(tempCart);
    };
    useEffect(() => {
        if (!isLogIn) {
            setCart([...cartStorage]);
        }
    }, [cartStorage, isLogIn]);
    useEffect(() => {
        if (isLogIn) {
            setIsLoaded(false);
            getCart().then((res) => {
                if (res.data === null) {
                    if (cartStorage.length > 0) {
                        createCart({ products: [...cartStorage] }).then(() => {
                            getCart().then((res) => {
                                setCart(res.data.products);
                                setIsLoaded(true);
                            });
                        });
                    } else {
                        setCart([]);
                        setIsLoaded(true);
                    }
                } else {
                    if (cartStorage.length > 0) {
                        updateCart({ products: [...cartStorage] }).then((res) => {
                            console.log(res.data);
                            setCart(res.data.products);
                            setIsLoaded(true);
                        });
                    } else {
                        setCart([]);
                        setIsLoaded(true);
                    }
                }
            });
        } else if (cartStorage.length > 0) {
            setIsLoaded(false);
            addProducts();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartStorage, isLogIn]);
    if (!isLoaded) {
        return (
            <Oval
                height={130}
                width={130}
                color="#373F41"
                wrapperStyle={{}}
                wrapperClass={styles.loader}
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        );
    }
    return (
        <div className={styles.bagWrapper}>
            <div className={styles.headerWrapper}>
                <h2 className={styles.bagHeader}>SHOPPING BAG</h2>
                <p className={styles.totalPrice}>
                    TOTAL USD $
                    {cart.reduce(
                        (acc, item) => acc + item.product.currentPrice * item.cartQuantity,
                        0,
                    )}
                </p>
            </div>

            <ul className={styles.itemsList}>
                {cart.map((item) => (
                    <li key={item.product._id} className={styles.bagLiItem}>
                        <ListItem quantity={item.cartQuantity} item={item.product} type="cart" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingBag;
