import React from 'react';
import TabsSection from '../../sections/TabsSection';
import PaymentSection from '../../sections/PaymentSection';
import styles from './PaymentOptionsPage.module.scss';
import SummarySection from '../../sections/SummarySection';

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
