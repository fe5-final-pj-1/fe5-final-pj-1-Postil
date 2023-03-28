import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Icon from 'components/Icon';
import adminPanelStyles from './AdminDashboardProducts.module.scss';
import classNames from 'classnames';

function AdminDashboardProducts() {
    return (
        <div className={adminPanelStyles.wrapper}>
            <div className={adminPanelStyles.navigation}>
                <NavLink
                    to="/admin/dashboard/products"
                    className={({ isActive }) =>
                        isActive
                            ? classNames(
                                  adminPanelStyles.navigationLink,
                                  adminPanelStyles.navigationLinkActive,
                              )
                            : adminPanelStyles.navigationLink
                    }
                >
                    <Icon type="edit" />
                    <span>All Products</span>
                </NavLink>
                <NavLink
                    to="/admin/dashboard/products/add"
                    className={({ isActive }) =>
                        isActive
                            ? classNames(
                                  adminPanelStyles.navigationLink,
                                  adminPanelStyles.navigationLinkActive,
                                  adminPanelStyles.navigationLinkActiveGreen,
                              )
                            : adminPanelStyles.navigationLink
                    }
                >
                    <Icon type="add" />
                    <span>Add</span>
                </NavLink>
            </div>
            <div className={adminPanelStyles.content}>
                <Outlet />
            </div>
        </div>
    );
}

export default AdminDashboardProducts;
