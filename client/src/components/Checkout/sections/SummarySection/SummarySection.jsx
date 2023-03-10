import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getCart from 'api/getCart';
import getOneProduct from 'api/getOneProduct';
import styles from './SummarySection.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Button from 'components/Button';

const SummarySection = ({ route }) => {
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
            getCart().then((res) => setProductsCart(res.data.products));
        } else {
            console.log(cart);
            loadCart();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart, isLogIn]);

    return (
        <section className={styles.summary}>
            <h2 className={styles.summaryTitle}>SUMMARY</h2>
            <ul className={styles.productsWrapper}>
                {productsCart.map((item) => {
                    return (
                        <li key={item.product._id} className={styles.summaryInfo}>
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
                                <p className={styles.currentPrice}>${item.product.currentPrice}</p>
                                <p className={styles.quantity}>{item.cartQuantity} pcs.</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <h3 className={styles.summaryText}>ENTER COUPONE CODE</h3>
            <div className={styles.payInfo}>
                <p className={styles.subName}>
                    SUBTOTAL
                    <span className={styles.total}>
                        $
                        {productsCart.reduce(
                            (acc, item) => acc + item.product.currentPrice * item.cartQuantity,
                            0,
                        )}
                    </span>
                </p>
                <p className={styles.subName}>
                    SHIPPING<span className={styles.deliv}>FREE</span>
                </p>
                <p className={styles.subName}>
                    TAXES<span className={styles.taxes}>$5</span>
                </p>
            </div>
            <p className={styles.totalName}>
                TOTAL
                <span className={styles.sum}>
                    $
                    {productsCart.reduce(
                        (acc, item) => acc + item.product.currentPrice * item.cartQuantity,
                        5,
                    )}
                </span>
            </p>
            {route ? (
                <Link to={route} className={styles.sumBtn}>
                    NEXT
                </Link>
            ) : (
                <Button className={styles.sumBtn} text="NEXT" />
            )}
        </section>
    );
};

export default SummarySection;

SummarySection.propTypes = {
    route: PropTypes.string,
};
SummarySection.defaultProps = {
    route: '',
};
