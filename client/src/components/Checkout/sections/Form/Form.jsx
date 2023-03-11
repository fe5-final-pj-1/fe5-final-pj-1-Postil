import { useFormik } from 'formik';
import * as Yup from 'yup';
import formStyle from './Form.module.scss';
import React from 'react';
function Form() {
    const EMAIL_REGEX =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            email: '',
            city: '',
            zip: '',
            shipping: 'FreeShipping',
            country: '',
        },

        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(3, 'Must be more than 3 characters')
                .required('What is your name?'),
            lastName: Yup.string()
                .min(3, 'Must be more than 3 characters')
                .required('What is your surname?'),
            phoneNumber: Yup.number()
                .min(10, 'Must be more than 10 characters')
                .required('What is your phone number?'),
            address: Yup.string()
                .min(3, 'Must be more than 3 characters')
                .required('What is your delivery address?'),
            email: Yup.string().matches(EMAIL_REGEX, 'No valid email address').required('Required'),

            city: Yup.string()
                .min(3, 'Must be more than 3 characters')
                .required('What is your city?'),
            country: Yup.string().required('What is your Country?'),
            zip: Yup.string()
                .min(3, 'Must be more than 3 characters')
                .required('What is your Zip/Postal Code?'),
            shipping: Yup.string().required('Choose your delivery method'),
        }),
        onSubmit: (values) => {
            const { firstName, lastName, city, address, country, shipping, phoneNumber, zip } =
                values;
            const order = {
                deliveryAddress: {
                    country,
                    city,
                    address,
                    postal: zip,
                },
                status: 'not shipped',
                email: 'saribeg@gmail.com',
                mobile: phoneNumber,
                firstName,
                lastName,
                shipping,
            };
            console.log(order);
        },
    });
    return (
        <>
            <form
                className={formStyle.form_section}
                onSubmit={formik.handleSubmit}
                id="shippingForm"
            >
                <h2 className={formStyle.shipping_title}>Shipping Details</h2>
                <div className={formStyle.form}>
                    <div className={formStyle.inputs_wrapper}>
                        <div className={formStyle.input_wrapper}>
                            <div className={formStyle.input}>
                                <label htmlFor="firstName" className={formStyle.form_label}>
                                    {formik.errors.firstName && formik.touched.firstName ? (
                                        <p className={formStyle.red}>{formik.errors.firstName}</p>
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
                                <div className="form-outline">
                                    <label htmlFor="lastName" className={formStyle.form_label}>
                                        {formik.errors.lastName && formik.touched.lastName ? (
                                            <p className={formStyle.red}>
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
                        </div>
                        <div className={formStyle.input}>
                            <label htmlFor="city" className={formStyle.form_label}>
                                {formik.errors.address && formik.touched.address ? (
                                    <p className={formStyle.red}>{formik.errors.address}</p>
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
                                placeholder={
                                    formik.errors.address && formik.touched.address
                                        ? 'What is your Address?'
                                        : 'Address'
                                }
                            />
                        </div>
                        <div className={formStyle.input}>
                            <label htmlFor="email" className={formStyle.form_label}>
                                {formik.errors.email && formik.touched.email ? (
                                    <p className={formStyle.red}>{formik.errors.email}</p>
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
                        <div className={formStyle.input_wrapper}>
                            <div className={formStyle.select_wrapper}>
                                <label htmlFor="country" className={formStyle.form_label}>
                                    {formik.errors.country && formik.touched.country ? (
                                        <p className={formStyle.red}>{formik.errors.country}</p>
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
                                <label htmlFor="city" className={formStyle.form_label}>
                                    {formik.errors.city && formik.touched.city ? (
                                        <p className={formStyle.red}>{formik.errors.city}</p>
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
                        <div className={formStyle.input_wrapper}>
                            <div className={formStyle.input}>
                                <label htmlFor="zip" className={formStyle.form_label}>
                                    {formik.errors.zip && formik.touched.zip ? (
                                        <p className={formStyle.red}>{formik.errors.zip}</p>
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
                                <div className="form-outline">
                                    <label htmlFor="phoneNumber" className={formStyle.form_label}>
                                        {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                                            <p className={formStyle.red}>
                                                {formik.errors.phoneNumber}
                                            </p>
                                        ) : null}
                                    </label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.phoneNumber}
                                        id="phoneNumber"
                                        className={formStyle.input_area}
                                        placeholder={'Phone Number'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={formStyle.checkbox_wrapper}>
                        <label className={formStyle.radio_btn_wrapper} id="radio_wrapper">
                            <input
                                className={formStyle.radio_btn}
                                type="radio"
                                name="shipping"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value="FreeShipping"
                                id="radio_wrapper"
                                defaultChecked={true}
                            />
                            <div className={formStyle.btn_text_wrapper}>
                                <h2 className={formStyle.checkbox_title}>Free Shipping</h2>
                                <p className={formStyle.checkbox_text}>Between 2-5 working days</p>
                            </div>
                        </label>
                        <label className={formStyle.radio_btn_wrapper}>
                            <input
                                className={formStyle.radio_btn}
                                type="radio"
                                name="shipping"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value="PayDelivery"
                                id="radio_wrapper"
                            />
                            <div className={formStyle.btn_text_wrapper}>
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
