import { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { filtersAdded } from '../store/filtersSlice';
import { filtersRemoved } from '../store/filtersSlice';
import { resetSearch } from '../store/searchProductsSlice';

function useFilters() {
    const filters = useSelector((state) => state.filters.filtersQuery, shallowEqual);
    const filtersCheckedAny = useSelector((state) => state.filters.filtersChecked, shallowEqual);
    const [activeFiltersSizeColor, setActiveFiltersSizeColor] = useState(true);
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
        const categoriesWithoutFilters = ['kitchen', 'bathroom', 'loungewear'];
        setActiveFiltersSizeColor(true);
        if (filters.categories) {
            if (categoriesWithoutFilters.includes(filters.categories[0])) {
                setActiveFiltersSizeColor(false);
            }
        }
    }, [filters]);
    // if one of filters is checked - change checked filter's state to true
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
    // if all filters are unchecked - change all filter's state to false
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
    // this logic for handleChange filter (you need to provide type and event to use this function)
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
        dispatch(resetSearch());
        if (!(type in filters)) {
            // if this type of filter is not active
            dispatch(filtersAdded({ [type]: [typeValue] }));
        } else if (!filters[type].includes(typeValue)) {
            // if this type of filter is active but this value isn't in array of values
            dispatch(filtersAdded({ [type]: [...filters[type], typeValue] }));
        } else {
            const filtersObj = { ...filters };
            const filteredType = filtersObj[type].filter((elem) => elem !== typeValue);
            if (filteredType.length > 0) {
                // if this value isn't last in array of values just dispatch mapped array
                dispatch(filtersRemoved({ ...filtersObj, [type]: filteredType }));
            } else {
                // delete this type of filter
                delete filtersObj[type];
                dispatch(filtersRemoved({ ...filtersObj }));
            }
        }
    };
    return {
        filtersChecked,
        handleChange,
        activeFiltersSizeColor,
    };
}

export default useFilters;
