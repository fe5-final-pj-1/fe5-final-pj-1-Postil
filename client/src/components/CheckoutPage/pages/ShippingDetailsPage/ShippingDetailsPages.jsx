import React from 'react';
import TabsSection from '../../TabsSection/TabsSection';
import styles from './ShippingDetailsPage.module.scss';
import Button from '../../../Button';
const ShippingDetailsPages = () => {
    return (
        <>
            <TabsSection />
            <section className={styles.container}>
                <div className={styles.payMain}>
                    <h2 className={styles.payTitle}>PAYMENT METHOD</h2>
                    <div className={styles.payCardBlock}></div>
                    <div className={styles.payCashBloc}></div>
                    <Button className={styles.payBtn} text={'BACK'} />
                </div>
            </section>
        </>
    );
};
export default ShippingDetailsPages;
