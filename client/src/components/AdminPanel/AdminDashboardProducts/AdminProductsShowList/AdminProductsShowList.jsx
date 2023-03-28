import styles from './AdminProductsShowList.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon';
import Button from 'components/Button';
import deleteProductFromDB from 'api/deleteProductFromDB';
import PropTypes from 'prop-types';

function AdminProductsShowList({ products, setReload }) {
    if (products.length === 0) {
        return (
            <div className={styles.noProductMatch}>
                <p>Please, add some products to store</p>
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
                        <Button
                            handleClick={() => {
                                deleteProductFromDB(product._id).then(() => {
                                    setReload((prev) => !prev);
                                });
                            }}
                            text={<Icon type="delete" />}
                            className={styles.removeBtn}
                        />
                        <p className={styles.title}>{product.name}</p>
                        <p className={styles.price}>{product.currentPrice}$</p>
                        <Link to={`/admin/dashboard/products/edit/${product._id}`} target="_top">
                            edit
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    );
}
export default AdminProductsShowList;

AdminProductsShowList.propTypes = {
    products: PropTypes.array.isRequired,
    setReload: PropTypes.func.isRequired,
};
