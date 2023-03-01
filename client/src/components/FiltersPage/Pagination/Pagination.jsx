import styles from './Pagination.module.scss';
import React from 'react';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';

function Pagination() {
    const pages = [
        {
            number: 1,
        },
        {
            number: 2,
        },
        {
            number: 3,
        },
    ];
    const changeActiveClass = (e) => {
        document.querySelectorAll(`.${styles.active}`).forEach((elem) => {
            elem.classList.remove(styles.active);
        });
        e.target.classList.add(styles.active);
    };
    return (
        <div className={styles.paginationContainer}>
            <Button text={<Icon type="arrowLeft" />} />
            <div className={styles.numbers}>
                {pages.map((page, key) => (
                    <Button handleClick={changeActiveClass} key={key} text={`${page.number}`} />
                ))}
            </div>
            <Button text={<Icon type="arrowRight" />} />
        </div>
    );
}

export default Pagination;
