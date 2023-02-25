import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
// import BagItemForm from '../BagItemForm';
import styles from './BagItem.module.scss';

import ActionBtns from '../ActionBtns';

const BagItem = (props) => {
    const imgUrlPrefix = './img/catalog/';
    const { name, imgUrl, description, currentPrice, color, size } = props.item;

    const [quantity, setQuantity] = useState(1);
    const setQuantityHandler = (action) => {
        const actions = {
            add(state) {
                return ++state;
            },
            subtract(state) {
                return --state;
            },
        };
        setQuantity((prevState) => {
            const newState = actions[action](+prevState);
            return newState > 0 ? newState : prevState;
        });
    };

    const onChangeInputHandler = (e) => {
        e.stopPropagation();
        const newValue = +e.currentTarget.value;
        setQuantity((prevState) => {
            if (newValue === 0) return '';
            if (/^[1-9]\d*$/.test(newValue)) return newValue;
            return prevState;
        });
    };

    const onBlurInputHandler = (e) => {
        e.stopPropagation();
        const currentValue = +e.currentTarget.value;
        setQuantity((prevState) => {
            if (!currentValue) return 1;
            return prevState;
        });
    };

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

                    <div className={styles.numInputBlock}>
                        <input
                            type="text"
                            name="amount"
                            value={quantity}
                            onChange={onChangeInputHandler}
                            onBlur={onBlurInputHandler}
                            className={styles.numInput}
                        />
                        <div className={styles.numInputBtns}>
                            <button
                                className={styles.counterBtn}
                                id="increase"
                                onClick={setQuantityHandler.bind(null, 'add')}
                            >
                                <Icon type="bagCounterIncrease" />
                            </button>
                            <button
                                className={styles.counterBtn}
                                onClick={setQuantityHandler.bind(null, 'subtract')}
                            >
                                <Icon type="bagCounterDecrease" />
                            </button>
                        </div>
                    </div>
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
