import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import FooterStyle from './Footer.module.scss';
import addSubscriber from '../../api/addSubscriber';
import InfoModal from '../InfoModal';

function Footer() {
    const [isOpen, setIsOpen] = useState(false);
    let inputValue;

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    const getValue = (evt) => {
        evt.preventDefault();
        inputValue = evt.target.value;
        evt.target.value = '';
    };
    const postForm = (evt) => {
        evt.preventDefault();
        const newSubscriber = {
            email: inputValue,
            letterSubject: 'Greetings from Postil team',
            letterHtml:
                "<!DOCTYPE html><html lang='en'> <head> <meta charset='UTF-8' /> <meta name='viewport' content='width=device-width, initial-scale=1.0' /> <meta http-equiv='X-UA-Compatible' content='ie=edge' /> <title>Document</title> <style> p { margin-top:10px; } </style> </head> <body> <h2>Thank you for subscribe!</h2> <p>We will send you only actual info.</p> </body></html>",
        };
        addSubscriber(newSubscriber).then((res) => {
            try {
                if (res.data) {
                    openModal();
                }
            } catch (e) {
                alert("You didn't enter your email!");
                console.log(e);
            }
        });
    };
    return (
        <footer className={FooterStyle.wrapper}>
            <div className={FooterStyle.top}>
                <div className="container">
                    <nav className={FooterStyle.nav}>
                        <ul className={FooterStyle.menu_list}>
                            <li className={FooterStyle.menu_list_item}>
                                <NavLink className={FooterStyle.links} to="shop" target="_top">
                                    Shop
                                </NavLink>
                            </li>
                            <li className={FooterStyle.menu_list_item}>
                                <NavLink className={FooterStyle.links} to="catalog" target="_top">
                                    Catalog
                                </NavLink>
                            </li>
                            <li className={FooterStyle.menu_list_item}>
                                <NavLink className={FooterStyle.links} to="service" target="_top">
                                    Payment & Delivery
                                </NavLink>
                            </li>
                            <li className={FooterStyle.menu_list_item}>
                                <NavLink className={FooterStyle.links} to="service" target="_top">
                                    Returns
                                </NavLink>
                            </li>
                            <li className={FooterStyle.menu_list_item}>
                                <NavLink className={FooterStyle.links} to="service" target="_top">
                                    Privacy Policy
                                </NavLink>
                            </li>
                            <li className={FooterStyle.menu_list_item}>
                                <NavLink className={FooterStyle.links} to="service" target="_top">
                                    Terms of service
                                </NavLink>
                            </li>
                        </ul>
                        <ul className={FooterStyle.about_list}>
                            <li className={FooterStyle.about_list_item}>
                                <NavLink className={FooterStyle.links} to="about" target="_top">
                                    About
                                </NavLink>
                            </li>
                            <li className={FooterStyle.about_list_item}>
                                <NavLink className={FooterStyle.links} to="about" target="_top">
                                    About Us
                                </NavLink>
                            </li>
                            <li className={FooterStyle.about_list_item}>
                                <NavLink className={FooterStyle.links} to="shop" target="_top">
                                    Reviews
                                </NavLink>
                            </li>
                            <li className={FooterStyle.about_list_item}>
                                <NavLink className={FooterStyle.links} to="shop" target="_top">
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
                                target="_blank"
                                rel="noreferrer"
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
                                {
                                    "Let's get personal! We'll send you only the good stuff: Exclusive early access to Sale, new arrivals and promotions. No nasties."
                                }
                            </p>
                            <InfoModal text={''} isOpen={isOpen} closeModal={closeModal} />
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
                                        <Link target="_blank" to="https://www.facebook.com/">
                                            <Icon type="FacebookMin" />
                                        </Link>
                                    </li>
                                    <li className={FooterStyle.social_list_item}>
                                        <Link target="_blank" to="https://twitter.com/">
                                            <Icon type="TwitterMin" />
                                        </Link>
                                    </li>
                                    <li className={FooterStyle.social_list_item}>
                                        <Link target="_blank" to="https://www.instagram.com/">
                                            <Icon type="InstagramMin" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className={FooterStyle.bottom}>
                <div className="container">
                    <div className={FooterStyle.info}>
                        <p className={FooterStyle.text}>©2023 Developed by fe5-team</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
