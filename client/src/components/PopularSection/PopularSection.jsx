import React from 'react';
import styles from './PopularSection.module.scss';
import Button from '../Button';

const PopularSection = () => {
    return (
        <section className={styles.popular}>
            <div className={styles.container}>
                <h2 className={styles.title}>POPULAR</h2>
                <div className={styles.box}>
                    <div className={styles.boxOne}>
                        <div className={styles.boxOne_footer}>
                            <Button text={'SHOP'} className={styles.btn_long} />
                        </div>
                    </div>
                    <div className={styles.boxTwo}>
                        <div className={styles.boxTwo_footer}>
                            <Button text={'SHOP'} className={styles.btn_small} />
                        </div>
                    </div>
                    <div className={styles.boxThree}>
                        <div className={styles.boxThree_footer}>
                            <Button text={'SHOP'} className={styles.btn_small} />
                        </div>
                    </div>
                    <div className={styles.boxFour}>
                        <div className={styles.boxFour_footer}>
                            <Button text={'SHOP'} className={styles.btn_long} />
                        </div>
                    </div>
                </div>
                <Button className={styles.btn} text={'SEE ALL'} />
            </div>
        </section>
    );
};
export default PopularSection;
