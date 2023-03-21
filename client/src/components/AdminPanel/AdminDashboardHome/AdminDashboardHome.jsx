import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import adminPanelStyles from './AdminDashboardHome.module.scss';
import classNames from 'classnames';
import getAllCustomers from 'api/getAllCustomers';
import getAllOrders from 'api/getAllOrders';
import getAllProducts from 'api/getAllProducts';
import getAllSubscribers from 'api/getAllSubscribers';
import userAvatar from './img/UserAvatar.png';
import Chart from 'react-apexcharts';
import { Oval } from 'react-loader-spinner';

function AdminDashboardHome() {
    const [newProducts, setNewProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [totalSold, setTotalSold] = useState(0);
    const [totalBalance, setTotalBalance] = useState(0);
    const [customers, setCustomers] = useState([]);
    const [subscribers, setSubscribers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [chart, setChart] = useState({
        options: {
            colors: ['#373f41'],
            dataLabels: {
                style: {
                    colors: ['#ffffff'],
                },
            },
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return `${value}$`;
                    },
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 90, 100],
                },
            },
        },
        xaxis: {
            type: 'datetime',
            labels: {
                format: 'd-MMM-yy',
            },
        },
        series: [
            {
                name: '',
                data: [],
            },
        ],
    });
    const calculateData = (productData, ordersData, customersData) => {
        let totalSoldNum = 0;
        let chartArray = [];
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        const onlyNewProducts = productData.filter((product) => product.isNew === 'true');
        const onlyCustomers = customersData.filter((customer) => customer.isAdmin !== true);
        const canceledOrders = ordersData.filter((order) => order.canceled === true);
        const totalBalanceSum = canceledOrders.reduce(
            (acc, cur) => acc + (cur.totalSum * 1.1 + cur.shipping),
            0,
        );
        canceledOrders.forEach((element) => {
            const dateString = element.date;
            const date = new Date(dateString);
            const day = date.getDate();
            const month = date.getMonth();
            chartArray.push({
                x: `${day} ${months[month]}`,
                y: Math.round(element.totalSum * 1.1 + element.shipping),
            });
            totalSoldNum =
                totalSoldNum + element.products.reduce((acc, cur) => acc + cur.cartQuantity, 0);
        });
        const chartData = chartArray.reduce((acc, curr) => {
            const index = acc.findIndex((item) => item.x === curr.x);
            if (index !== -1) {
                acc[index].y += curr.y;
            } else {
                acc.push(curr);
            }
            return acc;
        }, []);
        return {
            onlyNewProducts,
            onlyCustomers,
            canceledOrders,
            totalSoldNum,
            chartData,
            totalBalanceSum,
        };
    };
    useEffect(() => {
        const dataPromises = [
            getAllProducts(),
            getAllOrders(),
            getAllCustomers(),
            getAllSubscribers(),
        ];
        Promise.all(dataPromises).then((res) => {
            const [
                { data: productData },
                { data: ordersData },
                { data: customersData },
                { data: subscribersData },
            ] = res;
            const { onlyNewProducts, onlyCustomers, totalSoldNum, chartData, totalBalanceSum } =
                calculateData(productData, ordersData, customersData);
            setNewProducts(onlyNewProducts.slice(-6).reverse());
            setOrders(ordersData);
            setCustomers(onlyCustomers);
            setSubscribers(subscribersData);
            setChart((prev) => {
                return {
                    ...prev,
                    series: [
                        {
                            name: 'Income',
                            data: chartData,
                        },
                    ],
                };
            });
            setTotalSold(totalSoldNum);
            setTotalBalance(totalBalanceSum.toFixed(0));
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
        <div className={classNames(adminPanelStyles.wrapper, adminPanelStyles.adminHome)}>
            <div className={adminPanelStyles.adminHomeProductsSold}>
                <Link to="/admin/dashboard/orders" className={adminPanelStyles.adminHomeLink}>
                    <span>products sold</span>
                    <span>{totalSold}</span>
                </Link>
            </div>
            <div className={adminPanelStyles.adminHomeTotalBalance}>
                <Link to="/admin/dashboard/orders" className={adminPanelStyles.adminHomeLink}>
                    <span>total balance</span>
                    <span>{totalBalance}$</span>
                </Link>
            </div>
            <div className={adminPanelStyles.adminHomeUsers}>
                <Link to="/admin/dashboard/customers" className={adminPanelStyles.adminHomeLink}>
                    <span>customers</span>
                    <span>{customers.length}</span>
                </Link>
            </div>
            <div className={adminPanelStyles.adminHomeSubscribers}>
                <Link to="/admin/dashboard/subscribers" className={adminPanelStyles.adminHomeLink}>
                    <span>subscribers</span>
                    <span>{subscribers.length}</span>
                </Link>
            </div>
            <div className={adminPanelStyles.adminHomeLatestProducts}>
                <h3 className="h3">latest products</h3>
                {newProducts.map((product) => {
                    return (
                        <div key={product._id}>
                            <Link to={`/catalog/${product._id}`}>
                                <img
                                    src={product.imageUrls[0]}
                                    alt={`product img ${product._id}`}
                                ></img>
                                <span>{product.name}</span>
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className={adminPanelStyles.adminHomeDataChart}>
                <Chart options={chart.options} series={chart.series} type="bar" />
            </div>
            <div className={adminPanelStyles.adminHomeLastOrders}>
                <h3 className="h3">last orders</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Order №</td>
                            <td>name</td>
                            <td>total sum</td>
                            <td>status</td>
                            <td>Canceled</td>
                        </tr>
                    </thead>
                    <tbody>
                        {orders
                            .slice(-7)
                            .reverse()
                            .map((order) => {
                                return (
                                    <tr key={order.orderNo}>
                                        <td>{order.customOrderNumder}</td>
                                        <td>
                                            {order.firstName} {order.lastName}
                                        </td>
                                        <td>
                                            {(order.totalSum * 1.1 + order.shipping).toFixed(0)}$
                                        </td>
                                        <td className={adminPanelStyles.adminHomeTextUp}>
                                            {order.canceled ? 'closed' : order.status}
                                        </td>
                                        <td className={adminPanelStyles.adminHomeTextUp}>
                                            {order.canceled ? 'closed' : 'open'}
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
            <div className={adminPanelStyles.adminHomeNewUsers}>
                <h3 className="h3">new users</h3>
                {customers
                    .slice(-4)
                    .reverse()
                    .map((customer) => {
                        return (
                            <div key={customer._id}>
                                <img
                                    className={adminPanelStyles.adminHomeImg}
                                    src={customer.avatarUrl ? customer.avatarUrl : userAvatar}
                                    alt={`Product ${customer.customerNo}`}
                                />
                                <span>{`${customer.firstName} ${customer.lastName}`}</span>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default AdminDashboardHome;
