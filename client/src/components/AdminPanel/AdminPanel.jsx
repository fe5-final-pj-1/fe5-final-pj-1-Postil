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
                    <NavLink>
                        <Icon type="home" />
                        <span>Dashboard</span>
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
