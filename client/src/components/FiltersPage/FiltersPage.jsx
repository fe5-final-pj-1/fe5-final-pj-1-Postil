import React from 'react';
import classnames from 'classnames';
import styles from './FiltersPage.module.scss';
import Tabs from './Tabs';
import Filters from './Filters';
import ProductList from './ProductsList/ProductList';
import Pagination from './ProductsList/Pagination/Pagination';

function FiltersPage() {
    return (
        <main className={classnames(styles.wrapper, 'container')}>
            <article className={styles.left}>
                <h1>CATALOG</h1>
                <Filters />
            </article>
            <section className={styles.right}>
                <Tabs />
                <ProductList />
                <Pagination />
            </section>
        </main>
    );
}

export default FiltersPage;