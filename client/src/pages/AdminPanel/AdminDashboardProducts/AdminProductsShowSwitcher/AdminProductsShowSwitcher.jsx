import React from 'react';
import { useContext } from 'react';
import { AdminProductsShowContext } from 'context/AdminProductsShowContext';
import classNames from 'classnames';
import adminPanelStyles from './AdminProductsShowSwitcher.module.scss';

function AdminProductsShowSwitcher() {
    const { tableView, setTableView } = useContext(AdminProductsShowContext);

    const clickHandler = (e) => {
        setTableView({ type: e.target.innerText });
    };

    const AdminProductsListBtnClickable = (
        <div className={adminPanelStyles.AdminProductsShowSwitcher}>
            <button
                className={classNames(
                    adminPanelStyles.AdminProductsShowBtn,
                    adminPanelStyles.AdminProductsShowBtnList,
                )}
                onClick={clickHandler}
            >
                List
            </button>
            <button
                className={classNames(
                    adminPanelStyles.AdminProductsShowBtn,
                    adminPanelStyles.AdminProductsShowBtnTable,
                )}
                disabled
            >
                Table
            </button>
        </div>
    );

    const AdminProductsTableBtnClickable = (
        <div className={adminPanelStyles.AdminProductsShowSwitcher}>
            <button
                className={classNames(
                    adminPanelStyles.AdminProductsShowBtn,
                    adminPanelStyles.AdminProductsShowBtnList,
                )}
                disabled
            >
                List
            </button>
            <button
                className={classNames(
                    adminPanelStyles.AdminProductsShowBtn,
                    adminPanelStyles.AdminProductsShowBtnTable,
                )}
                onClick={clickHandler}
            >
                Table
            </button>
        </div>
    );

    return tableView ? AdminProductsListBtnClickable : AdminProductsTableBtnClickable;
}

export default AdminProductsShowSwitcher;
