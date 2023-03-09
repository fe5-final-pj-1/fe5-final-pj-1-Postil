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
            age: false,
        },

        validationSchema: Yup.object({
            firstName: Yup.string().required('What is your name?'),
            lastName: Yup.string().required('What is your surname?'),

            phoneNumber: Yup.number()
                .required('What is your phone number?')
                .matches(phoneRegExp, 'Phone number is not valid'),

            address: Yup.string().required('What is your delivery address?'),
            address2: Yup.string().required('What is your delivery address2?'),
            city: Yup.string().required('What is your city?'),
            zip: Yup.string().required('What is your Zip/Postal Code?'),

            age: Yup.boolean().oneOf([true], 'You can not buy it until 18 years old :('),
        }),
        // onSubmit: (values) => {
        //     if (props.cart.length === 0) {
        //         console.log('There is nothing to buy :(');
        //     } else {
        //         console.log(
        //             'User Info:' +
        //                 ' ' +
        //                 values.firstName +
        //                 ' ' +
        //                 values.lastName +
        //                 ', ' +
        //                 values.phoneNumber +
        //                 ', ' +
        //                 values.address,
        //         );
        //     }
        // },
    });
    return (
        <form className={formStyle.form_section} onSubmit={formik.handleSubmit}>
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
                                    : 'Address 2'
                            }
                        />
                    </div>
                    <div className={formStyle.input_wrapper}>
                        <div className={formStyle.select_wrapper}>
                            <select className={formStyle.select}>
                                <option>Select Country</option>
                                <option>Ukraine</option>
                                <option>Poland</option>
                                <option>France</option>
                                <option>Germany</option>
                                <option>USA</option>
                                <option>Italy</option>
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
                                        : 'Zip'
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
                    <div className="form-check d-flex justify-content-center mb-4">
                        <input
                            className="form-check-input me-2"
                            type="checkbox"
                            name="age"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.age}
                            id="form2Example33"
                        />
                        <label className="form-check-label" htmlFor="form2Example33">
                            {formik.errors.age && formik.touched.age ? (
                                <p className="red">{formik.errors.age}</p>
                            ) : (
                                <p>Free Shipping</p>
                            )}
                        </label>
                    </div>
                    <div className="form-check d-flex justify-content-center mb-4">
                        <input
                            className="form-check-input me-2"
                            type="checkbox"
                            name="age"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.age}
                            id="form2Example33"
                        />
                        <label className="form-check-label" htmlFor="form2Example33">
                            {formik.errors.age && formik.touched.age ? (
                                <p className="red">{formik.errors.age}</p>
                            ) : (
                                <p>Next Day Delivery</p>
                            )}
                        </label>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;
