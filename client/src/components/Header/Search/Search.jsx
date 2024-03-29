import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../Icon/Icon';
import Image from '../../Image';
import useDebounce from '../../../hooks/useDebounce';
import searchForProducts from '../../../api/searchForProducts';
import styles from './Search.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadProducts,
    setSearchPhrases,
} from '../../../store/searchProductsSlice/searchProductsSlice';
import { Link } from 'react-router-dom';
import { filtersRemovedAll } from '../../../store/filtersSlice/filtersSlice';

function Search({ className }) {
    const { searchPhrases, searchProducts: products } = useSelector(
        (store) => store.searchProducts,
    );
    const dispatch = useDispatch();
    const classes = classNames(className);
    const [productsShow, setProductsShow] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [productsNotFound, setProductsNotFound] = useState(false);
    const debouncedSearchTerm = useDebounce(searchPhrases, 800);

    useEffect(() => {
        if (debouncedSearchTerm) {
            setIsSearching(true);
            setProductsNotFound(false);
            searchForProducts({ query: debouncedSearchTerm }).then((response) => {
                if (!response.data.length) setProductsNotFound(true);
                setIsSearching(false);
                dispatch(loadProducts(response.data));
                setProductsShow(true);
            });
        } else {
            dispatch(loadProducts([]));
            setProductsShow(false);
        }
    }, [debouncedSearchTerm, dispatch]);
    return (
        <div className={classes}>
            <input
                type="text"
                placeholder="Search"
                value={searchPhrases}
                onChange={(e) => {
                    dispatch(filtersRemovedAll());
                    dispatch(setSearchPhrases(e.target.value));
                }}
                onFocus={() => {
                    setProductsShow(true);
                }}
                onBlur={() => setTimeout(() => setProductsShow(false), 250)}
            />
            <div>
                <Icon type="search" />
            </div>
            <ul
                className={
                    productsShow ? classNames(styles.listItem, styles.active) : styles.listItem
                }
            >
                {isSearching && <div>Search...</div>}
                {productsNotFound && (
                    <div className={styles.productsNotFound}>
                        No related goods, try to change search terms.
                    </div>
                )}
                {products.slice(0, 5).map((item) => {
                    return (
                        <li key={item._id}>
                            <Link to={`catalog/${item._id}`}>
                                <Image width={70} height={70} src={item.imageUrls[0]} />
                                <div>
                                    <p className={styles.name}>{item.name}</p>
                                    <div>
                                        {item.size && (
                                            <p className={styles.size}>
                                                Size: <span>{item.size}</span>
                                            </p>
                                        )}
                                        <p className={styles.fabric}>
                                            Fabric: <span>{item.fabric}</span>
                                        </p>

                                        {item.color && (
                                            <p className={styles.color}>
                                                Color:{' '}
                                                <span
                                                    style={{ backgroundColor: item.color }}
                                                ></span>
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <p className={styles.price}>${item.currentPrice}</p>
                            </Link>
                        </li>
                    );
                })}
                {(products.length > 5 || productsNotFound) && (
                    <li className={styles.showAll}>
                        <Link onClick={() => setProductsShow(false)} to="/catalog">
                            Show all goods
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Search;

Search.propTypes = {
    className: PropTypes.string,
};
Search.defaultProps = {
    className: '',
};
