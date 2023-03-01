import { useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import getAllProducts from '../api/getAllProducts';

function usePagination() {
    const currentPage = Math.floor(
        Number(useSelector((state) => state.filters.filtersQuery.startPage[0], shallowEqual)),
    );
    const perPage = useSelector((state) => state.filters.filtersQuery.perPage[0], shallowEqual);
    const [maxPageNumber, setMaxPageNumber] = useState(3);
    // eslint-disable-next-line no-unused-vars
    const [pages, setPages] = useState([
        {
            number: 1,
            active: false,
        },
        {
            number: 2,
            active: false,
        },
        {
            number: 3,
            active: false,
        },
    ]);
    useEffect(() => {
        getAllProducts().then((result) =>
            setMaxPageNumber(Math.ceil(result.data.length / perPage)),
        );
    }, [perPage]);
    useEffect(() => {
        setPages(() => {
            let pageArray = [];
            createPages(pageArray, maxPageNumber, currentPage);
            pageArray = setActivePage(pageArray);
            return pageArray;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, maxPageNumber, perPage]);
    function createPages(pages, pagesCount, currentPage) {
        if (pagesCount > 3 && currentPage <= pagesCount) {
            if (currentPage > 2) {
                // if currentPage > 3
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push({
                        number: i,
                        active: false,
                    });
                    // last page logic
                    if (i === pagesCount && currentPage === pagesCount) {
                        pages.unshift({
                            number: currentPage - 2,
                            active: false,
                        });
                        break;
                    }
                }
            } else {
                // if currentPage < 3
                for (let i = 1; i <= 3; i++) {
                    pages.push({
                        number: i,
                        active: false,
                    });
                }
            }
        } else {
            // if we have only 3 pages
            for (let i = 1; i <= 3; i++) {
                pages.push({
                    number: i,
                    active: false,
                });
            }
        }
    }
    function setActivePage(pageArray) {
        // return array with active value
        return pageArray.map((page) => {
            let pageObj = { ...page };
            pageObj.active = false;
            if (pageObj.number === currentPage) {
                pageObj.active = true;
            }
            return pageObj;
        });
    }
    return {
        currentPage,
        maxPageNumber,
        pages,
    };
}

export default usePagination;
