import React from 'react';
import PropTypes from 'prop-types';
import styles from '../UserProfilePage.module.scss';
import { PatternFormat } from 'react-number-format';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from 'components/Button';
import updateCustomer from 'api/updateCustomer';

function FormPersonalData({ setUser, editUser, user }) {
    const { editUserData, setEditUserData } = editUser;
    const EMAIL_REGEX =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const NAME_REGEX = /^[a-z ,.'-]+$/i;
    const PHONE_REGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    //es-lint
    const BIRTHDAY_REGEX =
        /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    const formik = useFormik({
        initialValues: {
            firstName: user.firstName ? user.firstName : '',
            lastName: user.lastName ? user.lastName : '',
            email: user.email ? user.email : '',
            mobile: user.mobile ? user.mobile : '',
            gender: user.gender ? user.gender : 'Choose your gender',
            birthday: user.birthday ? user.birthday : '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .matches(NAME_REGEX, 'No valid symbols')
                .min(2, 'First Name must be between 2 and 25 characters')
                .max(25, 'First Name must be between 2 and 25 characters'),
            lastName: Yup.string()
                .matches(NAME_REGEX, 'No valid symbols')
                .min(2, 'Last Name must be between 2 and 25 characters')
                .max(25, 'Last Name must be between 2 and 25 characters'),
            email: Yup.string().matches(EMAIL_REGEX, 'No valid email address'),
            mobile: Yup.string().matches(PHONE_REGEX, 'No valid phone number'),
            gender: Yup.string().oneOf(
                ['Male', 'Female', 'Other', 'Choose your gender'],
                'Choose your gender',
            ),
            birthday: Yup.string().matches(BIRTHDAY_REGEX, 'No valid data'),
        }),
        onSubmit: (values) => {
            updateCustomer({
                ...values,
                gender: values.gender === 'Choose your gender' ? '' : values.gender,
            }).then((res) => (res ? setUser(res.data) : null));
            setEditUserData({ ...editUserData, personalData: false });
        },
    });

    return (
        <>
            <form id="editForm" className={styles.personalDataList}>
                <label className={styles.personalDataItem}>
                    {formik.errors.firstName && formik.touched.firstName ? (
                        <p>{formik.errors.firstName}</p>
                    ) : null}
                    <span className={styles.personalDataPlaseholder}>First Name</span>
                    <input
                        type="text"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={'First Name *'}
                    />
                </label>
                <label className={styles.personalDataItem}>
                    {formik.errors.lastName && formik.touched.lastName ? (
                        <p>{formik.errors.lastName}</p>
                    ) : null}
                    <span className={styles.personalDataPlaseholder}>Last Name</span>
                    <input
                        type="text"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={'Last Name'}
                    />
                </label>
                <label className={styles.personalDataItem}>
                    {formik.errors.email && formik.touched.email ? (
                        <p>{formik.errors.email}</p>
                    ) : null}
                    <span className={styles.personalDataPlaseholder}>Email</span>
                    <input
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={'Email'}
                    />
                </label>
                <label className={styles.personalDataItem}>
                    {formik.errors.mobile && formik.touched.mobile ? (
                        <p>{formik.errors.mobile}</p>
                    ) : null}
                    <span className={styles.personalDataPlaseholder}>Phone</span>
                    <PatternFormat
                        type="tel"
                        name="mobile"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.mobile}
                        placeholder={'Phone Number'}
                        allowEmptyFormatting
                        mask="_"
                        format="+## (###) ###-####"
                    />
                </label>
                <label className={styles.personalDataItem}>
                    {formik.errors.gender && formik.touched.gender ? (
                        <p>{formik.errors.gender}</p>
                    ) : null}
                    <span className={styles.personalDataPlaseholder}>Gender</span>
                    <select
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        defaultValue={formik.values.gender}
                        name="gender"
                    >
                        <option disabled value={formik.values.gender}>
                            {formik.values.gender}
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label className={styles.personalDataItem}>
                    {formik.errors.birthday && formik.touched.birthday ? (
                        <p>{formik.errors.birthday}</p>
                    ) : null}
                    <span className={styles.personalDataPlaseholder}>Birthday</span>
                    <PatternFormat
                        type="tel"
                        name="birthday"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.birthday}
                        allowEmptyFormatting
                        mask="_"
                        format="##/##/####"
                    />
                </label>
            </form>
            <Button
                form="editForm"
                type="submit"
                text="CHANGE"
                className={styles.editBtn}
                handleClick={formik.handleSubmit}
            />
        </>
    );
}

export default FormPersonalData;

FormPersonalData.propTypes = {
    user: PropTypes.object,
    editUser: PropTypes.object,
    setUser: PropTypes.func,
};
FormPersonalData.defaultProps = {
    user: {},
    editUser: {},
};
