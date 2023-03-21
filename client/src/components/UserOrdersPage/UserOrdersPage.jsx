/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import styles from './UserOrderPage.module.scss';
import Button from '../Button';
import Icon from '../Icon/Icon';

function UserOrdersPage() {
    const [active, setActive] = useState({
        orderData: false,
    });
    const orderItems = [
        {
            goodsName: 'Order №1111111',
            image: 'https://res.cloudinary.com/dm2s5stjy/image/upload/v1678114440/photo_from_Cloudinary_%28RESIZE_580-on-580px--WEBP%29/Linens/01-64-g_xbi9bz_focwku.webp',
            orderNumber: '№1234567',
            status: 'Not shipped',
            quantity: 2,
            sum: '$410',
            deliveryMethod: 'Self-view from our stores',
            dateOfPurchase: '18.03.2023',
        },
    ];
    return (
        <main>
            <div className="container">
                <p className={styles.title}>My orders</p>
                {orderItems.map((item, index) => {
                    return (
                        <div className={styles.boxInfo} key={index}>
                            <Button
                                handleClick={() =>
                                    setActive({
                                        orderData: !active.orderData,
                                    })
                                }
                                className={styles.boxInfoName}
                                text={
                                    <>
                                        <p className={styles.boxInfoTitle}>{item.goodsName}</p>
                                        <Icon
                                            type={active.orderData ? 'minus' : 'bagDropDownArrow'}
                                        />
                                    </>
                                }
                            />
                            {active.orderData && (
                                <>
                                    <div className={styles.wrpFullItem}>
                                        <ul className={styles.orderDataList}>
                                            <li className={styles.orderDataItem}>
                                                <span className={styles.orderDataPlaseholder}>
                                                    status:
                                                </span>
                                                {item.status}
                                            </li>
                                            <li className={styles.orderDataItem}>
                                                <span className={styles.orderDataPlaseholder}>
                                                    quantity:
                                                </span>
                                                {item.quantity}
                                            </li>
                                            <li className={styles.orderDataItem}>
                                                <span className={styles.orderDataPlaseholder}>
                                                    sum:
                                                </span>
                                                {item.sum}
                                            </li>
                                            <li className={styles.orderDataItem}>
                                                <span className={styles.orderDataPlaseholder}>
                                                    delivery method:
                                                </span>
                                                {item.deliveryMethod}
                                            </li>
                                            <li className={styles.orderDataItem}>
                                                <span className={styles.orderDataPlaseholder}>
                                                    date of purchase:
                                                </span>
                                                {item.dateOfPurchase}
                                            </li>
                                        </ul>
                                    </div>
                                    <Button className={styles.editBtn} text={'REPEAT THE SPELL'} />
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </main>
    );
}

export default UserOrdersPage;
