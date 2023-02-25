import React from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';

import styles from './BagItemForm.module.scss';

const BagItemForm = (props) => {
    const { colors, sizes } = props;
    return (
        <>
            <Formik initialValues={{ colors, sizes }}>
                {({ values }) => (
                    <form>
                        <div>
                            <label htmlFor="color">COLOR:</label>
                            <select name="color" id="color" className={styles.colorSelector}>
                                {values.colors.map((color, index) => {
                                    return <option key={index} value={color} label={color} />;
                                })}
                            </select>

                            <label htmlFor="size">SIZE:</label>
                            <select name="color" id="size" className={styles.sizeSelector}>
                                {values.sizes.map((color, index) => {
                                    return <option key={index} value={color} label={color} />;
                                })}
                            </select>
                        </div>
                        <div className={styles.numInputWrapper}>
                            <Field
                                type="text"
                                name="amount"
                                value="1"
                                min="1"
                                className={styles.numInput}
                            />
                            <div>
                                <button className={styles.counterBtn} id="increase">
                                    <Icon type="bagCounterIncrease" />
                                </button>
                                <button className={styles.counterBtn}>
                                    <Icon type="bagCounterDecrease" />
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </>
    );
};

BagItemForm.propTypes = {
    colors: PropTypes.array,
    sizes: PropTypes.array,
};

export default BagItemForm;
