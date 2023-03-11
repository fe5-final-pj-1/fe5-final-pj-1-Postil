import React from 'react';
// eslint-disable-next-line no-unused-vars
import adminPanelStyles from './AdminPanel.module.scss';
// eslint-disable-next-line no-unused-vars
import { Link, NavLink, Outlet } from 'react-router-dom';
import Icon from 'components/Icon';
import classNames from 'classnames';

function AdminPanel() {
    return (
        <main>
            <div className={classNames(adminPanelStyles.adminPanelWrapper, 'container')}>
                <div className={adminPanelStyles.navigation}>
                    <NavLink
                        to="/admin/dashboard/home"
                        className={({ isActive }) =>
                            isActive
                                ? classNames(
                                      adminPanelStyles.navigationLink,
                                      adminPanelStyles.navigationLinkActive,
                                  )
                                : adminPanelStyles.navigationLink
                        }
                    >
                        <Icon type="home" />
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink
                        to="/admin/dashboard/customers"
                        className={({ isActive }) =>
                            isActive
                                ? classNames(
                                      adminPanelStyles.navigationLink,
                                      adminPanelStyles.navigationLinkActive,
                                  )
                                : adminPanelStyles.navigationLink
                        }
                    >
                        <Icon type="person" />
                        <span>Customers</span>
                    </NavLink>
                </div>
                <div className={adminPanelStyles.content}>
                    <Outlet />
                </div>
            </div>
        </main>
    );
}

export default AdminPanel;
