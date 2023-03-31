import React, { useState, useEffect } from 'react';
import adminPanelStyles from './AdminProductsShowTable.module.scss';
import { Link } from 'react-router-dom';
import getAllProducts from 'api/getAllProducts';
import deleteProductFromDB from 'api/deleteProductFromDB';
import classNames from 'classnames';
import Button from 'components/Button';
import Icon from 'components/Icon';
import { Oval } from 'react-loader-spinner';
import PropTypes from 'prop-types';

function AdminProductsShowTable({ setReload }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res.data);
            setIsLoaded(true);
        });
    }, []);
    if (!isLoaded) {
        return (
            <Oval
                height={130}
                width={130}
                color="#373F41"
                wrapperStyle={{}}
                wrapperClass={adminPanelStyles.loader}
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        );
    }
    return (
        <table className={adminPanelStyles.AdminProductsTable}>
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th className={adminPanelStyles.AdminProductsSmallNone}>Product Name</th>
                    <th className={adminPanelStyles.AdminProductsMediumNone}>Category</th>
                    <th className={adminPanelStyles.AdminProductsMediumNone}>Quantity</th>
                    <th className={adminPanelStyles.AdminProductsMediumNone}>Price</th>
                    <th className={adminPanelStyles.AdminProductsMediumNone}>Fabric</th>
                    <th className={adminPanelStyles.AdminProductsLargeNone}>Color</th>
                    <th className={adminPanelStyles.AdminProductsLargeNone}>Size</th>
                    <th className={adminPanelStyles.AdminProductsLargeNone}>New In</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {[...products].reverse().map((product) => {
                    return (
                        <tr key={product._id}>
                            <td>{product.itemNo}</td>
                            <td>
                                <img
                                    className={classNames(
                                        adminPanelStyles.AdminProductsImg,
                                        adminPanelStyles.AdminProductsMediumNone,
                                    )}
                                    src={product.imageUrls[0]}
                                    alt={`Product ${product._id}`}
                                />
                                <span>{product.name}</span>
                            </td>
                            <td className={adminPanelStyles.AdminProductsMediumNone}>
                                {product.categories}
                            </td>
                            <td
                                className={
                                    product.quantity < 10
                                        ? classNames(
                                              adminPanelStyles.AdminProductsMediumNone,
                                              adminPanelStyles.AdminProductsTableFew,
                                          )
                                        : adminPanelStyles.AdminProductsMediumNone
                                }
                            >
                                {product.quantity}
                            </td>
                            <td className={adminPanelStyles.AdminProductsMediumNone}>
                                {product.currentPrice}$
                            </td>
                            <td className={adminPanelStyles.AdminProductsMediumNone}>
                                {product.fabric}
                            </td>
                            <td className={adminPanelStyles.AdminProductsLargeNone}>
                                {product.color ? (
                                    <span style={{ backgroundColor: product.color }}></span>
                                ) : (
                                    '-'
                                )}
                            </td>
                            <td className={adminPanelStyles.AdminProductsLargeNone}>
                                {product.size ? product.size : '-'}
                            </td>
                            <td className={adminPanelStyles.AdminProductsLargeNone}>
                                {product.isNew === 'true' ? 'New' : '-'}
                            </td>
                            <td>
                                <Link
                                    to={`/admin/dashboard/products/edit/${product._id}`}
                                    target="_top"
                                >
                                    edit
                                </Link>
                            </td>
                            <td>
                                <Button
                                    handleClick={() => {
                                        setIsLoaded(false);
                                        deleteProductFromDB(product._id).then(() => {
                                            getAllProducts().then((res) => {
                                                setProducts(res.data);
                                                setReload((prev) => !prev);
                                                setIsLoaded(true);
                                            });
                                        });
                                    }}
                                    text={<Icon type="delete" />}
                                    className={adminPanelStyles.AdminProductsRemoveBtn}
                                />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default AdminProductsShowTable;

AdminProductsShowTable.propTypes = {
    setReload: PropTypes.func.isRequired,
};
