import React from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

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
                            <select name="color" id="color">
                                {values.colors.map((color, index) => {
                                    return <option key={index} value={color} label={color} />;
                                })}
                            </select>

                            <label htmlFor="size">SIZE:</label>
                            <select name="color" id="size">
                                {values.sizes.map((color, index) => {
                                    return <option key={index} value={color} label={color} />;
                                })}
                            </select>
                        </div>
                        <Field
                            type="number"
                            name="amount"
                            value="1"
                            min="1"
                            className={styles.numInput}
                        />
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
