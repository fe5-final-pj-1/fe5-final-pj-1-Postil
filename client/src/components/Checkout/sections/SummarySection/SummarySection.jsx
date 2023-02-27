import React from 'react';
import styles from './SummarySection.module.scss';
import Button from '../../../Button';

const SummarySection = () => {
    return (
        <>
            <section>
                <div className={styles.summary}>
                    <h2 className={styles.summaryTitle}>SUMMARY</h2>
                    <div className={styles.summaryInfo}>
                        <div>
                            <img
                                src={
                                    'https://res.cloudinary.com/dm2s5stjy/image/upload/v1677487877/Linens/Rectangle_1048_xhk0ge.png'
                                }
                                alt={''}
                            />
                        </div>
                        <div>
                            <h3 className={styles.imageInfoTitle}>SWEETNESS BED LINEN</h3>
                            <span className={styles.imageInfoText}>$150</span>
                        </div>
                    </div>
                    <div className={styles.summaryInfos}>
                        <div>
                            <img
                                src={
                                    'https://res.cloudinary.com/dm2s5stjy/image/upload/v1677487877/Linens/Rectangle_1049_dbtqzl.png'
                                }
                                alt={''}
                            />
                        </div>
                        <div className={styles.summaryInfoBlock}>
                            <h3 className={styles.imageInfoTitles}>
                                PHISTACHIO FRENCH COTTON BED LINEN
                            </h3>
                            <span className={styles.imageInfoText}>$340</span>
                        </div>
                    </div>
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
                    <Button className={styles.sumBtn} text={'NEXT'} />
                </div>
            </section>
        </>
    );
};

export default SummarySection;
