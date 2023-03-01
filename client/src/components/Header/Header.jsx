import React, { useState } from 'react';
import HeaderMain from './Header.module.scss';
import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import Button from '../Button';
import Search from './Search/Search';

function Header() {
    const [catalog, setCatalog] = useState(false);
    return (
        <header className={HeaderMain.wrapper} onClick={() => setCatalog(() => false)}>
            <div className="container">
                <div className={HeaderMain.header}>
                    <nav className={HeaderMain.header_nav}>
                        <div className={HeaderMain.logo}>
                            <NavLink to="shop">
                                <Icon type="logo" />
                            </NavLink>
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
                                            <NavLink to="products">Bedroom</NavLink>
                                        </li>
                                        <li className={HeaderMain.catalog_menu_list_item}>
                                            <NavLink to="products">Bed linen</NavLink>
                                        </li>
                                        <li className={HeaderMain.catalog_menu_list_item}>
                                            <NavLink to="products">Kitchen</NavLink>
                                        </li>
                                        <li className={HeaderMain.catalog_menu_list_item}>
                                            <NavLink to="products">Bathroom</NavLink>
                                        </li>
                                        <li className={HeaderMain.catalog_menu_list_item}>
                                            <NavLink to="products">Loungewear</NavLink>
                                        </li>
                                        <li className={HeaderMain.catalog_menu_list_item}>
                                            <NavLink to="products">Sale</NavLink>
                                        </li>
                                        <li className={HeaderMain.catalog_menu_list_item}>
                                            <NavLink to="products">Shop All</NavLink>
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
                        <Button
                            text={<Icon type="profile" />}
                            className={HeaderMain.header_buttons_profile}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
