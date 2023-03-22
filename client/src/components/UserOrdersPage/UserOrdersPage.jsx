/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import styles from './UserOrderPage.module.scss';
import Button from '../Button';
import Icon from '../Icon/Icon';
import getCustomerOrder from 'api/getCustomerOrder';

function UserOrdersPage() {
    const [active, setActive] = useState({
        orderData: false,
    });
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getCustomerOrder().then((res) => setOrders(res.data));
    }, []);
    useEffect(() => {
        const ordersTabs = orders.map((item) => item.customOrderNumder);
        const activeTabs = {};
        for (let index = 0; index < ordersTabs.length; index++) {
            const element = ordersTabs[index];
            activeTabs[element] = false;
        }
        setActive(activeTabs);
    }, [orders]);

    return (
        <main>
            <div className="container">
                <p className={styles.title}>My orders</p>
                {orders.map((item, index) => {
                    return (
                        <div className={styles.boxInfo} key={index}>
                            <Button
                                handleClick={() =>
                                    setActive({
                                        ...active,
                                        [item.customOrderNumder]: !active[item.customOrderNumder],
                                    })
                                }
                                className={styles.boxInfoName}
                                text={
                                    <>
                                        <p className={styles.boxInfoTitle}>
                                            Order № {item.customOrderNumder}
                                        </p>
                                        <Icon
                                            type={active.orderData ? 'minus' : 'bagDropDownArrow'}
                                        />
                                    </>
                                }
                            />
                            {active[item.customOrderNumder] && (
                                <div className={styles.wrpFullItem}>
                                    <ul className={styles.orderDataList}>
                                        <li className={styles.orderDataItem}>
                                            <span className={styles.orderDataPlaseholder}>
                                                date of purchase:
                                            </span>
                                            {item.date.slice(0, 10)}
                                        </li>
                                        <li className={styles.orderDataItem}>
                                            <span className={styles.orderDataPlaseholder}>
                                                Status:
                                            </span>
                                            {item.status}
                                        </li>
                                        <li className={styles.orderDataItem}>
                                            <span className={styles.orderDataPlaseholder}>
                                                Total Sum
                                            </span>
                                            $ {(item.totalSum * 1.1 + item.shipping).toFixed(2)}
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </main>
    );
}

export default UserOrdersPage;
