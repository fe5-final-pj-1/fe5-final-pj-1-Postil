import React from 'react';
// import { NavLink } from 'react-router-dom';
// import Button from '../Button';
import Icon from '../Icon/Icon';
import FooterStyle from './Footer.module.scss';
// import classNames from 'classnames';
// import Icon from '../Icon/Icon';
function Footer() {
    return (
        <footer className={FooterStyle.wrapper}>
            <div className="container">
                <nav className={FooterStyle.nav}>
                    <ul className={FooterStyle.menu_list}>
                        <li className={FooterStyle.menu_list_item}>Shop</li>
                        <li className={FooterStyle.menu_list_item}>Catalog</li>
                        <li className={FooterStyle.menu_list_item}>Payment & Delivery</li>
                        <li className={FooterStyle.menu_list_item}>Returns</li>
                        <li className={FooterStyle.menu_list_item}>Privaci Policy</li>
                        <li className={FooterStyle.menu_list_item}>Terms of service</li>
                    </ul>
                    <ul className={FooterStyle.about_list}>
                        <li className={FooterStyle.about_list_item}>About</li>
                        <li className={FooterStyle.about_list_item}>About Us</li>
                        <li className={FooterStyle.about_list_item}>Reviews</li>
                        <li className={FooterStyle.about_list_item}>Blog</li>
                    </ul>
                    <ul className={FooterStyle.contact_list}>
                        <li className={FooterStyle.contact_list_item}>Contact Us</li>
                        <li className={FooterStyle.contact_list_item}>hello@gmail.com</li>
                        <li className={FooterStyle.contact_list_item}>
                            Studio M, 4th Floor8 Lower Manchester street, M1 5QF
                        </li>
                        <li className={FooterStyle.contact_list_item}>+38 093 875 9922</li>
                    </ul>
                    <div className={FooterStyle.promotion}>
                        <h2 className={FooterStyle.title}>Subscribe</h2>
                        <p className={FooterStyle.promotion_text}>
                            Subscribe now and get 15% off on your first order
                        </p>
                        <div className={FooterStyle.subscription_input}>
                            <input className={FooterStyle.input} type="text" />
                        </div>
                        <div className={FooterStyle.promotion_btn}>
                            <p className={FooterStyle.followUs}>Follow Us</p>
                            <ul className={FooterStyle.social_list}>
                                <li className={FooterStyle.social_list_item}>
                                    <Icon type="FacebookMin" />
                                </li>
                                <li className={FooterStyle.social_list_item}>
                                    <Icon type="TwitterMin" />
                                </li>
                                <li className={FooterStyle.social_list_item}>
                                    <Icon type="InstagramMin" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className={FooterStyle.info}>
                    <div className={FooterStyle.logo}>
                        <Icon type="footerLogo" />
                    </div>
                    <p className={FooterStyle.text}>© 2010 — 2020 Simple Studio </p>
                    <Icon type="chat" className={FooterStyle.chat} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
