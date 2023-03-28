import React, { useState, useEffect } from 'react';
import stylesFiltersReset from './FiltersReset.module.scss';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { filtersRemovedAll } from '../../../store/filtersSlice';
import { filtersRemoved } from '../../../store/filtersSlice';

function FiltersReset() {
    const [filtersResetArray, setFiltersResetArray] = useState([]);
    const filters = useSelector((state) => state.filters.filtersQuery, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        setFiltersResetArray(() => {
            const newArray = [];
            for (const [key] of Object.entries(filters)) {
                if (key === 'perPage' || key === 'startPage' || key === 'maxPrice') {
                    continue;
                }
                if (key === 'minPrice') {
                    newArray.push('price');
                    continue;
                }
                newArray.push(key);
            }
            if (newArray.length > 0) {
                newArray.unshift('reset');
            }
            return newArray;
        });
    }, [filters]);

    const clickHandler = (e) => {
        const text = e.target.innerText.toLowerCase();
        if (text === 'reset') {
            dispatch(filtersRemovedAll());
        } else {
            const filtersObj = { ...filters };
            delete filtersObj[text];
            dispatch(filtersRemoved({ ...filtersObj }));
        }
    };

    return (
        <ul className={stylesFiltersReset.list}>
            {filtersResetArray.map((resetItem, index) => {
                return (
                    <li
                        key={index}
                        className={stylesFiltersReset.element}
                        onClick={clickHandler}
                        role="presentation"
                    >
                        {resetItem}
                    </li>
                );
            })}
        </ul>
    );
}

export default FiltersReset;
