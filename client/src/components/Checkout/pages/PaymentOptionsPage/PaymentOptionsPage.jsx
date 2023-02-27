import React from 'react';
import Header from '../../../Header';
import TabsSection from '../../sections/TabsSection';
import PaymentSection from '../../sections/PaymentSection';
import styles from './PaymentOptionsPage.module.scss';
import SummarySection from '../../sections/SummarySection';

const PaymentOptionsPage = () => {
    return (
        <>
            <div>
                <Header />
                <TabsSection />
                <div className={styles.mainContainer}>
                    <PaymentSection />
                    <SummarySection />
                </div>
            </div>
        </>
    );
};
export default PaymentOptionsPage;
