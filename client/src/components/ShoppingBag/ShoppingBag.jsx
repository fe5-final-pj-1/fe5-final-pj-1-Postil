import React, { useEffect, useState } from 'react';
import ListItem from 'components/ListItem';
import { useSelector } from 'react-redux';
import styles from './ShoppingBag.module.scss';
import getOneProduct from 'api/getOneProduct';
import getCart from 'api/getCart';
import createCart from 'api/createCart';
import updateCart from 'api/updateCart';
import { Oval } from 'react-loader-spinner';

const ShoppingBag = () => {
    const [cart, setCart] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const cartStorage = useSelector((state) => state.store.cart);
    const isLogIn = useSelector((state) => state.store.login.isLogIn);

    const addProducts = async () => {
        const tempCart = [];
        for (let i = 0; i < cartStorage.length; i++) {
            const product = await getOneProduct(cartStorage[i].product);
            tempCart.push({
                product: product.data,
                cartQuantity: cartStorage[i].cartQuantity,
            });
        }
        setIsLoaded(true);
        setCart(tempCart);
    };
    useEffect(() => {
        if (isLogIn) {
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
                            setCart(res.data.products);
                            setIsLoaded(true);
                        });
                    } else {
                        setCart([]);
                        setIsLoaded(true);
                    }
                }
            });
        } else if (cartStorage.length > 0 && cartStorage.length === cart.length) {
            const indexElem = cartStorage.findIndex(
                (elem, index) => elem.cartQuantity !== cart[index].cartQuantity,
            );
            if (indexElem === -1) {
                return;
            }
            setCart((prev) => {
                const result = [...prev];
                result[indexElem].cartQuantity = cartStorage[indexElem].cartQuantity;
                return result;
            });
        } else if (cartStorage.length > 0) {
            addProducts();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartStorage, isLogIn]);

    const calculateTotalPrice = () =>
        cart.reduce((acc, item) => acc + item.product.currentPrice * item.cartQuantity, 0);

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
    if (cart.length === 0) {
        return (
            <h2 className="h2" style={{ textAlign: 'center' }}>
                Cart is empty
            </h2>
        );
    }
    return (
        <div className={styles.bagWrapper}>
            <div className={styles.headerWrapper}>
                <h2 className={styles.bagHeader}>SHOPPING BAG</h2>
                <p className={styles.totalPrice}>TOTAL USD ${calculateTotalPrice()}</p>
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
