import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filtersAdded } from '../../../../store/filtersSlice';
import { resetSearch } from '../../../../store/searchProductsSlice';
import styles from './PriceSlider.module.scss';

function PriceSlider() {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        lowerBound: 100,
        upperBound: 350,
        value: [100, 350],
        min: 0,
        max: 600,
    });

    const onLowerBoundChange = (e) => {
        if (+e.target.value + 100 >= values.value[1]) {
            setValues({
                ...values,
                lowerBound: values.value[1] - 100,
                value: [values.value[1] - 100, values.value[1]],
            });
        } else if (+e.target.value > 0) {
            setValues({
                ...values,
                lowerBound: +e.target.value,
                value: [+e.target.value, values.value[1]],
            });
        } else {
            setValues({
                ...values,
                lowerBound: '',
                value: [values.min, values.value[1]],
            });
        }
    };

    const onUpperBoundChange = (e) => {
        if (+e.target.value - 100 <= values.value[0]) {
            setValues({
                ...values,
                upperBound: +e.target.value === 0 ? '' : +e.target.value,
                value: [values.value[0], values.value[0] + 100],
            });
        } else if (+e.target.value > values.max) {
            setValues({
                ...values,
                upperBound: values.max,
                value: [values.value[0], values.max],
            });
        } else if (+e.target.value > 0) {
            setValues({
                ...values,
                upperBound: +e.target.value,
                value: [values.value[0], +e.target.value],
            });
        } else {
            setValues({
                ...values,
                upperBound: '',
                value: [values.value[0], 0],
            });
        }
    };
    const onUpperBoundBlur = () => {
        if (values.upperBound - 100 < values.lowerBound) {
            setValues({
                ...values,
                upperBound: values.lowerBound + 100,
                value: [values.value[0], values.lowerBound + 100],
            });
        }
    };

    const onSliderChange = (value) => {
        const [lowerBound, upperBound] = value;
        if (upperBound - 100 < lowerBound) {
            setValues({
                ...values,
                upperBound: lowerBound + 100,
                lowerBound,
                value: [lowerBound, lowerBound + 100],
            });
        } else {
            setValues({ ...values, lowerBound, upperBound, value });
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetSearch());
        dispatch(filtersAdded({ minPrice: values.value[0], maxPrice: values.value[1] }));
    };
    return (
        <div>
            <Slider
                range
                allowCross={false}
                value={values.value}
                min={values.min}
                max={values.max}
                onChange={onSliderChange}
                railStyle={{ backgroundColor: '#000000', borderRadius: '0', height: '2px' }}
                trackStyle={{ backgroundColor: '#000000', borderRadius: '0', height: '2px' }}
                handleStyle={{
                    backgroundColor: '#000000',
                    width: '1.7rem',
                    height: '1rem',
                    borderRadius: '0',
                    border: 'none',
                    opacity: '1',
                    marginTop: '-.4rem',
                    boxShadow: 'none',
                }}
            />
            <form onSubmit={handleSubmit}>
                <div className={styles.inputs}>
                    <span>FROM</span>
                    <input type="number" value={values.lowerBound} onChange={onLowerBoundChange} />
                    <br />
                    <span>TO</span>
                    <input
                        type="number"
                        value={values.upperBound}
                        onBlur={onUpperBoundBlur}
                        onChange={onUpperBoundChange}
                    />
                </div>
                <input className={styles.submitBtn} type="submit" value="OK" />
            </form>
        </div>
    );
}
export default PriceSlider;
