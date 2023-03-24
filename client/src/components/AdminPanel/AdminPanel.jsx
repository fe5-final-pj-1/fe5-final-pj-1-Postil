import React from 'react';
import adminPanelStyles from './AdminPanel.module.scss';
import { NavLink, Outlet } from 'react-router-dom';
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
                        to="/admin/dashboard/orders"
                        className={({ isActive }) =>
                            isActive
                                ? classNames(
                                      adminPanelStyles.navigationLink,
                                      adminPanelStyles.navigationLinkActive,
                                  )
                                : adminPanelStyles.navigationLink
                        }
                    >
                        <Icon type="sell" />
                        <span>Orders</span>
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
                        <Icon type="bed" />
                        <span>Products</span>
                    </NavLink>
                    <NavLink
                        to="/admin/dashboard/promotions"
                        className={({ isActive }) =>
                            isActive
                                ? classNames(
                                      adminPanelStyles.navigationLink,
                                      adminPanelStyles.navigationLinkActive,
                                  )
                                : adminPanelStyles.navigationLink
                        }
                    >
                        <Icon type="promotions" />
                        <span>Promotions</span>
                    </NavLink>
                    <NavLink
                        to="/admin/dashboard/reviews"
                        className={({ isActive }) =>
                            isActive
                                ? classNames(
                                      adminPanelStyles.navigationLink,
                                      adminPanelStyles.navigationLinkActive,
                                  )
                                : adminPanelStyles.navigationLink
                        }
                    >
                        <Icon type="chat-small" />
                        <span>Reviews</span>
                    </NavLink>
                    <NavLink
                        to="/admin/dashboard/subscribers"
                        className={({ isActive }) =>
                            isActive
                                ? classNames(
                                      adminPanelStyles.navigationLink,
                                      adminPanelStyles.navigationLinkActive,
                                  )
                                : adminPanelStyles.navigationLink
                        }
                    >
                        <Icon type="send" />
                        <span>Subscribers</span>
                    </NavLink>
                    <NavLink
                        to="/admin/dashboard/partners"
                        className={({ isActive }) =>
                            isActive
                                ? classNames(
                                      adminPanelStyles.navigationLink,
                                      adminPanelStyles.navigationLinkActive,
                                  )
                                : adminPanelStyles.navigationLink
                        }
                    >
                        <Icon type="partners" />
                        <span>Partners</span>
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
