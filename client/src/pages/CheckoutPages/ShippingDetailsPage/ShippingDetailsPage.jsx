import React from 'react';
import TabsSection from '../../AllSections/TabsSection';
import styles from './ShippingDetailsPage.module.scss';
import SummarySection from '../../AllSections/SummarySection';
import Form from 'components/Form';

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
