import React, { useState, useEffect, useReducer } from 'react';
import adminPanelStyles from './AdminProducts.module.scss';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import getFilteredProducts from 'api/getFilteredProducts';
import AdminProductsShowList from '../AdminProductsShowList';
import Pagination from 'components/Pagination';
import { filtersRemovedAll } from 'store/filtersSlice';
import { AdminProductsShowContext } from 'context/AdminProductsShowContext';
import AdminProductsShowSwitcher from '../AdminProductsShowSwitcher';
import AdminProductsShowTable from '../AdminProductsShowTable';
import { Oval } from 'react-loader-spinner';

function AdminProducts() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const [reload, setReload] = useState(false);
    const [maxPageNumber, setMaxPageNumber] = useState(1);
    const filters = useSelector((state) => state.filters.filtersQuery, shallowEqual);
    const reducer = (state, action) => {
        switch (action.type) {
            case 'List':
                return false;
            case 'Table':
                return true;
            default:
                return state;
        }
    };
    const [tableView, setTableView] = useReducer(reducer, false);
    useEffect(() => {
        dispatch(filtersRemovedAll());
        const filtersParams = new URLSearchParams(filters);
        filtersParams.append('sort', '-date');
        getFilteredProducts(filtersParams.toString()).then((result) => {
            setProducts(result.data.products);
            const number = Math.ceil(
                Number(result.data.productsQuantity) / Number(filters.perPage[0]),
            );
            setMaxPageNumber(number > 0 ? number : 1);
            setIsLoaded(true);
        });
    }, [dispatch, filters, maxPageNumber, reload]);
    return (
        <div className={adminPanelStyles.wrapper}>
            {!isLoaded ? (
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
            ) : (
                <AdminProductsShowContext.Provider value={{ tableView, setTableView }}>
                    <AdminProductsShowSwitcher />
                    {tableView ? (
                        <AdminProductsShowTable products={products} setReload={setReload} />
                    ) : (
                        <>
                            <AdminProductsShowList products={products} setReload={setReload} />
                            {products.length > 0 && <Pagination maxPageNumber={maxPageNumber} />}
                        </>
                    )}
                </AdminProductsShowContext.Provider>
            )}
        </div>
    );
}

export default AdminProducts;
