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
            age: false,
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('What is your name?'),
            lastName: Yup.string().required('What is your surname?'),

            phoneNumber: Yup.number().required('What is your phone number?'),

            address: Yup.string().required('What is your delivery address?'),
            address2: Yup.string().required('What is your delivery address2?'),

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
        <form onSubmit={formik.handleSubmit}>
            <div className="container">
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
                                    placeholder="First Name"
                                />
                                <label className="form-label" htmlFor="form3Example1">
                                    {formik.errors.firstName && formik.touched.firstName ? (
                                        <p className={formStyle.red}>{formik.errors.firstName}</p>
                                    ) : null}
                                </label>
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
                            />
                            <label className="form-label" htmlFor="form3Example3">
                                {formik.errors.address && formik.touched.address ? (
                                    <p className="red">{formik.errors.address}</p>
                                ) : (
                                    <p>Address</p>
                                )}
                            </label>
                        </div>
                        <div className={formStyle.input}>
                            <input
                                type="textarea"
                                name="address2"
                                id="form3Example3"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.address}
                                className={formStyle.input_area}
                            />
                            <label className="form-label" htmlFor="form3Example3">
                                {formik.errors.address && formik.touched.address ? (
                                    <p className="red">{formik.errors.address}</p>
                                ) : (
                                    <p>Address 2</p>
                                )}
                            </label>
                        </div>
                        <div className={formStyle.input_wrapper}>
                            <div className={formStyle.input}>
                                <select name="Country" id="">
                                    <option value="">Country</option>
                                    <option value="">Ukraine</option>
                                    <option value="">Poland</option>
                                    <option value="">France</option>
                                    <option value="">Germany</option>
                                    <option value="">USA</option>
                                    <option value="">Italy</option>
                                </select>
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
                                />
                                <label className="form-label" htmlFor="form3Example3">
                                    {formik.errors.address && formik.touched.address ? (
                                        <p className="red">{formik.errors.address}</p>
                                    ) : (
                                        <p>City</p>
                                    )}
                                </label>
                            </div>
                        </div>
                        <div className={formStyle.input_wrapper}>
                            <div className={formStyle.input}>
                                <input
                                    type="textarea"
                                    name="address2"
                                    id="form3Example3"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.address}
                                    className={formStyle.input_area}
                                />
                                <label className="form-label" htmlFor="form3Example3">
                                    {formik.errors.address && formik.touched.address ? (
                                        <p className="red">{formik.errors.address}</p>
                                    ) : (
                                        <p>Zip/Postal Code</p>
                                    )}
                                </label>
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
                                    />

                                    <label className="form-label">
                                        {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                                            <p className="red">{formik.errors.phoneNumber}</p>
                                        ) : (
                                            <p>Phone Number</p>
                                        )}
                                    </label>
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
            </div>
        </form>
    );
}

export default Form;
