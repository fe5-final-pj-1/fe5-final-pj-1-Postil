import React from 'react';
import styles from './QuantityInput.module.scss';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';

const QuantityInput = ({ quantity }) => {
    // const [quantity, setQuantity] = useState(1);
    // const setQuantityHandler = (action) => {
    //     const actions = {
    //         add(state) {
    //             return ++state;
    //         },
    //         subtract(state) {
    //             return --state;
    //         },
    //     };
    //     setQuantity((prevState) => {
    //         const newState = actions[action](+prevState);
    //         return newState > 0 ? newState : prevState;
    //     });
    // };

    // const onChangeInputHandler = (e) => {
    //     e.stopPropagation();
    //     const newValue = +e.currentTarget.value;
    //     setQuantity((prevState) => {
    //         if (newValue === 0) return '';
    //         if (/^[1-9]\d*$/.test(newValue)) return newValue;
    //         return prevState;
    //     });
    // };

    // const onBlurInputHandler = (e) => {
    //     e.stopPropagation();
    //     const currentValue = +e.currentTarget.value;
    //     setQuantity((prevState) => {
    //         if (!currentValue) return 1;
    //         return prevState;
    //     });
    // };

    return (
        <div className={styles.numInputBlock}>
            <input
                type="text"
                name="amount"
                value={quantity}
                onChange={() => console.log(1)}
                // onChange={onChangeInputHandler}
                // onBlur={onBlurInputHandler}
                className={styles.numInput}
            />
            <div className={styles.numInputBtns}>
                <button
                    className={styles.counterBtn}
                    id="increase"
                    // onClick={setQuantityHandler.bind(null, 'add')}
                >
                    <Icon type="bagCounterIncrease" />
                </button>
                <button
                    className={styles.counterBtn}
                    // onClick={setQuantityHandler.bind(null, 'subtract')}
                >
                    <Icon type="bagCounterDecrease" />
                </button>
            </div>
        </div>
    );
};

export default QuantityInput;

QuantityInput.propTypes = {
    quantity: PropTypes.number,
};
