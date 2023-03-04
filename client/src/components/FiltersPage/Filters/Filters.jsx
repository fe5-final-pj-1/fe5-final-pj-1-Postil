import React, { useState } from 'react';
import styles from './Filters.module.scss';
import Icon from '../../Icon/Icon';
import classNames from 'classnames';
import PriceSlider from './PriceSlider/PriceSlider';
import Button from '../../Button/Button';
import useFilters from '../../../hooks/useFilters';

function Filters() {
    const { filtersChecked, handleChange, activeFiltersSizeColor } = useFilters();
    const [active, setActive] = useState({
        price: false,
        size: false,
        color: false,
        fabric: false,
    });
    const sizes = [{ size: 'single' }, { size: 'double' }, { size: 'queen' }, { size: 'king' }];
    const fabrics = [
        { fabric: 'cotton' },
        { fabric: 'cashemire' },
        { fabric: 'satin' },
        { fabric: 'silk' },
        { fabric: 'viscose' },
        { fabric: 'linen' },
    ];
    const colors = [
        { color: '#C96456' },
        { color: '#957157' },
        { color: '#E6C463' },
        { color: '#E4CFCC' },
        { color: '#DBC6BF' },
        { color: '#F2DED0' },
        { color: '#5A5D51' },
        { color: '#6E7181' },
        { color: '#99B5BB' },
        { color: '#A1ADB0' },
        { color: '#A9AAAC' },
        { color: '#C92B56' },
    ];
    const handleSizeChange = (e) => {
        handleChange(e, 'size');
    };
    const handleColorChange = (e) => {
        handleChange(e, 'color');
    };
    const handleFabricChange = (e) => {
        handleChange(e, 'fabric');
    };
    return (
        <ul className={styles.filtersContainer}>
            <li className={active.price ? classNames(styles.filter, styles.active) : styles.filter}>
                <Button
                    handleClick={() => setActive({ ...active, price: active.price ? false : true })}
                    className={styles.filterName}
                    text={
                        <>
                            <Icon type={active.price ? 'minus' : 'plus'} />
                            <p>price</p>
                        </>
                    }
                />
                {active.price && (
                    <div className={styles.price}>
                        <PriceSlider />
                    </div>
                )}
            </li>
            {activeFiltersSizeColor === true && (
                <>
                    <li
                        className={
                            active.size ? classNames(styles.filter, styles.active) : styles.filter
                        }
                    >
                        <Button
                            handleClick={() =>
                                setActive({ ...active, size: active.size ? false : true })
                            }
                            className={styles.filterName}
                            text={
                                <>
                                    <Icon type={active.size ? 'minus' : 'plus'} />
                                    <p>size</p>
                                </>
                            }
                        />
                        {active.size && (
                            <div className={styles.size}>
                                {sizes.map((size, key) => {
                                    return (
                                        <label key={key}>
                                            <input
                                                onChange={handleSizeChange}
                                                type="checkbox"
                                                checked={filtersChecked.size[size.size]}
                                                name={size.size}
                                            />
                                            <span>{size.size}</span>
                                        </label>
                                    );
                                })}
                            </div>
                        )}
                    </li>
                    <li
                        className={
                            active.color ? classNames(styles.filter, styles.active) : styles.filter
                        }
                    >
                        <Button
                            handleClick={() =>
                                setActive({ ...active, color: active.color ? false : true })
                            }
                            className={styles.filterName}
                            text={
                                <>
                                    <Icon type={active.color ? 'minus' : 'plus'} />
                                    <p>color</p>
                                </>
                            }
                        />
                        {active.color && (
                            <div className={styles.color}>
                                {colors.map((color, key) => (
                                    <label key={key}>
                                        <input
                                            onChange={handleColorChange}
                                            type="checkbox"
                                            checked={filtersChecked.color[`${color.color}`]}
                                            value={color.color}
                                            name={color.color}
                                        />
                                        <span style={{ backgroundColor: color.color }}>&nbsp;</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </li>
                </>
            )}
            <li
                className={active.fabric ? classNames(styles.filter, styles.active) : styles.filter}
            >
                <Button
                    handleClick={() =>
                        setActive({ ...active, fabric: active.fabric ? false : true })
                    }
                    className={styles.filterName}
                    text={
                        <>
                            <Icon type={active.fabric ? 'minus' : 'plus'} />
                            <p>fabric</p>
                        </>
                    }
                />
                {active.fabric && (
                    <div className={styles.fabric}>
                        {fabrics.map((fabric, key) => (
                            <label key={key}>
                                <input
                                    onChange={handleFabricChange}
                                    type="checkbox"
                                    checked={filtersChecked.fabric[`${fabric.fabric}`]}
                                    name={fabric.fabric}
                                />
                                <span>{fabric.fabric}</span>
                            </label>
                        ))}
                    </div>
                )}
            </li>
        </ul>
    );
}

export default Filters;
