import React, { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import styles from './FiltersPage.module.scss';
import Tabs from './Tabs';
import Filters from './Filters';
import ProductList from '../ProductsList/ProductList';
import Pagination from '../Pagination/Pagination';
import getFilteredProducts from '../../api/getFilteredProducts';
import { useSearchParams } from 'react-router-dom';
import { filtersAdded } from '../../store/filtersSlice/filtersSlice';
import FiltersReset from './FiltersReset';
import { Oval } from 'react-loader-spinner';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

function FiltersPage() {
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [didRun, setDidRun] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [maxPageNumber, setMaxPageNumber] = useState(1);
    const filters = useSelector((state) => state.filters.filtersQuery, shallowEqual);
    useEffect(() => {
        for (const [key, value] of searchParams.entries()) {
            if (key === 'perPage') {
                continue;
            }
            if (key === 'startPage') {
                if (isNaN(Number(value)) || Number(value) < 1) {
                    continue;
                }
            }
            dispatch(filtersAdded({ [key]: [value] }));
        }
        setDidRun(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        if (didRun) {
            const filtersParams = new URLSearchParams(filters);
            const startPage = filtersParams.get('startPage');
            if (startPage > maxPageNumber) {
                dispatch(filtersAdded({ startPage: ['1'] }));
            } else {
                getFilteredProducts(filtersParams.toString()).then((result) => {
                    setProducts(result.data.products);
                    const number = Math.ceil(
                        Number(result.data.productsQuantity) / Number(filters.perPage[0]),
                    );
                    setMaxPageNumber(number > 0 ? number : 1);
                    setIsLoaded(true);
                });
            }
            filtersParams.delete('perPage');
            setSearchParams(filtersParams.toString());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters, didRun]);
    return (
        <main>
            <BreadCrumbs />
            <div className={classnames(styles.wrapper, 'container')}>
                <article className={styles.left}>
                    <h1>CATALOG</h1>
                    <Filters />
                </article>
                <section className={styles.right}>
                    <Tabs />
                    {!isLoaded ? (
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
                    ) : (
                        <>
                            <FiltersReset />
                            <ProductList products={products} />
                            {products.length > 0 && <Pagination maxPageNumber={maxPageNumber} />}
                        </>
                    )}
                </section>
            </div>
        </main>
    );
}

export default FiltersPage;
