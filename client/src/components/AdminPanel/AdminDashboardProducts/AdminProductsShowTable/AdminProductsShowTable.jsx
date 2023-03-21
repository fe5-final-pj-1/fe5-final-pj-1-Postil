import React, { useState, useEffect } from 'react';
import adminPanelStyles from './AdminProductsShowTable.module.scss';
import { Link } from 'react-router-dom';
import getAllProducts from 'api/getAllProducts';
import { Oval } from 'react-loader-spinner';

function AdminProductsShowTable() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res.data);
            setIsLoaded(true);
        });
    });
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
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Fabric</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>New In</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {[...products].reverse().map((product) => {
                    return (
                        <tr key={product._id}>
                            <td>{product.itemNo}</td>
                            <td>
                                <img
                                    className={adminPanelStyles.AdminProductsImg}
                                    src={product.imageUrls[0]}
                                    alt={`Product ${product._id}`}
                                />
                                <span>{product.name}</span>
                            </td>
                            <td>{product.categories}</td>
                            <td>{product.quantity}</td>
                            <td>{product.currentPrice}$</td>
                            <td>{product.fabric}</td>
                            <td>
                                {product.color ? (
                                    <span style={{ backgroundColor: product.color }}></span>
                                ) : (
                                    '-'
                                )}
                            </td>
                            <td>{product.size ? product.size : '-'}</td>
                            <td>{product.isNew === 'true' ? 'New' : '-'}</td>
                            <td>
                                <Link
                                    to={`/admin/dashboard/products/edit/${product._id}`}
                                    target="_top"
                                >
                                    edit
                                </Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default AdminProductsShowTable;
