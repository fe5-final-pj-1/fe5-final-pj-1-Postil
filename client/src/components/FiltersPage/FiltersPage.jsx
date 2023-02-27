import React, { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import styles from './FiltersPage.module.scss';
import Tabs from './Tabs';
import Filters from './Filters';
import ProductList from './ProductsList/ProductList';
import Pagination from './Pagination/Pagination';
import getFilteredProducts from '../../api/getFilteredProducts';
import { useSearchParams } from 'react-router-dom';
import { filtersAdded } from '../../store/filtersSlice';

function FiltersPage() {
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const filters = useSelector((state) => state.filters.filtersQuery, shallowEqual);
    useEffect(() => {
        for (const [key, value] of searchParams.entries()) {
            dispatch(filtersAdded({ [key]: [value] }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        const filtersParams = new URLSearchParams(filters);
        getFilteredProducts(filtersParams.toString()).then((result) =>
            setProducts(result.data.products),
        );
        setSearchParams(filtersParams.toString());
    }, [filters, setSearchParams]);
    return (
        <main className={classnames(styles.wrapper, 'container')}>
            <article className={styles.left}>
                <h1>CATALOG</h1>
                <Filters />
            </article>
            <section className={styles.right}>
                <Tabs />
                <ProductList products={products} />
                <Pagination />
            </section>
        </main>
    );
}

export default FiltersPage;
