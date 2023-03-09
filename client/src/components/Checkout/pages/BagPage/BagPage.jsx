import React from 'react';
import TabsSection from '../../sections/TabsSection';
import SummaryTextSection from '../../sections/SummaryTextSection';
import styles from './BagPage.module.scss';
import Form from 'components/Checkout/sections/Form';

const BagPage = () => {
    return (
        <>
            <TabsSection />
            <div className={styles.mainContainer}>
                <Form />
                <SummaryTextSection />
            </div>
        </>
    );
};
export default BagPage;
