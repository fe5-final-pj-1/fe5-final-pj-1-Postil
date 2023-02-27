import React from 'react';
import Header from '../../../Header';
import TabsSection from '../../sections/TabsSection';
import styles from '../PaymentOptionsPage/PaymentOptionsPage.module.scss';
import SummarySection from '../../sections/SummarySection';

const ShippingDetailsPage = () => {
    return (
        <>
            <div>
                <Header />
                <TabsSection />
                <div className={styles.mainContainer}>
                    <SummarySection />
                </div>
            </div>
        </>
    );
};
export default ShippingDetailsPage;
