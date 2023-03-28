import React, { useEffect, useState } from 'react';
import styles from './PaymentSection.module.scss';
import Icon from '../Icon';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPaymentMethod } from 'store/orderSlice';

const PaymentSection = () => {
    const [active, setActive] = useState('credit cart');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addPaymentMethod({ paymentMethod: active }));
    }, [dispatch, active]);
    return (
        <>
            <section className={styles.payMain}>
                <h2 className={styles.payTitle}>PAYMENT METHOD</h2>
                <div
                    className={`${styles.payCardBlock} ${
                        active === 'credit cart' ? `${styles.payCardBlockActive}` : ''
                    }`}
                    onClick={() => setActive('credit cart')}
                    data-testid="card"
                >
                    <p className={styles.payIcon}>
                        <Icon type={'pressedCircle'} />
                    </p>
                    <h2 className={styles.payCardTitle}>Payment by credit card</h2>
                    <div className={styles.payCardIcon}>
                        <Icon type={'masterCard'} />
                        <Icon type={'visaCard'} />
                    </div>
                </div>
                <div
                    className={`${styles.payCashBloc} ${
                        active === 'cash' ? `${styles.payCashBlocActive}` : ''
                    }`}
                    onClick={() => setActive('cash')}
                    data-testid="cash"
                >
                    <p className={styles.payIcon}>
                        <Icon type={'pressedCircle'} />
                    </p>
                    <div className={styles.payText}>
                        <h2 className={styles.payTextTitle}>Payment to the courier</h2>
                        <p className={styles.payTextInfo}>
                            Cash or card payment to the courier upon delivery
                        </p>
                    </div>
                </div>
                <Link
                    to="/checkout/details"
                    className={styles.payBtn}
                    onClick={() => window.scroll(0, 0)}
                >
                    BACK
                </Link>
            </section>
        </>
    );
};
export default PaymentSection;
