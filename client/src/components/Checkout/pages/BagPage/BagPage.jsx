import React from 'react';
import TabsSection from '../../sections/TabsSection';
import SummaryTextSection from '../../sections/SummaryTextSection';
import styles from './BagPage.module.scss';

const BagPage = () => {
    return (
        <>
            <TabsSection />
            <div className={styles.mainContainer}>
                <SummaryTextSection />
            </div>
        </>
    );
};
export default BagPage;
