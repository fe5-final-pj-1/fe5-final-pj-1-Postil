import styles from './ProductList.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
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
                        <p
                            className={
                                product.categories === 'sale'
                                    ? classNames(styles.price, styles.priceSale)
                                    : styles.price
                            }
                        >
                            {product.currentPrice}$
                        </p>
                        {product.categories === 'sale' && (
                            <p className={styles.prevPrice}>{product.previousPrice}$</p>
                        )}
                        <Link to={`/catalog/${product._id}`} target="_top">
                            buy now
                        </Link>
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
