import React from 'react';
import userAvatar from './img/UserAvatar.png';
import adminPanelStyles from './AdminTableRow.module.scss';
import classNames from 'classnames';
import Button from '../../../Button';
import Icon from '../../../Icon';
import PropTypes from 'prop-types';
import deleteSpecificCustomer from 'api/deleteSpecificCustomer';

function AdminTableRow(props) {
    const { id, customerNo, avatarUrl, email, firstName, lastName, address, phone, forceUpdate } =
        props;

    const handleDeleteCustomerClick = () => {
        deleteSpecificCustomer(id);
        forceUpdate();
    };

    return (
        <tr className={adminPanelStyles.row}>
            <td className={adminPanelStyles.rowNoneLarge}>{customerNo}</td>
            <td className={adminPanelStyles.rowUserName}>
                <img
                    className={adminPanelStyles.img}
                    src={avatarUrl ? avatarUrl : userAvatar}
                    alt={`Product ${customerNo}`}
                />

                <span>{`${firstName} ${lastName}`}</span>
            </td>
            <td className={adminPanelStyles.rowNoneSmall}>{email}</td>
            <td
                className={
                    !address
                        ? classNames(adminPanelStyles.rowTextCenter, adminPanelStyles.rowNoneLarge)
                        : adminPanelStyles.rowNoneLarge
                }
            >
                {address ? address : '-'}
            </td>
            <td
                className={
                    !phone
                        ? classNames(adminPanelStyles.rowTextCenter, adminPanelStyles.rowNoneMedium)
                        : adminPanelStyles.rowNoneMedium
                }
            >
                {phone ? phone : '-'}
            </td>
            <td className={adminPanelStyles.rowDeleteBtn}>
                <Button
                    handleClick={handleDeleteCustomerClick}
                    text={<Icon type="delete" />}
                    className={adminPanelStyles.removeBtn}
                />
            </td>
        </tr>
    );
}

export default AdminTableRow;

AdminTableRow.propTypes = {
    id: PropTypes.string.isRequired,
    customerNo: PropTypes.string,
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string.isRequired,
    address: PropTypes.string,
    phone: PropTypes.string,
    forceUpdate: PropTypes.func,
};
