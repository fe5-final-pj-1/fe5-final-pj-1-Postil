import React from 'react';
import TabsSection from '../../AllSections/TabsSection';
import PaymentSection from '../../AllSections/PaymentSection';
import styles from './PaymentOptionsPage.module.scss';
import SummarySection from '../../AllSections/SummarySection';

const PaymentOptionsPage = () => {
    return (
        <>
            <TabsSection />
            <div className={styles.mainContainer} data-testid="pay-page">
                <PaymentSection />
                <SummarySection />
            </div>
        </>
    );
};
export default PaymentOptionsPage;
