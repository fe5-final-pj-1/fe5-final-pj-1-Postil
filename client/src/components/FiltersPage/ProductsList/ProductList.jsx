import styles from './ProductList.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductList({ products }) {
    if (products.length === 0) {
        return (
            <div className={styles.noProductMatch}>
                <p>No matching model found for given parameters</p>
            </div>
        );
    }
    return (
        <ul className={styles.productsContainer}>
            {products.map((product) => (
                <li
                    key={product.itemNo}
                    style={{ backgroundImage: `url(${product.imageUrls[0]})` }}
                    className={styles.product}
                >
                    <div className={styles.productName}>
                        <p className={styles.title}>{product.name}</p>
                        <p className={styles.price}>{product.currentPrice}$</p>
                        <Link to={`/catalog/${product.itemNo}`}>buy now</Link>
                    </div>
                </li>
            ))}
        </ul>
    );
}
export default ProductList;

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
};
