import React from 'react';
import adminPanelStyles from './AdminTable.module.scss';
import PropTypes from 'prop-types';
import AdminTableRow from './AdminTableRow';

function AdminTable({ data, forceUpdate }) {
    return (
        <table className={adminPanelStyles.table}>
            <tbody>
                <tr className={adminPanelStyles.row}>
                    <th>№</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th className={adminPanelStyles.rowTextCenter}>Address</th>
                    <th className={adminPanelStyles.rowTextCenter}>Phone</th>
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
