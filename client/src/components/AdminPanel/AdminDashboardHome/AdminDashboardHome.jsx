import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import adminPanelStyles from './AdminDashboardHome.module.scss';
import classNames from 'classnames';
// eslint-disable-next-line no-unused-vars
import getAllCustomers from 'api/getAllCustomers';
// eslint-disable-next-line no-unused-vars
import getAllOrders from 'api/getAllOrders';
import { Oval } from 'react-loader-spinner';

function AdminDashboardHome() {
    // eslint-disable-next-line no-unused-vars
    const [orders, setOrders] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [customers, setCustomers] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [isLoaded, setIsLoaded] = useState(true);
    useEffect(() => {
        // getAllOrders().then((res) => {
        //     setOrders(res.data);
        //     setIsLoaded(true);
        // });
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
        <div className={classNames(adminPanelStyles.wrapper, adminPanelStyles.adminHome)}>
            <div className={adminPanelStyles.adminHomeProductsSold}>1</div>
            <div className={adminPanelStyles.adminHomeTotalBalance}>2</div>
            <div className={adminPanelStyles.adminHomeUsers}>3</div>
            <div className={adminPanelStyles.adminHomeSubscribers}>4</div>
            <div className={adminPanelStyles.adminHomeLatestProducts}>5</div>
            <div className={adminPanelStyles.adminHomeDataChart}>4</div>
            <div className={adminPanelStyles.adminHomeLastOrders}>5</div>
            <div className={adminPanelStyles.adminHomeNewUsers}>6</div>
        </div>
    );
}

export default AdminDashboardHome;
