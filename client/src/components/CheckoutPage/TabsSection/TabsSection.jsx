import React from 'react';
import { useState } from 'react';
import styles from './TabsSection.module.scss';

const TabsSection = () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <>
            <div className={styles.tabsMain}>
                <div className={styles.tabsNav}>
                    <button
                        className={`${styles.tabsLink} ${
                            activeTab === 1 ? `${styles.tabsActive}` : ''
                        }`}
                        onClick={() => setActiveTab(1)}
                    >
                        1. Shopping Bag
                    </button>
                    <button
                        className={`${styles.tabsLink} ${
                            activeTab === 2 ? `${styles.tabsActive}` : ''
                        }`}
                        onClick={() => setActiveTab(2)}
                    >
                        2. Shipping Details
                    </button>
                    <button
                        className={`${styles.tabsLink} ${
                            activeTab === 3 ? `${styles.tabsActive}` : ''
                        }`}
                        onClick={() => setActiveTab(3)}
                    >
                        3. Payment Options
                    </button>
                </div>

                {/*<div className="tabs-content">*/}
                {/*    {activeTab === 1 && <p>Content for Tab 1 goes here.</p>}*/}
                {/*    {activeTab === 2 && <p>Content for Tab 2 goes here.</p>}*/}
                {/*    {activeTab === 3 && <p>Content for Tab 3 goes here.</p>}*/}
                {/*</div>*/}
            </div>
        </>
    );
};
export default TabsSection;
