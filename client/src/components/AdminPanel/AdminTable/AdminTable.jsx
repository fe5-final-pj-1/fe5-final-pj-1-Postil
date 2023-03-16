import React from 'react';
import adminPanelStyles from './AdminTable.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AdminTableRow from './AdminTableRow';

function AdminTable({ data, setData, type, setmodalChange }) {
    return (
        <table className={adminPanelStyles.table}>
            <thead>
                <tr className={adminPanelStyles.row}>
                    <th className={type !== 'orders' ? adminPanelStyles.rowNoneLarge : ''}>№</th>
                    <th className={type !== 'orders' ? '' : adminPanelStyles.rowNoneLarge}>
                        {type !== 'orders' ? 'Name' : 'Products'}
                    </th>
                    <th className={adminPanelStyles.rowNoneSmall}>
                        {type !== 'orders' ? 'Email' : 'Total Sum'}
                    </th>
                    <th
                        className={
                            type !== 'orders'
                                ? classNames(
                                      adminPanelStyles.rowNoneLarge,
                                      adminPanelStyles.rowTextCenter,
                                  )
                                : adminPanelStyles.rowNoneMedium
                        }
                    >
                        {type !== 'orders' ? 'Address' : 'Delivery Address'}
                    </th>
                    <th
                        className={classNames(
                            adminPanelStyles.rowTextCenter,
                            adminPanelStyles.rowNoneMedium,
                        )}
                    >
                        {type !== 'orders' ? 'Phone' : 'Status'}
                    </th>
                    {type === 'orders' && (
                        <th className={classNames(adminPanelStyles.rowTextCenter)}>Closed</th>
                    )}
                    <th className={adminPanelStyles.rowTextCenter}>Delete</th>
                </tr>
            </thead>
            <tbody>
                {[...data].reverse().map((element) => {
                    if (element.isAdmin) {
                        return null;
                    }
                    {
                        return (
                            <AdminTableRow
                                key={element._id}
                                data={element}
                                setData={setData}
                                type={type}
                                setmodalChange={setmodalChange}
                            />
                        );
                    }
                })}
            </tbody>
        </table>
    );
}

export default AdminTable;

AdminTable.propTypes = {
    data: PropTypes.array.isRequired,
    setData: PropTypes.func.isRequired,
    type: PropTypes.string,
    setmodalChange: PropTypes.func,
};
