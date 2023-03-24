import React from 'react';
import TabsSection from '../../sections/TabsSection';
import styles from './ShippingDetailsPage.module.scss';
import SummarySection from '../../sections/SummarySection';
import Form from 'components/Checkout/sections/Form';

const ShippingDetailsPage = () => {
    return (
        <>
            <TabsSection />
            <div className={styles.mainContainer} data-testid="shipping-page">
                <Form />
                <SummarySection type="shipping" />
            </div>
        </>
    );
};
export default ShippingDetailsPage;
