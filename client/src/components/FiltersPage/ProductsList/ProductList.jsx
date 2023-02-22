import styles from './ProductList.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
    const items = [
        {
            img: 'https://res.cloudinary.com/dm2s5stjy/image/upload/v1676972765/POPULAR/background_lin_mgqrhh.png',
            name: 'Boho Pink Cotton Bed Lilen',
            price: 150,
        },
        {
            img: 'https://res.cloudinary.com/dm2s5stjy/image/upload/v1676972765/POPULAR/background_lin_mgqrhh.png',
            name: 'Boho Pink Cotton Bed Lilen',
            price: 150,
        },
        {
            img: 'https://res.cloudinary.com/dm2s5stjy/image/upload/v1676972765/POPULAR/background_lin_mgqrhh.png',
            name: 'Boho Pink Cotton Bed Lilen',
            price: 150,
        },
        {
            img: 'https://res.cloudinary.com/dm2s5stjy/image/upload/v1676972765/POPULAR/background_lin_mgqrhh.png',
            name: 'Boho Pink Cotton Bed Lilen',
            price: 150,
        },
        {
            img: 'https://res.cloudinary.com/dm2s5stjy/image/upload/v1676972765/POPULAR/background_lin_mgqrhh.png',
            name: 'Boho Pink Cotton Bed Lilen',
            price: 150,
        },
        {
            img: 'https://res.cloudinary.com/dm2s5stjy/image/upload/v1676972765/POPULAR/background_lin_mgqrhh.png',
            name: 'Boho Pink Cotton Bed Lilen',
            price: 150,
        },
    ];
    return (
        <ul className={styles.productsContainer}>
            {items.map((item, key) => (
                <li
                    key={key}
                    style={{ backgroundImage: `url(${item.img})` }}
                    className={styles.product}
                >
                    <div className={styles.productName}>
                        <p className={styles.title}>{item.name}</p>
                        <p className={styles.price}>{item.price}$</p>
                        <Link to="">buy now</Link>
                    </div>
                </li>
            ))}
        </ul>
    );
}
export default ProductList;
