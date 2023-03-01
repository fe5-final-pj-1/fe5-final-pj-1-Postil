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
    const [didRun, setDidRun] = useState(false);
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
            getFilteredProducts(filtersParams.toString()).then((result) =>
                setProducts(result.data.products),
            );
            filtersParams.delete('perPage');
            setSearchParams(filtersParams.toString());
        }
    }, [filters, didRun, setSearchParams]);
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
