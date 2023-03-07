import React from 'react';
import PropTypes from 'prop-types';
import styles from './BagItem.module.scss';

import ActionBtns from '../ActionBtns';
import QuantityInput from '../QuantityInput';

const BagItem = ({ item, location }) => {
    const { name, imageUrls, currentPrice, color, size, fabric, cartQuantity } = item;

    return (
        <>
            <img src={imageUrls[0]} alt="bed linen" className={styles.itemImg} />
            <div className={styles.textWrapper}>
                <h3 className={styles.itemName}>{name}</h3>
                <p className={styles.description}>
                    {
                        "This is the luxury bedding set with absolutely everything in it, at a price that won't keep you up at night."
                    }
                </p>
                <p className={styles.currentPrice}>${currentPrice}</p>

                <div className={styles.flexBlock}>
                    <div className={styles.configWrapper}>
                        {color && (
                            <p className={styles.colorBlock}>
                                <span className={styles.confName}>COLOR:</span>
                                <span
                                    className={styles.color}
                                    style={{ backgroundColor: color }}
                                ></span>
                            </p>
                        )}
                        {size && (
                            <p className={styles.configBlock}>
                                <span className={styles.confName}>SIZE:</span>
                                <span className={styles.confValue}>{size}</span>
                            </p>
                        )}
                        {fabric && (
                            <p className={styles.configBlock}>
                                <span className={styles.confName}>FABRIC:</span>
                                <span className={styles.confValue}>{fabric}</span>
                            </p>
                        )}
                    </div>
                    {location === '/cart' ? <QuantityInput quantity={cartQuantity} /> : null}
                </div>
            </div>
            {location === '/cart' ? <ActionBtns /> : null}
        </>
    );
};

BagItem.propTypes = {
    item: PropTypes.object,
    location: PropTypes.string,
};
BagItem.defaultProps = {
    item: {},
    location: '',
};

export default BagItem;
