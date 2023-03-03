import React from 'react';
import styles from './Tabs.module.scss';
import classNames from 'classnames';
import useTabs from '../../../hooks/useTabs';

function Tabs() {
    const { tabs, clickHandler } = useTabs();
    const clickTabsHandler = (e) => {
        clickHandler(e);
    };

    return (
        <ul className={styles.tabsContainer}>
            {tabs.map((tab, key) => (
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                <li
                    key={key}
                    onClick={clickTabsHandler}
                    className={classNames(styles.tab, tab.active ? styles.active : null)}
                >
                    {tab.text}
                </li>
            ))}
        </ul>
    );
}

export default Tabs;
