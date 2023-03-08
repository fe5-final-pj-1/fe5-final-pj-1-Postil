import React, { useEffect, useState } from 'react';
import ListItem from 'components/ListItem';
import { useSelector } from 'react-redux';
import styles from './ShoppingBag.module.scss';
import getOneProduct from 'api/getOneProduct';
import { Oval } from 'react-loader-spinner';

const ShoppingBag = () => {
    const [cart, setCart] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const cartStorage = useSelector((state) => state.store.cart);
    const addProducts = async () => {
        setIsLoaded(false);
        const tempCart = [];
        for (let i = 0; i < cartStorage.length; i++) {
            const product = await getOneProduct(cartStorage[i].product);
            tempCart.push({
                ...product.data,
                cartQuantity: cartStorage[i].cartQuantity,
            });
        }
        setIsLoaded(true);
        setCart(tempCart);
    };
    useEffect(() => {
        if (cartStorage.length > 0) {
            addProducts();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartStorage]);
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
                    {cart.reduce((acc, item) => acc + item.currentPrice * item.cartQuantity, 0)}
                </p>
            </div>

            <ul className={styles.itemsList}>
                {cart.map((item) => (
                    <li key={item._id} className={styles.bagLiItem}>
                        <ListItem item={item} type="cart" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingBag;
