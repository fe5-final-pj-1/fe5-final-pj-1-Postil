import React from 'react';
import formStyle from './Form.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PatternFormat } from 'react-number-format';
function Form() {
    const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    const NAME_REGEX = /^[a-z ,.'-]+$/i;
    const EMAIL_REGEX =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            mobile: '',
            address: '',
            email: '',
            city: '',
            zip: '',
            shipping: 'FreeShipping',
            country: '',
        },

        validationSchema: Yup.object({
            firstName: Yup.string()
                .matches(NAME_REGEX, 'No valid symbols')
                .min(2, 'First Name must be between 2 and 25 characters')
                .max(25, 'First Name must be between 2 and 25 characters')
                .required('Required'),
            lastName: Yup.string()
                .matches(NAME_REGEX, 'No valid symbols')
                .min(2, 'Last Name must be between 2 and 25 characters')
                .max(25, 'Last Name must be between 2 and 25 characters')
                .required('Required'),
            mobile: Yup.string().matches(phoneRegex, 'No valid phone number').required('Required'),
            address: Yup.string().min(3, 'Must be more than 3 characters').required('Required'),
            email: Yup.string().matches(EMAIL_REGEX, 'No valid email address').required('Required'),

            city: Yup.string().min(3, 'Must be more than 3 characters').required('Required'),
            country: Yup.string().required('Required'),
            zip: Yup.string().min(3, 'Must be more than 3 characters').required('Required'),
            shipping: Yup.string().required('Choose your delivery method'),
        }),
        onSubmit: (values) => {
            const { firstName, lastName, city, address, country, shipping, mobile, zip } = values;
            const order = {
                deliveryAddress: {
                    country,
                    city,
                    address,
                    postal: zip,
                },
                status: 'not shipped',
                email: 'saribeg@gmail.com',
                mobile,
                firstName,
                lastName,
                shipping,
            };
            console.log(order);
        },
    });
    return (
        <>
            <form className={formStyle.section} onSubmit={formik.handleSubmit} id="shippingForm">
                <h2 className={formStyle.shipping_title}>Shipping Details</h2>
                <div className={formStyle.main}>
                    <div className={formStyle.main_inputs}>
                        <div className={formStyle.inputs_wrapper}>
                            <div className={formStyle.input}>
                                <label htmlFor="firstName" className={formStyle.input_label}>
                                    {formik.errors.firstName && formik.touched.firstName ? (
                                        <p className={formStyle.accent_color}>
                                            {formik.errors.firstName}
                                        </p>
                                    ) : null}
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formStyle.input_area}
                                    placeholder={'First name'}
                                />
                            </div>
                            <div className={formStyle.input}>
                                <label htmlFor="lastName" className={formStyle.input_label}>
                                    {formik.errors.lastName && formik.touched.lastName ? (
                                        <p className={formStyle.accent_color}>
                                            {formik.errors.lastName}
                                        </p>
                                    ) : null}
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    onChange={formik.handleChange}
                                    value={formik.values.lastName}
                                    onBlur={formik.handleBlur}
                                    id="lastName"
                                    className={formStyle.input_area}
                                    placeholder={'Last Name'}
                                />
                            </div>
                        </div>
                        <div className={formStyle.input}>
                            <label htmlFor="address" className={formStyle.input_label}>
                                {formik.errors.address && formik.touched.address ? (
                                    <p className={formStyle.accent_color}>
                                        {formik.errors.address}
                                    </p>
                                ) : null}
                            </label>
                            <input
                                type="textarea"
                                name="address"
                                id="address"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.address}
                                className={formStyle.input_area}
                                placeholder={'Address'}
                            />
                        </div>
                        <div className={formStyle.input}>
                            <label htmlFor="email" className={formStyle.input_label}>
                                {formik.errors.email && formik.touched.email ? (
                                    <p className={formStyle.accent_color}>{formik.errors.email}</p>
                                ) : null}
                            </label>
                            <input
                                type="textarea"
                                name="email"
                                id="email"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.address2}
                                className={formStyle.input_area}
                                placeholder={'Email'}
                            />
                        </div>
                        <div className={formStyle.inputs_wrapper}>
                            <div className={formStyle.select_wrapper}>
                                <label htmlFor="country" className={formStyle.input_label}>
                                    {formik.errors.country && formik.touched.country ? (
                                        <p className={formStyle.accent_color}>
                                            {formik.errors.country}
                                        </p>
                                    ) : null}
                                </label>
                                <select
                                    id="country"
                                    className={formStyle.select}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    defaultValue={'DEFAULT'}
                                >
                                    <option disabled value="DEFAULT">
                                        Select Country
                                    </option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="Poland">Poland</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                    <option value="USA">USA</option>
                                    <option value="Italy">Italy</option>
                                </select>
                            </div>
                            <div className={formStyle.input}>
                                <label htmlFor="city" className={formStyle.input_label}>
                                    {formik.errors.city && formik.touched.city ? (
                                        <p className={formStyle.accent_color}>
                                            {formik.errors.city}
                                        </p>
                                    ) : null}
                                </label>
                                <input
                                    type="textarea"
                                    name="city"
                                    id="city"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.city}
                                    className={formStyle.input_area}
                                    placeholder={'City'}
                                />
                            </div>
                        </div>
                        <div className={formStyle.inputs_wrapper}>
                            <div className={formStyle.input}>
                                <label htmlFor="zip" className={formStyle.input_label}>
                                    {formik.errors.zip && formik.touched.zip ? (
                                        <p className={formStyle.accent_color}>
                                            {formik.errors.zip}
                                        </p>
                                    ) : null}
                                </label>
                                <input
                                    type="textarea"
                                    name="zip"
                                    id="zip"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.zip}
                                    className={formStyle.input_area}
                                    placeholder={'Zip/Postal Code'}
                                />
                            </div>
                            <div className={formStyle.input}>
                                <label htmlFor="mobile" className={formStyle.input_label}>
                                    {formik.errors.mobile && formik.touched.mobile ? (
                                        <p className={formStyle.accent_color}>
                                            {formik.errors.mobile}
                                        </p>
                                    ) : null}
                                </label>
                                <PatternFormat
                                    type="tel"
                                    name="mobile"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.mobile}
                                    id="mobile"
                                    className={formStyle.input_area}
                                    placeholder={'Phone Number'}
                                    allowEmptyFormatting
                                    mask="_"
                                    format="+## (###) ###-####"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={formStyle.checkbox_wrapper}>
                        <label className={formStyle.radio_btn_wrapper} id="radio_label1">
                            <input
                                className={formStyle.radio_btn}
                                type="radio"
                                name="shipping"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value="FreeShipping"
                                id="radio_label1"
                                defaultChecked={true}
                            />
                            <div className={formStyle.btn_text}>
                                <h2 className={formStyle.checkbox_title}>Free Shipping</h2>
                                <p className={formStyle.checkbox_text}>Between 2-5 working days</p>
                            </div>
                        </label>
                        <label className={formStyle.radio_btn_wrapper} id="radio_label2">
                            <input
                                className={formStyle.radio_btn}
                                type="radio"
                                name="shipping"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value="PayDelivery"
                                id="radio_label2"
                            />
                            <div className={formStyle.btn_text}>
                                <h2 className={formStyle.checkbox_title}>
                                    Next Day Delivery - 10$
                                </h2>
                                <p className={formStyle.checkbox_text}>24 hours from checkout</p>
                            </div>
                        </label>
                    </div>
                </div>
            </form>
            {/* <button type="submit" form="shippingForm">
                submit
            </button> */}
        </>
    );
}

export default Form;
