import React from 'react';
import HeaderMain from './Header.module.scss';
const toggleMenu = () => {
    const catalogMenu = document.querySelector('#catalog');
    const catalog = document.querySelector('#catalogItem');
    if (catalogMenu.style.display === 'none') {
        catalogMenu.style.display = 'block';
        catalog.style.borderBottom = '1px black solid';
    } else {
        catalog.style.borderBottom = 'none';
        catalogMenu.style.display = 'none';
    }
    // console.log(catalogMenu, openBtn);
};
function Header() {
    return (
        <div className={HeaderMain.container}>
            <header className={HeaderMain.header}>
                <div className={HeaderMain.logo}>
                    <img src="./logo.png" alt="something wrong :(" />
                </div>
                <nav className={HeaderMain.header_nav}>
                    <ul className={HeaderMain.header_list}>
                        <li id="catalogItem" className={HeaderMain.header_list_item}>
                            <a href="/catalog" className="header_list_item_link">
                                Catalog
                            </a>
                            <svg
                                id="openBtn"
                                className={HeaderMain.openBtn}
                                onClick={toggleMenu}
                                width="13"
                                height="8"
                                viewBox="0 0 13 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L6.5 7.5L12 1"
                                    stroke="#373F41"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </li>
                        <li className={HeaderMain.header_list_item}>
                            <a href="/about" className="header_list_item_link">
                                About
                            </a>
                        </li>
                        <li className={HeaderMain.header_list_item}>
                            <a href="/contact" className="header_list_item_link">
                                Contact
                            </a>
                        </li>
                        <li className={HeaderMain.header_list_item}>
                            <a href="blog" className="header_list_item_link">
                                Blog
                            </a>
                        </li>
                    </ul>
                    <div className={HeaderMain.group}>
                        <input type="text" placeholder="Search" className={HeaderMain.input} />

                        <svg className={HeaderMain.icon} aria-hidden="true" viewBox="0 0 24 24">
                            <g>
                                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className={HeaderMain.header_buttons}>
                        <a href="!#" className={HeaderMain.header_buttons_profile}>
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
                        <a href="!#" className={HeaderMain.header_buttons_favorite}>
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
                        <a href="!#" className={HeaderMain.header_buttons_cart}>
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
            <div id="catalog" className={HeaderMain.catalog_menu}>
                <ul className={HeaderMain.catalog_menu_list}>
                    <li className={HeaderMain.catalog_menu_list_item}>Bedroom</li>
                    <li className={HeaderMain.catalog_menu_list_item}>Bed linen</li>
                    <li className={HeaderMain.catalog_menu_list_item}>Kitchen</li>
                    <li className={HeaderMain.catalog_menu_list_item}>Bathroom</li>
                    <li className={HeaderMain.catalog_menu_list_item}>Loungewear</li>
                    <li className={HeaderMain.catalog_menu_list_item}>Sale</li>
                    <li className={HeaderMain.catalog_menu_list_item}>Shop All</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
