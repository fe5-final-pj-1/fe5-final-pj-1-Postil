import { createContext } from 'react';

const initialValue = {
    tableView: false,
    setTableView: () => {},
};

export const AdminProductsShowContext = createContext(initialValue);
