import React, { useState } from 'react';
import styles from './PaymentSection.module.scss';
import Icon from '../../../Icon';
import Button from '../../../Button';

const PaymentSection = () => {
    const [active, setActive] = useState(1);
    return (
        <>
            <section>
                <div className={styles.payMain}>
                    <h2 className={styles.payTitle}>PAYMENT METHOD</h2>
                    <div
                        className={`${styles.payCardBlock} ${
                            active === 1 ? `${styles.payCardBlockActive}` : ''
                        }`}
                        onClick={() => setActive(1)}
                    >
                        <p className={styles.payIcon}>
                            <Icon type={'pressedCircle'} />
                        </p>
                        <h2 className={styles.payCardTitle}>Payment by credit card</h2>
                        <p className={styles.payCardIcon}>
                            <Icon type={'masterCard'} />
                            &nbsp;
                            <Icon type={'visaCard'} />
                        </p>
                    </div>
                    <div
                        className={`${styles.payCashBloc} ${
                            active === 2 ? `${styles.payCashBlocActive}` : ''
                        }`}
                        onClick={() => setActive(2)}
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
                    <Button className={styles.payBtn} text={'BACK'} />
                </div>
            </section>
        </>
    );
};
export default PaymentSection;
