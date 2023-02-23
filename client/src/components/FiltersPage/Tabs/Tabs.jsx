import React from 'react';
import styles from './Tabs.module.scss';

function Tabs() {
    const tabs = [
        { text: 'SHOP ALL' },
        { text: 'BEDROOM' },
        { text: 'BED LINEN' },
        { text: 'KITCHEN' },
        { text: 'BATHROOM' },
        { text: 'LOUNGEWEAR' },
        { text: 'SALE' },
    ];
    return (
        <ul className={styles.tabsContainer}>
            {tabs.map((tab, key) => (
                <li key={key} className={styles.tab}>
                    {tab.text}
                </li>
            ))}
        </ul>
    );
}

export default Tabs;
