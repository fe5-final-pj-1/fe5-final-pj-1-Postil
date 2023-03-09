import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import FooterStyle from './Footer.module.scss';
import addSubscriber from '../../api/addSubscriber';

function Footer() {
    let inputValue;
    const getValue = (evt) => {
        evt.preventDefault();
        inputValue = evt.target.value;
        evt.target.value = '';
    };
    const postForm = (evt) => {
        evt.preventDefault();
        const newSubscriber = {
            email: inputValue,
            letterSubject: 'Test letter (final project)',
            letterHtml:
                "<!DOCTYPE html><html lang='en'> <head> <meta charset='UTF-8' /> <meta name='viewport' content='width=device-width, initial-scale=1.0' /> <meta http-equiv='X-UA-Compatible' content='ie=edge' /> <title>Document</title> <style> td { padding: 20px 50px; background-color: yellow; color: blueviolet; font-size: 20px; } </style> </head> <body> <table> <tr> <td>Test1</td> <td>Test2</td> <td>Test3</td> </tr> <tr> <td>Test1.1</td> <td>Test2.1</td> <td>Test3.1</td> </tr> </table> </body></html>",
        };
        addSubscriber(newSubscriber).then((res) => console.log(res.data));
    };
    return (
        <footer className={FooterStyle.wrapper}>
            <div className="container">
                <nav className={FooterStyle.nav}>
                    <ul className={FooterStyle.menu_list}>
                        <li className={FooterStyle.menu_list_item}>
                            <NavLink className={FooterStyle.links} to="shop">
                                Shop
                            </NavLink>
                        </li>
                        <li className={FooterStyle.menu_list_item}>
                            <NavLink className={FooterStyle.links} to="products">
                                Catalog
                            </NavLink>
                        </li>
                        <li className={FooterStyle.menu_list_item}>
                            <NavLink className={FooterStyle.links} to="shop">
                                Payment & Delivery
                            </NavLink>
                        </li>
                        <li className={FooterStyle.menu_list_item}>
                            <NavLink className={FooterStyle.links} to="shop">
                                Returns
                            </NavLink>
                        </li>
                        <li className={FooterStyle.menu_list_item}>
                            <NavLink className={FooterStyle.links} to="shop">
                                Privacy Policy
                            </NavLink>
                        </li>
                        <li className={FooterStyle.menu_list_item}>
                            <NavLink className={FooterStyle.links} to="shop">
                                Terms of service
                            </NavLink>
                        </li>
                    </ul>
                    <ul className={FooterStyle.about_list}>
                        <li className={FooterStyle.about_list_item}>
                            <NavLink className={FooterStyle.links} to="products/:productId">
                                About
                            </NavLink>
                        </li>
                        <li className={FooterStyle.about_list_item}>
                            <NavLink className={FooterStyle.links} to="shop">
                                About Us
                            </NavLink>
                        </li>
                        <li className={FooterStyle.about_list_item}>
                            <NavLink className={FooterStyle.links} to="shop">
                                Reviews
                            </NavLink>
                        </li>
                        <li className={FooterStyle.about_list_item}>
                            <NavLink className={FooterStyle.links} to="shop">
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                    <div className={FooterStyle.contact}>
                        <h2 className={FooterStyle.contact_title}>Contact Us</h2>
                        <a href="mailto:hello@gmail.com" className={FooterStyle.contact_email}>
                            hello@gmail.com
                        </a>
                        <a
                            href="https://goo.gl/maps/922TfmCaQUyD39R77"
                            className={FooterStyle.contact_address}
                        >
                            Studio M, 4th Floor8 Lower <br /> Manchester street, M1 5QF
                        </a>
                        <a href="tel:+380938759922" className={FooterStyle.contact_tel}>
                            +38 093 875 9922
                        </a>
                    </div>
                    <div className={FooterStyle.promotion}>
                        <p className={FooterStyle.title}>Subscribe</p>
                        <p className={FooterStyle.promotion_text}>
                            Subscribe now and get 15% off on your first <br /> order
                        </p>
                        <form
                            className={FooterStyle.subscription_input}
                            onSubmit={postForm}
                            role="presentation"
                        >
                            <input
                                onBlur={getValue}
                                type="email"
                                className={FooterStyle.input}
                                id="Email"
                                name="Email"
                                placeholder="e-mail"
                                autoComplete="off"
                            />
                            <input
                                className={FooterStyle.button_submit}
                                value="Send"
                                type="submit"
                            />
                        </form>
                        <div className={FooterStyle.promotion_btn}>
                            <p className={FooterStyle.followUs}>Follow Us</p>
                            <ul className={FooterStyle.social_list}>
                                <li className={FooterStyle.social_list_item}>
                                    <NavLink target="_blank" to="shop">
                                        <Icon type="FacebookMin" />
                                    </NavLink>
                                </li>
                                <li className={FooterStyle.social_list_item}>
                                    <NavLink target="_blank" to="shop">
                                        <Icon type="TwitterMin" />
                                    </NavLink>
                                </li>
                                <li className={FooterStyle.social_list_item}>
                                    <NavLink target="_blank" to="shop">
                                        <Icon type="InstagramMin" />
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className={FooterStyle.info}>
                    <p className={FooterStyle.text}>©2023 Developed by fe5-team</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
