import React from 'react';
import TabsSection from '../../../components/TabsSection';
import PaymentSection from '../../../components/PaymentSection';
import styles from './PaymentOptionsPage.module.scss';
import SummarySection from '../../../components/SummarySection';

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
