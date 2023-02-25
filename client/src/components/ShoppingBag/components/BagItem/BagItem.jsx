import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
// import BagItemForm from '../BagItemForm';
import ActionBtns from '../ActionBtns';
import styles from './BagItem.module.scss';

const BagItem = (props) => {
    const imgUrlPrefix = './img/catalog/';
    const { name, imgUrl, description, currentPrice, color, size } = props.item;

    const [quantity, setQuantity] = useState(1);
    const changeQuantity = (action, e) => {
        e.stopPropagation();
        console.log('first', e.currentTarget);

        const actions = {
            add(state) {
                return ++state;
            },
            subtract(state) {
                return --state;
            },
            change(state) {
                console.log('second', e.currentTarget.value);
                const newValue = +e.currentTarget.value;
                return Number.isNaN(newValue) ? state : newValue;
            },
        };
        setQuantity((prevState) => {
            const newState = actions[action](+prevState);
            return newState > 0 ? newState : prevState;
        });
    };

    const inputHandler = (e) => {
        e.stopPropagation();
        setQuantity((prevState) => {
            console.log(e.currentTarget);

            const newValue = +e.currentTarget.value;
            return Number.isNaN(newValue) ? prevState : newValue;
        });
        // setQuantity(+e.currentTarget.value);
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
                            onChange={inputHandler}
                            className={styles.numInput}
                        />
                        <div className={styles.numInputBtns}>
                            <button
                                className={styles.counterBtn}
                                id="increase"
                                onClick={changeQuantity.bind(null, 'add')}
                            >
                                <Icon type="bagCounterIncrease" />
                            </button>
                            <button
                                className={styles.counterBtn}
                                onClick={changeQuantity.bind(null, 'subtract')}
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
