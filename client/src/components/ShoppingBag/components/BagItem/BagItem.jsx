import React from 'react';
import PropTypes from 'prop-types';
import styles from './BagItem.module.scss';

import ActionBtns from '../ActionBtns';
import QuantityInput from '../QuantityInput';

const BagItem = (props) => {
    const imgUrlPrefix = './img/catalog/';
    const { name, imgUrl, description, currentPrice, color, size } = props.item;

    return (
        <div className={styles.itemWrapper}>
            <img src={imgUrlPrefix + imgUrl} alt="bed linen" className={styles.itemImg} />
            <div className={styles.textWrapper}>
                <h3 className={styles.itemName}>{name}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.currentPrice}>${currentPrice}</p>

                <div className={styles.flexBlock}>
                    <div className={styles.configWrapper}>
                        <p className={styles.configBlock}>
                            <span className={styles.confName}>COLOR:</span>
                            <span className={styles.confValue}>{color}</span>
                        </p>
                        <p className={styles.configBlock}>
                            <span className={styles.confName}>SIZE:</span>
                            <span className={styles.confValue}>{size}</span>
                        </p>
                    </div>

                    <QuantityInput />
                </div>
            </div>

            <ActionBtns />
        </div>
    );
};

BagItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        imgUrl: PropTypes.string,
        currentPrice: PropTypes.number,
        color: PropTypes.string,
        size: PropTypes.string,
        description: PropTypes.string,
    }),
};

export default BagItem;
