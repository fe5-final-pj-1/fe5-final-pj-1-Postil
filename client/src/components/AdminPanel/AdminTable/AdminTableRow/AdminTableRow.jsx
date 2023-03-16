import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import userAvatar from './img/UserAvatar.png';
import adminPanelStyles from './AdminTableRow.module.scss';
import updateOrder from 'api/updateOrder';
import cancelOrder from 'api/cancelOrder';
import classNames from 'classnames';
import Button from '../../../Button';
import Icon from '../../../Icon';
import PropTypes from 'prop-types';
import getAllCustomers from 'api/getAllCustomers';
import getAllOrders from 'api/getAllOrders';
import deleteOrder from 'api/deleteOrder';
import deleteSpecificCustomer from 'api/deleteSpecificCustomer';

function AdminTableRow(props) {
    const { data, setData, type, setmodalChange } = props;
    const [status, setStatus] = useState(data.status);
    const [canceled, setCanceled] = useState(data.canceled);
    let totalProductsNumber = useCallback(() => {
        if (type !== 'orders') {
            return null;
        }
        return data.products.reduce((acc, cur) => acc + cur.cartQuantity, 0);
    }, [data, type]);
    const handleDeleteClick = () => {
        if (type !== 'orders') {
            deleteSpecificCustomer(data._id).then(() => {
                getAllCustomers().then((res) => {
                    setData(res.data);
                });
            });
        } else {
            deleteOrder(data._id).then(() => {
                setmodalChange('deleted');
                setTimeout(() => setmodalChange(null), 3000);
                getAllOrders().then((res) => {
                    setData(res.data);
                });
            });
        }
    };
    const handleStatusSubmit = (e) => {
        e.preventDefault();
        updateOrder(
            {
                status: status,
            },
            data._id,
        );
        setmodalChange('status');
        setTimeout(() => setmodalChange(null), 3000);
    };
    const handleCanceledSubmit = (e) => {
        e.preventDefault();
        cancelOrder(data._id).then(() => {
            setCanceled(true);
            setmodalChange('closed');
            setTimeout(() => setmodalChange(null), 3000);
        });
    };
    return (
        <tr className={adminPanelStyles.row}>
            <td className={type !== 'orders' ? adminPanelStyles.rowNoneLarge : ''}>
                {type !== 'orders' ? data.customerNo : data.customOrderNumder}
            </td>
            {type !== 'orders' && (
                <td className={adminPanelStyles.rowCustomerData}>
                    <img
                        className={adminPanelStyles.img}
                        src={data.avatarUrl ? data.avatarUrl : userAvatar}
                        alt={`Product ${data.customerNo}`}
                    />
                    <span>{`${data.firstName} ${data.lastName}`}</span>
                </td>
            )}
            {type === 'orders' && (
                <td
                    className={classNames(
                        adminPanelStyles.rowOrderData,
                        adminPanelStyles.rowNoneLarge,
                    )}
                >
                    <p>View Details</p>
                    <div
                        className={classNames(
                            adminPanelStyles.rowDetailsBlock,
                            adminPanelStyles.rowDetailsBlockProducts,
                        )}
                    >
                        <p>Products total - {totalProductsNumber()}:</p>
                        {data.products.map((elem, index) => {
                            return (
                                <Link to={`/catalog/${elem.product._id}`} key={index}>
                                    № {elem.product.itemNo} {elem.product.name} -{' '}
                                    {elem.cartQuantity}
                                </Link>
                            );
                        })}
                    </div>
                </td>
            )}
            <td className={adminPanelStyles.rowNoneSmall}>
                {type !== 'orders' ? data.email : `${data.totalSum}$`}
            </td>
            {type !== 'orders' && (
                <td
                    className={
                        !data.address
                            ? classNames(
                                  adminPanelStyles.rowTextCenter,
                                  adminPanelStyles.rowNoneLarge,
                              )
                            : adminPanelStyles.rowNoneLarge
                    }
                >
                    {data.address ? data.address : '-'}
                </td>
            )}
            {type === 'orders' && (
                <td
                    className={classNames(
                        adminPanelStyles.rowOrderData,
                        adminPanelStyles.rowNoneMedium,
                    )}
                >
                    <p>View Details</p>
                    <div
                        className={classNames(
                            adminPanelStyles.rowDetailsBlock,
                            adminPanelStyles.rowDetailsBlockAdress,
                        )}
                    >
                        <Link to={`/admin/dashboard/orders/${data.orderNo}`}>
                            <span>
                                Name: {data.firstName} {data.lastName}
                            </span>
                            <span>Phone number: {data.mobile}</span>
                            <span>Phone email: {data.email}</span>
                            <span>Country: {data.deliveryAddress.country}</span>
                            <span>City: {data.deliveryAddress.city}</span>
                            <span>Address: {data.deliveryAddress.address}</span>
                            <span>Postal: {data.deliveryAddress.postal}</span>
                        </Link>
                    </div>
                </td>
            )}
            {type !== 'orders' && (
                <td
                    className={
                        !data.phone
                            ? classNames(
                                  adminPanelStyles.rowTextCenter,
                                  adminPanelStyles.rowNoneMedium,
                              )
                            : adminPanelStyles.rowNoneMedium
                    }
                >
                    {data.phone ? data.phone : '-'}
                </td>
            )}
            {type === 'orders' && (
                <td
                    className={classNames(
                        adminPanelStyles.rowStatus,
                        adminPanelStyles.rowNoneMedium,
                    )}
                >
                    {!canceled ? (
                        <form onSubmit={handleStatusSubmit} className={adminPanelStyles.form}>
                            <select
                                id="color"
                                name="color"
                                className={adminPanelStyles.formSelect}
                                onChange={(e) => setStatus(e.target.value)}
                                value={status}
                            >
                                <option value="not shipped">Not shipped</option>
                                <option value="shipped">Shipped</option>
                                <option value="delivered">Delivered</option>
                                <option value="received">Received</option>
                            </select>
                            <input
                                type="submit"
                                value="OK"
                                className={adminPanelStyles.formSubmitBtn}
                            />
                        </form>
                    ) : (
                        <span className={adminPanelStyles.rowClosed}>CLOSED</span>
                    )}
                </td>
            )}
            {type === 'orders' && (
                <td className={adminPanelStyles.rowStatus}>
                    {!canceled ? (
                        <form onSubmit={handleCanceledSubmit} className={adminPanelStyles.form}>
                            <input
                                type="submit"
                                value="Close"
                                className={classNames(
                                    adminPanelStyles.formSubmitBtn,
                                    adminPanelStyles.formSubmitBtnClose,
                                )}
                            />
                        </form>
                    ) : (
                        <span className={adminPanelStyles.rowClosed}>CLOSED</span>
                    )}
                </td>
            )}
            <td className={adminPanelStyles.rowDeleteBtn}>
                <Button
                    handleClick={handleDeleteClick}
                    text={<Icon type="delete" />}
                    className={adminPanelStyles.removeBtn}
                />
            </td>
        </tr>
    );
}

export default AdminTableRow;

AdminTableRow.propTypes = {
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired,
    setmodalChange: PropTypes.func,
    type: PropTypes.string,
};
