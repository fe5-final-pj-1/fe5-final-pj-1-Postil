import styles from './Pagination.module.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import { filtersAdded } from '../../../store/filtersSlice.js';
import usePagination from '../../../hooks/usePagination';

function Pagination() {
    const { currentPage, maxPageNumber, pages } = usePagination();
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
        if (currentPage < maxPageNumber || currentPage < 3) {
            dispatch(filtersAdded({ startPage: [currentPage + 1] }));
        }
    };
    return (
        <div className={styles.paginationContainer}>
            <Button text={<Icon type="arrowLeft" />} handleClick={handleClickArrowLeft} />
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
            <Button text={<Icon type="arrowRight" />} handleClick={handleClickArrowRight} />
        </div>
    );
}

export default Pagination;
