import React, { useState, useEffect } from 'react';
import adminPanelStyles from './AdminDashboardOrders.module.scss';
import classNames from 'classnames';
import AdminTable from '../AdminTable';
import getAllOrders from 'api/getAllOrders';
import { Oval } from 'react-loader-spinner';

function AdminDashboardOrders() {
    const [orders, setOrders] = useState([]);
    const [modalChange, setmodalChange] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        getAllOrders().then((res) => {
            setOrders(res.data);
            setIsLoaded(true);
        });
    }, []);
    if (!isLoaded) {
        return (
            <Oval
                height={130}
                width={130}
                color="#373F41"
                wrapperStyle={{}}
                wrapperClass={adminPanelStyles.loader}
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        );
    }
    return (
        <div className={adminPanelStyles.wrapper}>
            <AdminTable
                data={orders}
                setData={setOrders}
                type="orders"
                setmodalChange={setmodalChange}
            />
            <div
                className={classNames(
                    modalChange ? adminPanelStyles.PopUpShow : adminPanelStyles.PopUp,
                )}
            >
                {modalChange && modalChange === 'status'
                    ? 'Status changed'
                    : `Order ${modalChange}`}
            </div>
        </div>
    );
}

export default AdminDashboardOrders;
