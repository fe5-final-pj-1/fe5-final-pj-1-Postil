import React from 'react';
import PropTypes from 'prop-types';
import styles from './SummaryTextSection.module.scss';
// import Button from '../../../Button';
import { Link } from 'react-router-dom';
const SummaryTextSection = ({ route }) => {
    return (
        <section>
            <div className={styles.summary}>
                <h2 className={styles.summaryTitle}>SUMMARY</h2>
                <h3 className={styles.summaryText}>ENTER COUPONE CODE</h3>
                <div className={styles.payInfo}>
                    <p className={styles.subName}>
                        SUBTOTAL<span className={styles.total}>$490</span>
                    </p>
                    <p className={styles.subName}>
                        SHIPPING<span className={styles.deliv}>FREE</span>
                    </p>
                    <p className={styles.subName}>
                        TAXES<span className={styles.taxes}>$5</span>
                    </p>
                </div>
                <p className={styles.totalName}>
                    TOTAL<span className={styles.sum}>$495</span>
                </p>
                <Link to={route} className={styles.sumBtn}>
                    BUY
                </Link>
            </div>
        </section>
    );
};
export default SummaryTextSection;

SummaryTextSection.propTypes = {
    route: PropTypes.string,
};
SummaryTextSection.defaultProps = {
    route: 'confirm',
};
