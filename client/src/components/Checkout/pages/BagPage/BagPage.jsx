import React, { useEffect, useState } from 'react';
import TabsSection from '../../sections/TabsSection';
import SummaryTextSection from '../../sections/SummaryTextSection';
import styles from './BagPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import getCart from 'api/getCart';
import getOneProduct from 'api/getOneProduct';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon';
import { addProductsToOrder } from 'store/orderSlice';

const BagPage = () => {
    const dispatch = useDispatch();
    const [productsCart, setProductsCart] = useState([]);
    const { cart, isLogIn } = useSelector((state) => ({
        cart: state.store.cart,
        isLogIn: state.store.login.isLogIn,
    }));
    const loadCart = async () => {
        const tempCart = [];
        for (let i = 0; i < cart.length; i++) {
            const product = await getOneProduct(cart[i].product);
            tempCart.push({
                product: product.data,
                cartQuantity: cart[i].cartQuantity,
            });
        }
        setProductsCart(tempCart);
    };

    useEffect(() => {
        if (isLogIn) {
            getCart().then((res) => {
                setProductsCart(res.data.products);
            });
        } else {
            loadCart();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart, isLogIn]);
    useEffect(() => {
        if (!isLogIn) dispatch(addProductsToOrder(productsCart));
    }, [isLogIn, productsCart, dispatch]);
    return (
        <>
            <TabsSection />
            <div className={styles.mainContainer}>
                <ul className={styles.itemsList}>
                    <h2 className="h2">SHOPPING BAG</h2>

                    {productsCart.map((item) => (
                        <li key={item.product._id} className={styles.bagLiItem}>
                            <div className={styles.imgWrapper}>
                                <img
                                    src={item.product.imageUrls[0]}
                                    alt={item.product.categories}
                                    className={styles.itemImg}
                                />
                            </div>
                            <div className={styles.descriptionWrapper}>
                                <h2 className={classNames(styles.itemName, 'h2')}>
                                    {item.product.name}
                                </h2>
                                <p className={styles.description}>
                                    {
                                        "This is the luxury bedding set with absolutely everything in it, at a price that won't keep you up at night."
                                    }
                                </p>
                                <p className={styles.currentPrice}>${item.product.currentPrice}</p>
                                <p className={styles.quantity}>
                                    Quantity: <span>{item.cartQuantity}</span>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
                <SummaryTextSection
                    subtotal={productsCart.reduce(
                        (acc, item) => acc + item.product.currentPrice * item.cartQuantity,
                        0,
                    )}
                    route="/checkout/details"
                />
            </div>
            <div className={styles.linkWrapper}>
                <Link className={styles.backLink} to="/cart" onClick={() => window.scroll(0, 0)}>
                    <Icon type="arrowLeft" /> BACK
                </Link>
            </div>
        </>
    );
};
export default BagPage;
