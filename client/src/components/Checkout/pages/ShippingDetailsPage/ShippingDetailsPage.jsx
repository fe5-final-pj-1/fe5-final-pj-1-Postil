import React from 'react';
import TabsSection from '../../sections/TabsSection';
import styles from '../PaymentOptionsPage/PaymentOptionsPage.module.scss';
import SummarySection from '../../sections/SummarySection';

const ShippingDetailsPage = () => {
    return (
        <>
            <TabsSection />
            <div className={styles.mainContainer}>
                <SummarySection />
            </div>
        </>
    );
};
export default ShippingDetailsPage;
