import React from 'react';
import styles from './EmptyList.module.scss';
import Button from '../../Button';
const EmptyList = () => {
    return (
        <div className={styles.emptyMain}>
            <h1 className={styles.emptyTitle}>THANK YOU FOR YOUR ORDER!</h1>
            <Button className={styles.emptyButton} text={'CONTINUE SHOPPING'} />
        </div>
    );
};
export default EmptyList;
