import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import getCart from 'api/getCart';
import getOneProduct from 'api/getOneProduct';
import styles from './SummarySection.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'components/Button';
import { addProductsToOrder } from 'store/orderSlice';
import createOrder from 'api/createOrder';
import jwt_decode from 'jwt-decode';

const SummarySection = ({ type }) => {
    const tokenSting = useSelector((state) => state.store.login.token, shallowEqual);
    const [userID, setuserID] = useState('');
    const shippingCost = useSelector((state) => state.order.customerData.shipping);
    const orderData = useSelector((state) => state.order);
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
            const [, token] = tokenSting.split(' ');
            const decoded = jwt_decode(token);
            setuserID(decoded.id);
        }
    }, [isLogIn, tokenSting]);
    const createOrderFunc = () => {
        const customOrderNumder = Math.random().toString().slice(2, 11);

        const { products, customerData, paymentMethod } = orderData;
        let newOrder = {};
        if (isLogIn) {
            newOrder = {
                customerId: userID,
                ...customerData,
                ...paymentMethod,
                customOrderNumder,
                letterSubject: 'Thank you for order! You are welcome!',
                letterHtml: `<h1>Your order is placed. OrderNo is ${customOrderNumder}.</h1><p>{Other details about order in your HTML}</p>`,
            };
        } else {
            newOrder = {
                ...customerData,
                ...paymentMethod,
                products,
                customOrderNumder,
                letterSubject: 'Thank you for order! You are welcome!',
                letterHtml: `<h1>Your order is placed. OrderNo is ${customOrderNumder}.</h1><p>{Other details about order in your HTML}</p>`,
            };
        }
        createOrder(newOrder).then((res) => console.log(res));
    };
    useEffect(() => {
        if (isLogIn) {
            getCart().then((res) => setProductsCart(res.data.products));
        } else {
            loadCart();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart, isLogIn]);
    useEffect(() => {
        if (!isLogIn) dispatch(addProductsToOrder(productsCart));
    }, [isLogIn, productsCart, dispatch]);
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
                    SHIPPING
                    <span className={styles.deliv}>
                        {!shippingCost ? 'FREE' : shippingCost === 'FreeShipping' ? 'FREE' : '$10'}
                    </span>
                </p>
                <p className={styles.subName}>
                    TAXES<span className={styles.taxes}>$5</span>
                </p>
            </div>
            <p className={styles.totalName}>
                TOTAL
                <span className={styles.sum}>
                    $
                    {!shippingCost
                        ? productsCart.reduce(
                              (acc, item) => acc + item.product.currentPrice * item.cartQuantity,
                              5,
                          )
                        : shippingCost === 'FreeShipping'
                        ? productsCart.reduce(
                              (acc, item) => acc + item.product.currentPrice * item.cartQuantity,
                              5,
                          )
                        : productsCart.reduce(
                              (acc, item) => acc + item.product.currentPrice * item.cartQuantity,
                              15,
                          )}
                </span>
            </p>
            {type ? (
                <Button className={styles.sumBtn} text="NEXT" type="submit" form="shippingForm" />
            ) : (
                <Button
                    className={styles.sumBtn}
                    text="CREATE ORDER"
                    handleClick={createOrderFunc}
                />
            )}
        </section>
    );
};

export default SummarySection;

SummarySection.propTypes = {
    type: PropTypes.string,
};
SummarySection.defaultProps = {
    type: '',
};
