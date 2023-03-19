import React from 'react';
import PropTypes from 'prop-types';
import styles from '../UserProfilePage.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from 'components/Button';
import updateCustomer from 'api/updateCustomer';

function FormDeliveryAdress({ setUser, editUser, user }) {
    const { editUserData, setEditUserData } = editUser;
    const { deliveryAddress } = user;

    const formik = useFormik({
        initialValues: deliveryAddress
            ? {
                  country: deliveryAddress.country ? deliveryAddress.country : 'Choose the Country',
                  city: deliveryAddress.city ? deliveryAddress.city : '',
                  address: deliveryAddress.address ? deliveryAddress.address : '',
                  postal: deliveryAddress.postal ? deliveryAddress.postal : '',
              }
            : {
                  country: 'Choose the Country',
                  city: '',
                  address: '',
                  postal: '',
              },
        validationSchema: Yup.object({
            country: Yup.string().oneOf(
                ['Ukraine', 'Poland', 'France', 'Germany', 'USA', 'Italy'],
                'Choose the Country',
            ),
            city: Yup.string().min(3, 'Must be more than 3 characters'),
            address: Yup.string().min(3, 'Must be more than 3 characters'),
            postal: Yup.number()
                .typeError('Must be a number')
                .min(3, 'Must be more than 3 characters'),
        }),
        onSubmit: (values) => {
            updateCustomer({
                deliveryAddress: {
                    ...values,
                    country: values.country === 'Choose the Country' ? '' : values.country,
                },
            }).then((res) => (res ? setUser(res.data) : null));
            setEditUserData({ ...editUserData, deliveryAddress: false });
        },
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit} id="adressForm" className={styles.adressForm}>
                <label className={styles.personalDataItem}>
                    {formik.errors.country && formik.touched.country ? (
                        <p>{formik.errors.country}</p>
                    ) : null}
                    <span className={styles.personalDataPlaseholder}>Country</span>
                    <select
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        defaultValue={formik.values.country}
                        name="country"
                    >
                        <option disabled value={formik.values.country}>
                            {formik.values.country}
                        </option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="Poland">Poland</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="USA">USA</option>
                        <option value="Italy">Italy</option>
                    </select>
                </label>

                <label className={styles.personalDataItem}>
                    {formik.errors.city && formik.touched.city ? <p>{formik.errors.city}</p> : null}
                    <span className={styles.personalDataPlaseholder}>City</span>
                    <input
                        type="text"
                        name="city"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        placeholder={'City'}
                    />
                </label>

                <label className={styles.personalDataItem}>
                    {formik.errors.address && formik.touched.address ? (
                        <p>{formik.errors.address}</p>
                    ) : null}
                    <span className={styles.personalDataPlaseholder}>Adress</span>
                    <input
                        type="text"
                        name="address"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        placeholder={'Address'}
                    />
                </label>

                <label className={styles.personalDataItem}>
                    {formik.errors.postal && formik.touched.postal ? (
                        <p>{formik.errors.postal}</p>
                    ) : null}
                    <span className={styles.personalDataPlaseholder}>Postal Code</span>
                    <input
                        type="text"
                        name="postal"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.postal}
                        placeholder={'Postal Code'}
                    />
                </label>
            </form>
            <Button
                type="submit"
                text="CHANGE"
                form="adressForm"
                handleClick={formik.handleSubmit}
                className={styles.editBtn}
            />
        </>
    );
}

export default FormDeliveryAdress;

FormDeliveryAdress.propTypes = {
    user: PropTypes.object,
    editUser: PropTypes.object,
    setUser: PropTypes.func,
};
FormDeliveryAdress.defaultProps = {
    user: {},
    editUser: {},
};
