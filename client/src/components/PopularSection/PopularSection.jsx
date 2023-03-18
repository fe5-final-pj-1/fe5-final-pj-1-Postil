import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PopularSection.module.scss';

const PopularSection = () => {
    return (
        <section className={styles.popular} data-testid="popular-section">
            <div className={styles.container}>
                <h2 className={styles.title}>POPULAR</h2>
                <div className={styles.box}>
                    <div className={styles.boxOne}>
                        <div className={styles.boxOne_footer}>
                            <Link
                                to="/catalog/filter?categories=bedroom"
                                className={styles.btn_long}
                                target="_top"
                            >
                                SHOP
                            </Link>
                        </div>
                    </div>
                    <div className={styles.boxTwo}>
                        <div className={styles.boxTwo_footer}>
                            <Link
                                to="/catalog/filter?categories=bathroom"
                                className={styles.btn_small}
                                target="_top"
                            >
                                SHOP
                            </Link>
                        </div>
                    </div>
                    <div className={styles.boxThree}>
                        <div className={styles.boxThree_footer}>
                            <Link
                                to="/catalog/filter?categories=bed linen"
                                className={styles.btn_small}
                                target="_top"
                            >
                                SHOP
                            </Link>
                        </div>
                    </div>
                    <div className={styles.boxFour}>
                        <div className={styles.boxFour_footer}>
                            <Link
                                to="/catalog/filter?categories=loungewear"
                                className={styles.btn_long}
                                target="_top"
                            >
                                SHOP
                            </Link>
                        </div>
                    </div>
                </div>
                <Link to="/catalog" className={styles.btn} target="_top" data-testid="see-all-btn">
                    SEE ALL
                </Link>
            </div>
        </section>
    );
};
export default PopularSection;
