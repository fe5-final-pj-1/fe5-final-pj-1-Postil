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
            goodsName: 'Kimberly Double Bad',
            image: 'https://res.cloudinary.com/dm2s5stjy/image/upload/v1678114440/photo_from_Cloudinary_%28RESIZE_580-on-580px--WEBP%29/Linens/01-64-g_xbi9bz_focwku.webp',
            orderNumber: 1,
            price: '$205',
            quantity: 2,
            sum: '$410',
            purchaseMethod: 'Self-view from our stores',
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
                                        <p className={styles.boxInfoTitle}>
                                            {active.orderData ? (
                                                <img
                                                    className={styles.boxInfoimgSmallHidden}
                                                    src={item.image}
                                                    alt="img"
                                                />
                                            ) : (
                                                <>
                                                    <img
                                                        className={styles.boxInfoimgSmall}
                                                        src={item.image}
                                                        alt="img"
                                                    />
                                                    <span className={styles.headerPrice}>
                                                        {item.sum}
                                                    </span>
                                                </>
                                            )}
                                            {item.goodsName}
                                        </p>
                                        <Icon
                                            type={
                                                active.personalData ? 'minus' : 'bagDropDownArrow'
                                            }
                                        />
                                    </>
                                }
                            />
                            {active.orderData && (
                                <>
                                    <div className={styles.wrpFullItem}>
                                        <img
                                            className={styles.boxInfoImgBig}
                                            src={item.image}
                                            alt="img"
                                        />
                                        <ul className={styles.orderDataList}>
                                            <li className={styles.orderDataItem}>
                                                <span className={styles.orderDataPlaseholder}>
                                                    order number:
                                                </span>
                                                {item.orderNumber}
                                            </li>
                                            <li className={styles.orderDataItem}>
                                                <span className={styles.orderDataPlaseholder}>
                                                    price:
                                                </span>
                                                {item.price}
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
                                                    purchase method:
                                                </span>
                                                {item.purchaseMethod}
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
                {/* <div className={styles.boxInfo}>
                    <Button
                        handleClick={() =>
                            setActive({
                                ...active,
                                deliveryAddress: !active.deliveryAddress,
                            })
                        }
                        className={styles.boxInfoName}
                        text={
                            <>
                                <p className={styles.boxInfoTitle}>
                                    <Icon type={'profileDelivery'} />
                                    Delivery address
                                </p>
                                <Icon
                                    type={active.deliveryAddress ? 'minus' : 'bagDropDownArrow'}
                                />
                            </>
                        }
                    />
                    {active.deliveryAddress && (
                        <>
                            <p className={styles.personalDataItem}>
                                <span className={styles.personalDataPlaseholder}>
                                    Shipping address:
                                </span>
                                1 Khreshchatyk, Kyiv, Ukraine
                            </p>
                            <Button className={styles.editBtn} text={'EDIT'} />
                        </>
                    )}
                </div>
                <div className={styles.boxInfo}>
                    <Button
                        handleClick={() =>
                            setActive({
                                ...active,
                                contacts: !active.contacts,
                            })
                        }
                        className={styles.boxInfoName}
                        text={
                            <>
                                <p className={styles.boxInfoTitle}>
                                    <Icon type={'profileContacts'} />
                                    Contact
                                </p>
                                <Icon type={active.contacts ? 'minus' : 'bagDropDownArrow'} />
                            </>
                        }
                    />
                    {active.contacts && (
                        <>
                            <ul className={styles.contactList}>
                                <li className={styles.contactItem}>
                                    <span className={styles.personalDataPlaseholder}>
                                        phone number
                                    </span>
                                    +38(099)999-99-99
                                </li>
                                <li className={styles.contactItem}>
                                    <span className={styles.personalDataPlaseholder}>email</span>
                                    petrotest45451@gmail.com
                                </li>
                            </ul>
                            <Button className={styles.editBtn} text={'EDIT'} />
                        </>
                    )}
                </div> */}
            </div>
        </main>
    );
}

export default UserOrdersPage;
