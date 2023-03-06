import React, { useState } from 'react';
import HeaderMain from './Header.module.scss';
import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import Button from '../Button';
import Search from './Search/Search';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { filtersAdded } from '../../store/filtersSlice';
import { filtersRemoved } from '../../store/filtersSlice';
import { showModal } from '../../store/modalSlice';
import Profile from './Profile/Profile';

function Header() {
    const [catalog, setCatalog] = useState(false);
    const isLogIn = useSelector((state) => state.store.login.isLogIn, shallowEqual);
    const filters = useSelector((state) => state.filters.filtersQuery, shallowEqual);
    const dispatch = useDispatch();
    return (
        <header className={HeaderMain.wrapper} onClick={() => setCatalog(() => false)}>
            <div className="container">
                <div className={HeaderMain.header}>
                    <nav className={HeaderMain.header_nav}>
                        <div className={HeaderMain.logo}>
                            <Link to="shop">
                                <Icon type="logo" />
                            </Link>
                        </div>
                        <ul
                            className={HeaderMain.header_list}
                            onClick={(event) => event.stopPropagation()}
                            role="presentation"
                        >
                            <li
                                id="catalogItem"
                                className={HeaderMain.header_list_item}
                                onClick={() => setCatalog((catalog) => !catalog)}
                                role="presentation"
                            >
                                <Button
                                    text={'Catalog'}
                                    className={HeaderMain.header_list_item_btn}
                                />
                                <Button
                                    className={
                                        catalog
                                            ? classNames(HeaderMain.openBtn, HeaderMain.active)
                                            : HeaderMain.openBtn
                                    }
                                    text={<Icon type="arrowDown" />}
                                ></Button>
                                <div id="catalog" className={HeaderMain.dropCatalog}>
                                    <ul className={HeaderMain.catalog_menu_list}>
                                        <li className={HeaderMain.catalog_menu_list_item}>
                                            <Link
                                                to="catalog/filter?categories=bedroom"
                                                onClick={() => {
                                                    dispatch(
                                                        filtersAdded({ categories: ['bedroom'] }),
                                                    );
                                                }}
                                            >
                                                Bedroom
                                            </Link>
                                        </li>
                                        <li className={HeaderMain.catalog_menu_list_item}>
                                            <Link
                                                to="catalog/filter?categories=bed linen"
                                                onClick={() => {
                                                    dispatch(
                                                        filtersAdded({ categories: ['bed linen'] }),
                                                    );
                                                }}
                                            >
                                                Bed linen
                                            </Link>
                                        </li>
                                        <li className={HeaderMain.catalog_menu_list_item}>
                                            <Link
                                                to="catalog/filter?categories=kitchen"
                                                onClick={() => {
                                                    dispatch(
                                                        filtersAdded({ categories: ['kitchen'] }),
                                                    );
                                                }}
                                            >
                                                Kitchen
                                            </Link>
                                        </li>
                                        <li className={HeaderMain.catalog_menu_list_item}>
                                            <Link
                                                to="catalog/filter?categories=bathroom"
                                                onClick={() => {
                                                    dispatch(
                                                        filtersAdded({ categories: ['bathroom'] }),
                                                    );
                                                }}
                                            >
                                                Bathroom
                                            </Link>
                                        </li>
                                        <li className={HeaderMain.catalog_menu_list_item}>
                                            <Link
                                                to="catalog/filter?categories=loungewear"
                                                onClick={() => {
                                                    dispatch(
                                                        filtersAdded({
                                                            categories: ['loungewear'],
                                                        }),
                                                    );
                                                }}
                                            >
                                                Loungewear
                                            </Link>
                                        </li>
                                        <li className={HeaderMain.catalog_menu_list_item}>
                                            <Link
                                                to="catalog/filter?categories=sale"
                                                onClick={() => {
                                                    dispatch(
                                                        filtersAdded({ categories: ['sale'] }),
                                                    );
                                                }}
                                            >
                                                Sale
                                            </Link>
                                        </li>
                                        <li className={HeaderMain.catalog_menu_list_item}>
                                            <Link
                                                to="catalog"
                                                onClick={() => {
                                                    const filtersObj = { ...filters };
                                                    delete filtersObj.categories;
                                                    dispatch(filtersRemoved({ ...filtersObj }));
                                                }}
                                            >
                                                Shop All
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className={HeaderMain.header_list_item}>
                                <NavLink
                                    to="products/:productId"
                                    className={HeaderMain.header_list_item_link}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className={HeaderMain.header_list_item}>
                                <NavLink to="contact" className={HeaderMain.header_list_item_link}>
                                    Contact
                                </NavLink>
                            </li>
                            <li className={HeaderMain.header_list_item}>
                                <NavLink to="blog" className={HeaderMain.header_list_item_link}>
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                        <Search className={HeaderMain.group} />
                    </nav>
                    <div className={HeaderMain.header_buttons}>
                        <Link to="favorite" className={HeaderMain.header_buttons_favorite}>
                            <Icon type="favorites" />
                        </Link>
                        <Link to="cart" className={HeaderMain.header_buttons_cart}>
                            <Icon type="cart" />
                        </Link>
                        {isLogIn ? (
                            <Profile />
                        ) : (
                            <Button
                                text={<Icon type="profile" />}
                                className={HeaderMain.header_buttons_profile}
                                handleClick={() => dispatch(showModal())}
                            />
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
