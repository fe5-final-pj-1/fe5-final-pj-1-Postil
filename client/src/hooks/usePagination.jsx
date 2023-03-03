import { useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

function usePagination(maxPageNumber) {
    const currentPage = Math.floor(
        Number(useSelector((state) => state.filters.filtersQuery.startPage[0], shallowEqual)),
    );
    const filters = useSelector((state) => state.filters.filtersQuery, shallowEqual);
    const [pages, setPages] = useState([]);
    useEffect(() => {
        setPages(() => {
            let pageArray = [];
            createPages(pageArray, maxPageNumber, currentPage);
            pageArray = setActivePage(pageArray);
            return pageArray;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, maxPageNumber, filters]);
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
            // if we have less then 3 pages or more then pagesCount
            if (currentPage <= pagesCount) {
                for (let i = 1; i <= pagesCount; i++) {
                    pages.push({
                        number: i,
                        active: false,
                    });
                }
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
