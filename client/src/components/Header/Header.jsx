import React from 'react';
import HeaderMain from './Header.module.scss';
function Header() {
    return (
        <div className="container">
            <header>
                <div className="logo">
                    <img src="../public/Logo.png" alt="no logo" />
                </div>
                <nav className="header_nav">
                    <ul className={HeaderMain.header_list}>
                        <li className="header_list_item">
                            <a href="!#" className="header_list_item_link">
                                Catalog
                            </a>
                        </li>
                        <li className="header_list_item">
                            <a href="!#" className="header_list_item_link">
                                About
                            </a>
                        </li>
                        <li className="header_list_item">
                            <a href="!#" className="header_list_item_link">
                                Contact
                            </a>
                        </li>
                        <li className="header_list_item">
                            <a href="!#" className="header_list_item_link">
                                Blog
                            </a>
                        </li>
                    </ul>
                    <div className="header_search">
                        <input type="text" className="search_input" />
                        <button>
                            <svg
                                width="22"
                                height="19"
                                viewBox="0 0 22 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    y1="-0.75"
                                    x2="8.70935"
                                    y2="-0.75"
                                    transform="matrix(0.803744 0.594976 -0.605019 0.796211 14 13.8179)"
                                    stroke="#373F41"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M16.7502 8.2046C16.7502 12.2769 13.2147 15.6592 8.75011 15.6592C4.28556 15.6592 0.75 12.2769 0.75 8.2046C0.75 4.13228 4.28556 0.75 8.75011 0.75C13.2147 0.75 16.7502 4.13228 16.7502 8.2046Z"
                                    stroke="#373F41"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="header_buttons">
                        <a href="!#" className="header_buttons_profile">
                            <svg
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20 20.0002V17.7202C20 16.5108 19.4996 15.3509 18.6088 14.4958C17.718 13.6406 16.5098 13.1602 15.25 13.1602H5.75C4.49022 13.1602 3.28204 13.6406 2.39124 14.4958C1.50044 15.3509 1 16.5108 1 17.7202V20.0002"
                                    stroke="#373F41"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.5005 10.88C13.2288 10.88 15.4405 8.66829 15.4405 5.94C15.4405 3.21171 13.2288 1 10.5005 1C7.77226 1 5.56055 3.21171 5.56055 5.94C5.56055 8.66829 7.77226 10.88 10.5005 10.88Z"
                                    stroke="#373F41"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                        <a href="!#" className="header_buttons_favorite">
                            <svg
                                width="21"
                                height="19"
                                viewBox="0 0 21 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.5 18L10.1647 17.7138C2.95588 11.7037 1 9.58586 1 6.15151C1 3.28956 3.23529 1 6.02941 1C8.32059 1 9.60588 2.3165 10.5 3.3468C11.3941 2.3165 12.6794 1 14.9706 1C17.7647 1 20 3.28956 20 6.15151C20 9.58586 18.0441 11.7037 10.8353 17.7138L10.5 18Z"
                                    stroke="#373F41"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                        <a href="!#" className="header_buttons_cart">
                            <svg
                                width="18"
                                height="21"
                                viewBox="0 0 18 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.63636 5.38462C4.63636 5.38462 4.63636 1 9 1C13.3636 1 13.3636 5.38462 13.3636 5.38462M1 5.38462V20H17V5.38462H1Z"
                                    stroke="#373F41"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
