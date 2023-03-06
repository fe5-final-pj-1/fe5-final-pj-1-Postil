import React from 'react';
import styles from './BreadCrumbs.module.scss';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { filtersAdded } from '../../store/filtersSlice';
import { useDispatch } from 'react-redux';

function BreadCrumbs({ category, name }) {
    const dispatch = useDispatch();
    const location = useLocation();
    const path = location.pathname;
    const pathArr = path.split('/');
    return (
        <>
            <div className={classNames(styles.container, 'container')}>
                <p>
                    <Link to="/">Shop</Link>
                    {category || name ? (
                        <>
                            {' / '}
                            <Link to={`/${pathArr[1]}`}>{pathArr[1]}</Link>
                        </>
                    ) : (
                        <>
                            {' / '}
                            <span>{pathArr[1]}</span>
                        </>
                    )}
                    {category && (
                        <>
                            {' / '}
                            <Link
                                to={`/catalog/filter?categories=${category}`}
                                onClick={() => {
                                    dispatch(filtersAdded({ categories: [category] }));
                                }}
                            >
                                {category[0].toUpperCase() + category.slice(1)}
                            </Link>
                        </>
                    )}
                    {name && (
                        <>
                            {' / '}
                            <span>{name[0].toUpperCase() + name.slice(1)}</span>
                        </>
                    )}
                </p>
            </div>
        </>
    );
}

export default BreadCrumbs;

BreadCrumbs.propTypes = {
    category: PropTypes.string,
    name: PropTypes.string,
};
BreadCrumbs.defaultProps = {
    category: '',
    name: '',
};
