import { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { filtersAdded } from '../store/filtersSlice';
import { filtersRemoved } from '../store/filtersSlice';
import { resetSearch } from '../store/searchProductsSlice';

function useTabs() {
    const filters = useSelector((state) => state.filters.filtersQuery, shallowEqual);
    const filtersCheckedAny = useSelector((state) => state.filters.filtersChecked, shallowEqual);
    const dispatch = useDispatch();
    const [tabs, setTabs] = useState([
        { text: 'shop all', active: false },
        { text: 'bedroom', active: false },
        { text: 'bed linen', active: false },
        { text: 'kitchen', active: false },
        { text: 'bathroom', active: false },
        { text: 'loungewear', active: false },
        { text: 'sale', active: false },
    ]);
    useEffect(() => {
        if (filtersCheckedAny) {
            if ('categories' in filters) {
                setTabs((prev) => {
                    return prev.map((tab) => {
                        let tabObj = { ...tab };
                        tabObj.active = false;
                        if (tabObj.text === filters.categories[0]) {
                            tabObj.active = true;
                        }
                        return tabObj;
                    });
                });
            }
        }
    }, [filters, filtersCheckedAny]);
    useEffect(() => {
        if (!filtersCheckedAny) {
            setTabs((prev) => {
                return prev.map((tab) => {
                    let tabObj = { ...tab };
                    if (tabObj.text === 'shop all') {
                        tabObj.active = true;
                    } else {
                        tabObj.active = false;
                    }
                    return tabObj;
                });
            });
        }
    }, [filtersCheckedAny]);
    const clickHandler = (e) => {
        const tabText = e.target.innerText.toLowerCase();
        setTabs((prev) => {
            return prev.map((tab) => {
                let tabObj = { ...tab };
                if (tabObj.active === true) {
                    tabObj.active = false;
                }
                if (tabObj.text === tabText) {
                    tabObj.active = true;
                }
                return tabObj;
            });
        });
        dispatch(resetSearch());
        if (tabText === 'shop all') {
            const filtersObj = { ...filters };
            delete filtersObj.categories;
            dispatch(filtersRemoved({ ...filtersObj }));
        } else {
            dispatch(filtersAdded({ categories: [tabText] }));
        }
    };
    return {
        tabs,
        clickHandler,
    };
}

export default useTabs;
