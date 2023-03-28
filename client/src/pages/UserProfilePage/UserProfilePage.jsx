import React, { useState, useEffect } from 'react';
import styles from './UserProfilePage.module.scss';
import Button from '../../components/Button';
import Icon from '../../components/Icon/Icon';
import FormPersonalData from './FormPersonalData';
import FormDeliveryAdress from './FormDeliveryAdress';
import FormPhoto from './FormPhoto';
import getCustomer from 'api/getCustomer';

function UserProfilePage() {
    const [active, setActive] = useState({
        personalData: false,
        deliveryAddress: false,
    });
    const [editUserData, setEditUserData] = useState({
        photo: false,
        personalData: false,
        deliveryAddress: false,
    });
    const [user, setUser] = useState(null);

    useEffect(() => {
        getCustomer().then((res) => setUser(res.data));
    }, []);
    return (
        <main>
            <div className="container">
                <p className={styles.title}>My profile</p>
                <div
                    className={styles.userPhoto}
                    style={{
                        backgroundImage: user && user.avatarUrl ? `url(${user.avatarUrl})` : null,
                    }}
                >
                    <span className={styles.userPhotoText}>
                        {user && !user.avatarUrl ? user.firstName.charAt(0) : null}
                    </span>
                    <Button
                        className={styles.editPhotoBtn}
                        text={<Icon type="photo" />}
                        handleClick={() =>
                            setEditUserData({ ...editUserData, photo: !editUserData.photo })
                        }
                    />
                </div>
                {editUserData.photo && (
                    <FormPhoto editUser={{ editUserData, setEditUserData }} setUser={setUser} />
                )}
                <p className={styles.userPrevEmail}>{user && user.email ? user.email : '-'}</p>
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
                    {active.personalData && editUserData.personalData && (
                        <FormPersonalData
                            editUser={{ editUserData, setEditUserData }}
                            user={user}
                            setUser={setUser}
                        />
                    )}
                    {active.personalData && !editUserData.personalData && (
                        <>
                            <ul className={styles.personalDataList}>
                                <li className={styles.personalDataItem}>
                                    <span className={styles.personalDataPlaseholder}>
                                        First Name
                                    </span>
                                    {user && user.firstName ? user.firstName : '-'}
                                </li>
                                <li className={styles.personalDataItem}>
                                    <span className={styles.personalDataPlaseholder}>
                                        Last Name
                                    </span>
                                    {user && user.lastName ? user.lastName : '-'}
                                </li>
                                <li className={styles.personalDataItem}>
                                    <span className={styles.personalDataPlaseholder}>Email</span>
                                    {user && user.email ? user.email : '-'}
                                </li>
                                <li className={styles.personalDataItem}>
                                    <span className={styles.personalDataPlaseholder}>Phone</span>
                                    {user && user.mobile ? user.mobile : '-'}
                                </li>
                                <li className={styles.personalDataItem}>
                                    <span className={styles.personalDataPlaseholder}>Gender</span>
                                    {user && user.gender ? user.gender : '-'}
                                </li>

                                <li className={styles.personalDataItem}>
                                    <span className={styles.personalDataPlaseholder}>Birthday</span>
                                    {user && user.birthday ? user.birthday : '-'}
                                </li>
                            </ul>
                            <Button
                                className={styles.editBtn}
                                text="EDIT"
                                handleClick={() =>
                                    setEditUserData({ ...editUserData, personalData: true })
                                }
                            />
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
                    {active.deliveryAddress && editUserData.deliveryAddress && (
                        <FormDeliveryAdress
                            editUser={{ editUserData, setEditUserData }}
                            user={user}
                            setUser={setUser}
                        />
                    )}
                    {active.deliveryAddress && !editUserData.deliveryAddress && (
                        <>
                            <p className={styles.personalDataItem}>
                                <span className={styles.personalDataPlaseholder}>
                                    Shipping address:
                                </span>
                                {user && user.deliveryAddress
                                    ? `${user.deliveryAddress.address}, ${user.deliveryAddress.city}, ${user.deliveryAddress.country}`
                                    : '-'}
                                {/* {1 Khreshchatyk, Kyiv, Ukraine} */}
                            </p>
                            <Button
                                handleClick={() =>
                                    setEditUserData({ ...editUserData, deliveryAddress: true })
                                }
                                className={styles.editBtn}
                                text={'EDIT'}
                            />
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}

export default UserProfilePage;
