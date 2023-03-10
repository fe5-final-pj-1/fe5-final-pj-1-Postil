import { useFormik } from 'formik';
import * as Yup from 'yup';
import formStyle from './Form.module.scss';
import React from 'react';
function Form() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            address2: '',
            city: '',
            zip: '',
            pay1: 'type2',
            country: '',
        },

        validationSchema: Yup.object({
            firstName: Yup.string().required('What is your name?'),
            lastName: Yup.string().required('What is your surname?'),
            phoneNumber: Yup.number().required('What is your phone number?'),
            address: Yup.string().required('What is your delivery address?'),
            city: Yup.string().required('What is your city?'),
            country: Yup.string().required('What is your Country?'),
            zip: Yup.string().required('What is your Zip/Postal Code?'),
            pay1: Yup.string().required('Choose your delivery method'),
        }),
        onSubmit: (values) => {
            const { firstName, lastName, city, address, country, pay1, phoneNumber, zip } = values;
            //             console.log(
            //                 `Name: ${values.firstName}
            // Surname: ${values.lastName}
            // Address: ${values.address}
            // City: ${values.city}
            // Country: ${values.country}
            // Payment Method: ${values.pay1}
            // Phone Number: ${values.phoneNumber}
            // Zip: ${values.zip}`,
            //             );
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
                shipping: pay1,
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
                                <input
                                    type="text"
                                    name="firstName"
                                    id="form3Example1"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formStyle.input_area}
                                    placeholder={
                                        formik.errors.firstName && formik.touched.firstName
                                            ? 'What is your name?'
                                            : 'First name'
                                    }
                                />
                            </div>
                            <div className={formStyle.input}>
                                <div className="form-outline">
                                    <input
                                        type="text"
                                        name="lastName"
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName}
                                        onBlur={formik.handleBlur}
                                        id="form3Example2"
                                        className={formStyle.input_area}
                                        placeholder={
                                            formik.errors.lastName && formik.touched.lastName
                                                ? 'What is your surname?'
                                                : 'Last Name'
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={formStyle.input}>
                            <input
                                type="textarea"
                                name="address"
                                id="form3Example3"
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
                            <input
                                type="textarea"
                                name="address2"
                                id="form3Example3"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.address2}
                                className={formStyle.input_area}
                                placeholder={
                                    formik.errors.address2 && formik.touched.address2
                                        ? 'What is your Address 2?'
                                        : 'Address 2 *' // email
                                }
                            />
                        </div>
                        <div className={formStyle.input_wrapper}>
                            <div className={formStyle.select_wrapper}>
                                <select
                                    id="country"
                                    className={formStyle.select}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                >
                                    <option>Select Country</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="Poland">Poland</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                    <option value="USA">USA</option>
                                    <option value="Italy">Italy</option>
                                </select>
                            </div>
                            <div className={formStyle.input}>
                                <input
                                    type="textarea"
                                    name="city"
                                    id="form3Example3"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.city}
                                    className={formStyle.input_area}
                                    placeholder={
                                        formik.errors.city && formik.touched.city
                                            ? 'What is your city?'
                                            : 'City'
                                    }
                                />
                            </div>
                        </div>
                        <div className={formStyle.input_wrapper}>
                            <div className={formStyle.input}>
                                <input
                                    type="textarea"
                                    name="zip"
                                    id="form3Example3"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.zip}
                                    className={formStyle.input_area}
                                    placeholder={
                                        formik.errors.zip && formik.touched.zip
                                            ? 'What is your Zip/Postal Code?'
                                            : 'Zip/Postal Code'
                                    }
                                />
                            </div>
                            <div className={formStyle.input}>
                                <div className="form-outline">
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.phoneNumber}
                                        id="form3Example2"
                                        className={formStyle.input_area}
                                        placeholder={
                                            formik.errors.phoneNumber && formik.touched.phoneNumber
                                                ? 'What is your phone number?'
                                                : 'Phone Number'
                                        }
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
                                name="pay1"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value="type1"
                                id="form2Example33"
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
                                name="pay1"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value="type2"
                                id="form2Example34"
                                defaultChecked={true}
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
            <button type="submit" form="shippingForm">
                submit
            </button>
        </>
    );
}

export default Form;
