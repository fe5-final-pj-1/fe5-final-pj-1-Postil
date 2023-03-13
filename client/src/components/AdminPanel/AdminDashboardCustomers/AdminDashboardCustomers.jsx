import React, { useState, useEffect } from 'react';
import adminPanelStyles from './AdminDashboardCustomers.module.scss';
import AdminTable from '../AdminTable';
import getAllCustomers from 'api/getAllCustomers';
import { Oval } from 'react-loader-spinner';

function AdminDashboardCustomers() {
    const [customers, setCustomers] = useState([]);
    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        getAllCustomers().then((res) => {
            setCustomers(res.data);
            setIsLoaded(true);
        });
    });
    if (!isLoaded) {
        return (
            <Oval
                height={130}
                width={130}
                color="#373F41"
                wrapperStyle={{}}
                wrapperClass={adminPanelStyles.loader}
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        );
    }

    return (
        <div className={adminPanelStyles.wrapper}>
            <AdminTable data={customers} forceUpdate={forceUpdate} />
        </div>
    );
}

export default AdminDashboardCustomers;
