import styles from './Pagination.module.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import { filtersAdded } from '../../../store/filtersSlice.js';
import usePagination from '../../../hooks/usePagination';
import PropTypes from 'prop-types';

function Pagination({ maxPageNumber }) {
    const { currentPage, pages } = usePagination(maxPageNumber);
    const dispatch = useDispatch();

    const handleClickPage = (e) => {
        const pageNumber = Number(e.target.innerText);
        dispatch(filtersAdded({ startPage: [pageNumber] }));
    };
    const handleClickArrowLeft = () => {
        if (currentPage > 1) {
            dispatch(filtersAdded({ startPage: [currentPage - 1] }));
        }
    };
    const handleClickArrowRight = () => {
        if (currentPage < maxPageNumber) {
            dispatch(filtersAdded({ startPage: [currentPage + 1] }));
        }
    };
    return (
        <div className={styles.paginationContainer}>
            {maxPageNumber > 3 && (
                <Button text={<Icon type="arrowLeft" />} handleClick={handleClickArrowLeft} />
            )}
            <div className={styles.numbers}>
                {pages.map((page, key) => {
                    return (
                        <Button
                            handleClick={handleClickPage}
                            key={key}
                            className={page.active ? styles.active : null}
                            text={`${page.number}`}
                        />
                    );
                })}
            </div>
            {maxPageNumber > 3 && (
                <Button text={<Icon type="arrowRight" />} handleClick={handleClickArrowRight} />
            )}
        </div>
    );
}

export default Pagination;

Pagination.propTypes = {
    maxPageNumber: PropTypes.number.isRequired,
};
