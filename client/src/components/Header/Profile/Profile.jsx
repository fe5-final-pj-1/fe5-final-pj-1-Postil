import React, { useState, useEffect } from 'react';
import profileStyles from './Profile.module.scss';
import Button from '../../Button';
import getCustomer from '../../../api/getCustomer';
import classNames from 'classnames';
import Icon from '../../Icon/Icon';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { userLogOut } from '../../../store/loginSlice';

function Profile() {
    const [user, setUser] = useState({});
    const isLogIn = useSelector((state) => state.store.login.isLogIn, shallowEqual);
    const dispatch = useDispatch();
    useEffect(() => {
        if (isLogIn) {
            getCustomer().then((res) => setUser(res.data));
        }
    }, [isLogIn]);
    return (
        <div className={profileStyles.userMenu}>
            {user.avatarUrl ? (
                <button
                    className={classNames(profileStyles.userBtn, profileStyles.avatar)}
                    style={{ backgroundImage: `url(${user.avatarUrl})` }}
                >
                    &nbsp;
                </button>
            ) : (
                <Button
                    className={profileStyles.userBtn}
                    text={user.firstName && user.firstName[0]}
                />
            )}
            <div className={profileStyles.dropUserMenu}>
                <div className={profileStyles.dropUserMenuContent}>
                    <ul className={profileStyles.userMenu_list}>
                        <li className={profileStyles.userMenu_list_item}>
                            <Icon type="userPhoto" />
                            <Link className={profileStyles.userMenulinkText} to="user/profile">
                                Profile
                            </Link>
                        </li>
                        <li className={profileStyles.userMenu_list_item}>
                            <Icon type="accountManagement" />
                            <Link className={profileStyles.userMenulinkText} to="user/orders">
                                Orders
                            </Link>
                        </li>
                        {user.isAdmin && (
                            <li className={profileStyles.userMenu_list_item}>
                                <Icon type="key" />
                                <Link className={profileStyles.userMenulinkText} to="admin">
                                    Admin panel
                                </Link>
                            </li>
                        )}
                        <li className={profileStyles.userMenu_list_item}>
                            <Icon type="logOut" className={profileStyles.userMenuIcon} />
                            <Button
                                className={profileStyles.userMenuLogOut}
                                text="Log out"
                                handleClick={() => {
                                    dispatch(userLogOut());
                                    setUser({});
                                }}
                            ></Button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;
