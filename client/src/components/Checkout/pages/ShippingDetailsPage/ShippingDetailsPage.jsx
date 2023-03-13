import React from 'react';
import TabsSection from '../../sections/TabsSection';
import styles from '../PaymentOptionsPage/PaymentOptionsPage.module.scss';
import SummarySection from '../../sections/SummarySection';
import Form from 'components/Checkout/sections/Form';

const ShippingDetailsPage = () => {
    return (
        <>
            <TabsSection />
            <div className={styles.mainContainer}>
                <Form />
                <SummarySection route="/checkout/options" />
            </div>
        </>
    );
};
export default ShippingDetailsPage;
