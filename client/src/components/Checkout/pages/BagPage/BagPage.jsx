import React from 'react';
import Header from '../../../Header';
import TabsSection from '../../sections/TabsSection';
import SummaryTextSection from '../../sections/SummaryTextSection';
import styles from './BagPage.module.scss';

const BagPage = () => {
    return (
        <>
            <div>
                <Header />
                <TabsSection />
                <div className={styles.mainContainer}>
                    <SummaryTextSection />
                </div>
            </div>
        </>
    );
};
export default BagPage;
