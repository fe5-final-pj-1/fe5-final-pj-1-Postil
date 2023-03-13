import styles from './ProductList.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Icon from 'components/Icon';
import Button from 'components/Button';
import deleteProductFromDB from 'api/deleteProductFromDB';
import { filtersResetAll } from 'store/filtersSlice';
import PropTypes from 'prop-types';

function ProductList({ products, isAdmin }) {
    const dispatch = useDispatch();
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
                        {isAdmin && (
                            <Button
                                handleClick={() => {
                                    deleteProductFromDB(product._id);
                                    dispatch(filtersResetAll());
                                }}
                                text={<Icon type="delete" />}
                                className={styles.removeBtn}
                            />
                        )}
                        <p className={styles.title}>{product.name}</p>
                        <p className={styles.price}>{product.currentPrice}$</p>
                        {isAdmin ? (
                            <Link
                                to={`/admin/dashboard/products/edit/${product._id}`}
                                target="_top"
                            >
                                edit
                            </Link>
                        ) : (
                            <Link to={`/catalog/${product._id}`} target="_top">
                                buy now
                            </Link>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}
export default ProductList;

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    isAdmin: PropTypes.bool,
};

ProductList.defaultProps = {
    isAdmin: false,
};
