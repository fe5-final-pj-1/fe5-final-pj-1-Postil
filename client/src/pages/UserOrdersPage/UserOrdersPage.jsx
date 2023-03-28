import React, { useEffect, useState } from 'react';
import styles from './UserOrderPage.module.scss';
import { Oval } from 'react-loader-spinner';
import Button from '../../components/Button';
import Icon from '../../components/Icon/Icon';
import getCustomerOrder from 'api/getCustomerOrder';

function UserOrdersPage() {
    const [active, setActive] = useState({});
    const [orders, setOrders] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getCustomerOrder().then((res) => {
            if (res) setOrders(res.data);
            setIsLoaded(true);
        });
    }, []);
    useEffect(() => {
        const ordersTabs = orders.map((item) => item.customOrderNumder);
        const activeTabs = {};
        for (let index = 0; index < ordersTabs.length; index++) {
            const element = ordersTabs[index];
            activeTabs[element] = false;
        }
        setActive(activeTabs);
    }, [orders]);
    if (!isLoaded)
        return (
            <Oval
                height={130}
                width={130}
                color="#373F41"
                wrapperStyle={{}}
                wrapperClass={styles.loader}
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        );

    return (
        <main>
            <div className="container">
                <p className={styles.title}>My orders</p>
                {!orders.length && <h2 className={styles.noOrders}>No Orders</h2>}
                {[...orders].reverse().map((item, index) => {
                    return (
                        <div className={styles.boxInfo} key={index}>
                            <Button
                                handleClick={() =>
                                    setActive({
                                        ...active,
                                        [item.customOrderNumder]: !active[item.customOrderNumder],
                                    })
                                }
                                className={styles.boxInfoName}
                                text={
                                    <>
                                        <p className={styles.boxInfoTitle}>
                                            Order № {item.customOrderNumder}
                                        </p>
                                        <Icon
                                            type={active.orderData ? 'minus' : 'bagDropDownArrow'}
                                        />
                                    </>
                                }
                            />
                            {active[item.customOrderNumder] && (
                                <>
                                    <div className={styles.wrpFullItem}>
                                        <ul className={styles.orderDataList}>
                                            <li className={styles.orderDataItem}>
                                                <span className={styles.orderDataPlaseholder}>
                                                    purchase date
                                                </span>
                                                {item.date.slice(0, 10)}
                                            </li>
                                            <li className={styles.orderDataItem}>
                                                <span className={styles.orderDataPlaseholder}>
                                                    Status
                                                </span>
                                                {item.status}
                                            </li>
                                            <li className={styles.orderDataItem}>
                                                <span className={styles.orderDataPlaseholder}>
                                                    shipping cost
                                                </span>
                                                {item.shipping === 0
                                                    ? 'FREE'
                                                    : `$ ${item.shipping}`}
                                            </li>
                                            <li className={styles.orderDataItem}>
                                                <span className={styles.orderDataPlaseholder}>
                                                    taxes(10%)
                                                </span>
                                                $ {item.totalSum * 0.1}
                                            </li>
                                            <li className={styles.orderDataItem}>
                                                <span className={styles.orderDataPlaseholder}>
                                                    Total Sum
                                                </span>
                                                $ {(item.totalSum * 1.1 + item.shipping).toFixed(2)}
                                            </li>
                                        </ul>
                                    </div>
                                    <table className={styles.productsTable}>
                                        <thead>
                                            <tr>
                                                <th className={styles.productsTableHide}>
                                                    Product ID
                                                </th>
                                                <th>Product Name</th>
                                                <th className={styles.productsTableHide}>
                                                    Category
                                                </th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th>Fabric</th>
                                                <th>Color</th>
                                                <th>Size</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {item.products.map((product) => {
                                                const cartProduct = product;
                                                product = product.product;
                                                return (
                                                    <tr key={product._id}>
                                                        <td className={styles.productsTableHide}>
                                                            {product.itemNo}
                                                        </td>
                                                        <td>
                                                            <img
                                                                className={styles.productsImg}
                                                                src={product.imageUrls[0]}
                                                                alt={`Product ${product._id}`}
                                                            />
                                                            <span>{product.name}</span>
                                                        </td>
                                                        <td className={styles.productsTableHide}>
                                                            {product.categories}
                                                        </td>
                                                        <td>{cartProduct.cartQuantity}</td>
                                                        <td>{product.currentPrice}$</td>
                                                        <td>{product.fabric}</td>
                                                        <td>
                                                            {product.color ? (
                                                                <span
                                                                    style={{
                                                                        backgroundColor:
                                                                            product.color,
                                                                    }}
                                                                ></span>
                                                            ) : (
                                                                '-'
                                                            )}
                                                        </td>
                                                        <td>{product.size ? product.size : '-'}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </main>
    );
}

export default UserOrdersPage;
