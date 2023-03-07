import React, { useEffect, useState } from 'react';
import BagItem from './components/BagItem';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './ShoppingBag.module.scss';
import getOneProduct from 'api/getOneProduct';

const ShoppingBag = () => {
    const location = useLocation();
    const [cart, setCart] = useState([]);
    const cartStorage = useSelector((state) => state.store.cart);
    console.log(cartStorage);
    useEffect(() => {
        if (cartStorage.length) {
            const tempCart = [];
            cartStorage.forEach((item) => {
                getOneProduct(item.product).then((res) => {
                    tempCart.push(
                        Object.defineProperty(res.data, 'cartQuantity', {
                            value: item.cartQuantity,
                        }),
                    );
                    setCart(tempCart);
                });
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartStorage]);
    console.log(cart);
    return (
        <div className={styles.bagWrapper}>
            {location.pathname === '/cart' ? (
                <div className={styles.headerWrapper}>
                    <h2 className={styles.bagHeader}>SHOPPING BAG</h2>
                    <p className={styles.totalPrice}>
                        TOTAL USD ${cart.reduce((acc, item) => acc + item.currentPrice, 0)}
                    </p>
                </div>
            ) : null}

            <ul className={styles.itemsList}>
                {cart.map((item) => (
                    <li key={item._id} className={styles.bagLiItem}>
                        <BagItem item={item} location={location.pathname} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingBag;
