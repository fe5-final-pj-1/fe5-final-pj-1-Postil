import React, { useState } from 'react';
import styles from './UserProfilePage.module.scss';
import Button from '../Button';
import Icon from '../Icon/Icon';

function UserProfilePage() {
    const [active, setActive] = useState({
        personalData: false,
        deliveryAddress: false,
        contacts: false,
    });
    return (
        <main>
            <div className="container">
                <p className={styles.title}>My profile</p>
                <div className={styles.userPhoto}>
                    <span className={styles.userPhotoText}>PHOTO</span>
                </div>
                <p className={styles.userPrevEmail}>petrotest45451@gmail.com</p>
                <div className={styles.boxInfo}>
                    <Button
                        handleClick={() =>
                            setActive({
                                ...active,
                                personalData: !active.personalData,
                            })
                        }
                        className={styles.boxInfoName}
                        text={
                            <>
                                <p className={styles.boxInfoTitle}>
                                    <Icon type={'profilePersonalData'} />
                                    Personal data
                                </p>
                                <Icon type={active.personalData ? 'minus' : 'bagDropDownArrow'} />
                            </>
                        }
                    />
                    {active.personalData && (
                        <>
                            <ul className={styles.personalDataList}>
                                <li className={styles.personalDataItem}>
                                    <span className={styles.personalDataPlaseholder}>
                                        last name
                                    </span>
                                    Ivanov
                                </li>
                                <li className={styles.personalDataItem}>
                                    <span className={styles.personalDataPlaseholder}>name</span>
                                    Petro
                                </li>
                                <li className={styles.personalDataItem}>
                                    <span className={styles.personalDataPlaseholder}>surname</span>
                                    Ivanovich
                                </li>
                                <li className={styles.personalDataItem}>
                                    <span className={styles.personalDataPlaseholder}>
                                        date of birth
                                    </span>
                                    1 junuary 2000
                                </li>
                                <li className={styles.personalDataItem}>
                                    <span className={styles.personalDataPlaseholder}>sex</span>
                                    Male
                                </li>
                                <li className={styles.personalDataItem}>
                                    <span className={styles.personalDataPlaseholder}>language</span>
                                    English
                                </li>
                            </ul>
                            <Button className={styles.editBtn} text={'EDIT'} />
                        </>
                    )}
                </div>
                <div className={styles.boxInfo}>
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
                </div>
            </div>
        </main>
    );
}

export default UserProfilePage;
