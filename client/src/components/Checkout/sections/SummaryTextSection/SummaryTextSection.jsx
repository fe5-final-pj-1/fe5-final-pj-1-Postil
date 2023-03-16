import React from 'react';
import PropTypes from 'prop-types';
import styles from './SummaryTextSection.module.scss';
import { Link } from 'react-router-dom';

const SummaryTextSection = ({ subtotal, route }) => {
    return (
        <>
            <section className={styles.summary}>
                <h2 className={styles.summaryTitle}>SUMMARY</h2>
                <h3 className={styles.summaryText}>ENTER COUPONE CODE</h3>
                <div className={styles.payInfo}>
                    <p className={styles.subName}>
                        SUBTOTAL<span className={styles.total}>${subtotal}</span>
                    </p>
                    <p className={styles.subName}>
                        SHIPPING<span className={styles.deliv}>FREE</span>
                    </p>
                    <p className={styles.subName}>
                        TAXES<span className={styles.taxes}>$5</span>
                    </p>
                </div>
                <p className={styles.totalName}>
                    TOTAL<span className={styles.sum}>${subtotal + 5}</span>
                </p>
                <Link to={route} className={styles.sumBtn} onClick={() => window.scroll(0, 0)}>
                    BUY
                </Link>
            </section>
        </>
    );
};
export default SummaryTextSection;

SummaryTextSection.propTypes = {
    route: PropTypes.string,
    subtotal: PropTypes.number,
};
SummaryTextSection.defaultProps = {
    route: '/checkout/confirm',
    subtotal: 0,
};
