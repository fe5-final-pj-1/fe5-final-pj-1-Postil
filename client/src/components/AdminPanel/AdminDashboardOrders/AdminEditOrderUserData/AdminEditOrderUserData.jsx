import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useParams, Navigate } from 'react-router-dom';
import adminPanelStyles from './AdminEditOrderUserData.module.scss';
import updateOrder from 'api/updateOrder';
import getSpecificOrder from 'api/getSpecificOrder';
import { Oval } from 'react-loader-spinner';

function AdminEditOrderUserData() {
    const [order, setOrder] = useState([]);
    const [isRedirect, setIsRedirect] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    let { orderNo } = useParams();
    useEffect(() => {
        getSpecificOrder(orderNo).then((res) => {
            if (!res.data) {
                setIsRedirect(true);
            }
            setOrder(res.data);
            setIsLoaded(true);
        });
    }, [orderNo]);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            mobile: order.mobile ? order.mobile : '',
            email: order.email ? order.email : '',
            country: order.deliveryAddress ? order.deliveryAddress.country : '',
            city: order.deliveryAddress ? order.deliveryAddress.city : '',
            address: order.deliveryAddress ? order.deliveryAddress.address : '',
            postal: order.deliveryAddress ? order.deliveryAddress.postal : '',
        },
        validationSchema: Yup.object({
            mobile: Yup.string().min(3, 'Must be 3 characters or more').required('Required'),
            email: Yup.string().min(3, 'Must be 3 characters or more').required('Required'),
            country: Yup.string().min(3, 'Must be 3 characters or more').required('Required'),
            city: Yup.string().min(3, 'Must be 3 characters or more').required('Required'),
            address: Yup.string().min(3, 'Must be 3 characters or more').required('Required'),
            postal: Yup.string().min(3, 'Must be 3 characters or more').required('Required'),
        }),
        onSubmit: (values) => {
            const data = {
                mobile: values.mobile,
                email: values.email,
                deliveryAddress: {
                    address: values.address,
                    city: values.city,
                    country: values.country,
                    postal: values.postal,
                },
            };
            setIsLoaded(false);
            updateOrder(data, order._id).then(() => {
                setIsRedirect(true);
            });
        },
    });
    if (isRedirect) {
        return <Navigate to="/admin/dashboard/orders/" replace={true} />;
    }
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
            <h2 className="h2">Order №{order.orderNo} (edit delivery data)</h2>
            <form onSubmit={formik.handleSubmit} className={adminPanelStyles.form}>
                <label className={adminPanelStyles.formLabel} htmlFor="mobile">
                    edit user phone number
                </label>
                {formik.touched.mobile && formik.errors.mobile ? (
                    <div className={adminPanelStyles.formError}>{formik.errors.mobile}</div>
                ) : null}
                <input
                    id="mobile"
                    name="mobile"
                    type="text"
                    className={adminPanelStyles.formInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mobile}
                    autoComplete="off"
                />
                <label className={adminPanelStyles.formLabel} htmlFor="email">
                    edit user email
                </label>
                {formik.touched.email && formik.errors.email ? (
                    <div className={adminPanelStyles.formError}>{formik.errors.email}</div>
                ) : null}
                <input
                    id="email"
                    name="email"
                    type="text"
                    className={adminPanelStyles.formInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    autoComplete="off"
                />
                <label className={adminPanelStyles.formLabel} htmlFor="country">
                    edit user country
                </label>
                {formik.touched.country && formik.errors.country ? (
                    <div className={adminPanelStyles.formError}>{formik.errors.country}</div>
                ) : null}
                <input
                    id="country"
                    name="country"
                    type="text"
                    className={adminPanelStyles.formInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.country}
                    autoComplete="off"
                />
                <label className={adminPanelStyles.formLabel} htmlFor="city">
                    edit user city
                </label>
                {formik.touched.city && formik.errors.city ? (
                    <div className={adminPanelStyles.formError}>{formik.errors.city}</div>
                ) : null}
                <input
                    id="city"
                    name="city"
                    type="text"
                    className={adminPanelStyles.formInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                    autoComplete="off"
                />
                <label className={adminPanelStyles.formLabel} htmlFor="address">
                    edit user address
                </label>
                {formik.touched.address && formik.errors.address ? (
                    <div className={adminPanelStyles.formError}>{formik.errors.address}</div>
                ) : null}
                <input
                    id="address"
                    name="address"
                    type="text"
                    className={adminPanelStyles.formInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                    autoComplete="off"
                />
                <label className={adminPanelStyles.formLabel} htmlFor="postal">
                    edit user postal
                </label>
                {formik.touched.postal && formik.errors.postal ? (
                    <div className={adminPanelStyles.formError}>{formik.errors.postal}</div>
                ) : null}
                <input
                    id="postal"
                    name="postal"
                    type="text"
                    className={adminPanelStyles.formInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.postal}
                    autoComplete="off"
                />
                <div className={adminPanelStyles.formButtons}>
                    <button type="submit" className={adminPanelStyles.formSubmitBtn}>
                        Edit data
                    </button>
                    <button
                        onClick={() =>
                            formik.resetForm({
                                values: {
                                    mobile: '',
                                    email: '',
                                    country: '',
                                    city: '',
                                    address: '',
                                    postal: '',
                                },
                            })
                        }
                        type="reset"
                        className={adminPanelStyles.formResetBtn}
                    >
                        Reset Changes
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AdminEditOrderUserData;
