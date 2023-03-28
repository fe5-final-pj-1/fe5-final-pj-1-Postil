import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './TabsSection.module.scss';

const TabsSection = () => {
    return (
        <>
            <div className={styles.tabsMain}>
                <div className={styles.tabsNav}>
                    <NavLink
                        to="/checkout/confirm"
                        className={({ isActive }) =>
                            isActive
                                ? classNames(styles.tabsLink, styles.tabsActive)
                                : styles.tabsLink
                        }
                    >
                        1. Shopping Bag
                    </NavLink>
                    <NavLink
                        to="/checkout/details"
                        className={({ isActive }) =>
                            isActive
                                ? classNames(styles.tabsLink, styles.tabsActive)
                                : styles.tabsLink
                        }
                    >
                        2. Shipping Details
                    </NavLink>
                    <NavLink
                        to="/checkout/options"
                        className={({ isActive }) =>
                            isActive
                                ? classNames(styles.tabsLink, styles.tabsActive)
                                : styles.tabsLink
                        }
                    >
                        3. Payment Options
                    </NavLink>
                </div>
            </div>
        </>
    );
};
export default TabsSection;
