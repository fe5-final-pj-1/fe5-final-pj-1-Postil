import { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { filtersAdded } from '../store/filtersSlice';
import { filtersRemoved } from '../store/filtersSlice';

function useFilters() {
    const filters = useSelector((state) => state.filters.filtersQuery, shallowEqual);
    const filtersCheckedAny = useSelector((state) => state.filters.filtersChecked, shallowEqual);
    const dispatch = useDispatch();
    const [filtersChecked, setFiltersChecked] = useState({
        size: {
            single: false,
            double: false,
            queen: false,
            king: false,
        },
        fabric: {
            cotton: false,
            cashemire: false,
            satin: false,
            silk: false,
            viscose: false,
            linen: false,
        },
        color: {
            '#C96456': false,
            '#957157': false,
            '#E6C463': false,
            '#E4CFCC': false,
            '#DBC6BF': false,
            '#F2DED0': false,
            '#5A5D51': false,
            '#6E7181': false,
            '#99B5BB': false,
            '#A1ADB0': false,
            '#A9AAAC': false,
            '#C92B56': false,
        },
    });
    useEffect(() => {
        if (filtersCheckedAny) {
            setFiltersChecked((prev) => {
                const filtersObj = { ...prev };
                for (const [filterKey, filterValue] of Object.entries(filtersObj)) {
                    if (Object.keys(filters).includes(filterKey)) {
                        for (const [key] of Object.entries(filterValue)) {
                            if (filters[filterKey].includes(key)) {
                                filtersObj[filterKey][key] = true;
                            }
                        }
                    }
                }
                return filtersObj;
            });
        }
    }, [filters, filtersCheckedAny]);
    useEffect(() => {
        if (!filtersCheckedAny) {
            setFiltersChecked((prev) => {
                const filtersObj = { ...prev };
                let newFiltersObj = {};
                for (const [filterKey, filterValue] of Object.entries(filtersObj)) {
                    newFiltersObj[filterKey] = filterValue;
                    for (const [key] of Object.entries(filterValue)) {
                        newFiltersObj[filterKey][key] = false;
                    }
                }
                return newFiltersObj;
            });
        }
    }, [filtersCheckedAny]);
    const handleChange = (userEvent, type) => {
        const typeValue = userEvent.target.name;
        setFiltersChecked((prev) => {
            return {
                ...prev,
                [type]: {
                    ...prev[type],
                    [typeValue]: !prev[type][typeValue],
                },
            };
        });
        if (!(type in filters)) {
            dispatch(filtersAdded({ [type]: [typeValue] }));
        } else if (!filters[type].includes(typeValue)) {
            dispatch(filtersAdded({ [type]: [...filters[type], typeValue] }));
        } else {
            const filtersObj = { ...filters };
            const filteredType = filtersObj[type].filter((elem) => elem !== typeValue);
            if (filteredType.length > 0) {
                dispatch(filtersRemoved({ ...filtersObj, [type]: filteredType }));
            } else {
                delete filtersObj[type];
                dispatch(filtersRemoved({ ...filtersObj }));
            }
        }
    };
    return {
        filtersChecked,
        handleChange,
    };
}

export default useFilters;
