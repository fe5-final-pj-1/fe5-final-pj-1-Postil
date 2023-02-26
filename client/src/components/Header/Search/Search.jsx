import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../Icon/Icon';
import useDebounce from '../../../hooks/UseDebounce';
import searchForProducts from '../../../api/searchForProducts';
import styles from './Search.module.scss';

function Search({ className }) {
    const classes = classNames(className);
    const [searchPhrases, setSearchPhrases] = useState('');
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const debouncedSearchTerm = useDebounce(searchPhrases, 800);

    useEffect(() => {
        if (debouncedSearchTerm) {
            setIsSearching(true);
            searchForProducts({ query: debouncedSearchTerm }).then((response) => {
                setIsSearching(false);
                setResults(response.data);
            });
        } else {
            setResults([]);
        }
    }, [debouncedSearchTerm]);

    return (
        <div className={classes}>
            <input
                type="text"
                placeholder="Search"
                value={searchPhrases}
                onChange={(e) => setSearchPhrases(e.target.value)}
            />
            <div>
                <Icon type="searchBtn" />
            </div>
            <ul className={styles.listItem}>
                {isSearching && <div>Search...</div>}
                {results.slice(0, 5).map((item) => {
                    return (
                        <li key={item._id}>
                            <div>
                                <p className={styles.name}>{item.name}</p>
                                <div>
                                    <p className={styles.size}>
                                        Size: <span>{item.size}</span>
                                    </p>
                                    <p className={styles.fabric}>
                                        Fabric: <span>{item.fabric}</span>
                                    </p>

                                    <p className={styles.color}>
                                        Color: <span style={{ backgroundColor: item.color }}></span>
                                    </p>
                                </div>
                            </div>
                            <p className={styles.price}>${item.currentPrice}</p>
                        </li>
                    );
                })}
                {results.length > 5 && <li className={styles.showAll}>Show all goods</li>}
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
