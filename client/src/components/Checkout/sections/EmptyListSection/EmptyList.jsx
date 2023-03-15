import React from 'react';
import styles from './EmptyList.module.scss';
import { Link } from 'react-router-dom';

const EmptyList = () => {
    return (
        <>
            <div className={styles.emptyMain}>
                <h1 className={styles.emptyTitle}>THANK YOU FOR YOUR ORDER!</h1>
                <Link to="/" className={styles.emptyButton}>
                    CONTINUE SHOPPING
                </Link>
            </div>
        </>
    );
};
export default EmptyList;
