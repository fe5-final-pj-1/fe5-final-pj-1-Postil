import React from 'react';
import adminPanelStyles from './AdminTable.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AdminTableRow from './AdminTableRow';

function AdminTable({ data, forceUpdate }) {
    return (
        <table className={adminPanelStyles.table}>
            <tbody>
                <tr className={adminPanelStyles.row}>
                    <th className={adminPanelStyles.rowNoneLarge}>№</th>
                    <th>Name</th>
                    <th className={adminPanelStyles.rowNoneSmall}>Email</th>
                    <th
                        className={classNames(
                            adminPanelStyles.rowNoneLarge,
                            adminPanelStyles.rowTextCenter,
                        )}
                    >
                        Address
                    </th>
                    <th
                        className={classNames(
                            adminPanelStyles.rowTextCenter,
                            adminPanelStyles.rowNoneMedium,
                        )}
                    >
                        Phone
                    </th>
                    <th className={adminPanelStyles.rowTextCenter}>Delete</th>
                </tr>
                {data.map((element) => {
                    const {
                        _id,
                        isAdmin,
                        customerNo,
                        avatarUrl,
                        email,
                        firstName,
                        lastName,
                        address,
                        phone,
                    } = element;
                    if (isAdmin) {
                        return null;
                    }
                    {
                        return (
                            <AdminTableRow
                                key={_id}
                                id={_id}
                                customerNo={customerNo}
                                avatarUrl={avatarUrl}
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                                address={address}
                                phone={phone}
                                forceUpdate={forceUpdate}
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
    forceUpdate: PropTypes.func,
};
