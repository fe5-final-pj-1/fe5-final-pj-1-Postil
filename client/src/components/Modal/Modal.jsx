import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './Modal.module.scss';
import Button from '../Button';
import Icon from '../Icon';
import { hideModal } from '../../store/modalSlice';
import { useDispatch } from 'react-redux';
import loginCustomer from '../../api/loginCustomer';
import createCustomer from '../../api/createCustomer';

function Modal() {
    const dispatch = useDispatch();
    const [sign, setSign] = useState(true);
    const EMAIL_REGEX =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const NAME_REGEX = /^[a-z ,.'-]+$/i;
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            agree: false,
        },
        validationSchema: Yup.object(
            sign
                ? {
                      name: Yup.string()
                          .matches(NAME_REGEX, 'No valid symbols')
                          .required('Required'),
                      email: Yup.string()
                          .matches(EMAIL_REGEX, 'No valid email address')
                          .required('Required'),
                      password: Yup.string()
                          .min(7, 'Password must be between 7 and 30 characters')
                          .max(30, 'Password must be between 7 and 30 characters')
                          .required('Required'),
                      confirmPassword: Yup.string()
                          .oneOf([Yup.ref('password'), null], "Password doesn't match")
                          .min(7, 'Password must be between 7 and 30 characters')
                          .max(30, 'Password must be between 7 and 30 characters')
                          .required('Required'),
                      agree: Yup.boolean(),
                  }
                : {
                      email: Yup.string()
                          .matches(EMAIL_REGEX, 'No valid email address')
                          .required('Required'),
                      password: Yup.string().required('Required'),
                      agree: Yup.boolean(),
                  },
        ),
        onSubmit: (values) => {
            const { name, email, password } = values;
            const [firstName, lastName] = name.split(' ');
            const login = name.split(' ').join('').slice(0, 9);
            sign
                ? createCustomer({
                      firstName,
                      lastName: lastName ? lastName : '',
                      login,
                      email,
                      password,
                  }).then((res) => console.log(res.data))
                : loginCustomer({ loginOrEmail: email, password: password }).then((res) =>
                      console.log(res.data),
                  );
            dispatch(hideModal());
        },
    });
    return (
        <>
            <div className={styles.bg} onClick={() => dispatch(hideModal())}>
                <div className={styles.container} onClick={(event) => event.stopPropagation()}>
                    <Button
                        className={styles.close}
                        text={<Icon type="close" />}
                        handleClick={() => dispatch(hideModal())}
                    />
                    <div className={styles.btnsLogin}>
                        <Button
                            handleClick={() => setSign(true)}
                            className={sign ? styles.active : ''}
                            text="SIGN UP"
                        />
                        <Button
                            handleClick={() => setSign(false)}
                            className={sign ? '' : styles.active}
                            text="LOG IN"
                        />
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={styles.valuesInputs}>
                            {sign && (
                                <label>
                                    {formik.touched.name && formik.errors.name ? (
                                        <p className={styles.error}>{formik.errors.name}</p>
                                    ) : null}
                                    <input
                                        type="text"
                                        placeholder="Name *"
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </label>
                            )}
                            <label>
                                {formik.touched.email && formik.errors.email ? (
                                    <p className={styles.error}>{formik.errors.email}</p>
                                ) : null}

                                <input
                                    type="text"
                                    placeholder="Email *"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </label>
                            <label>
                                {formik.touched.password && formik.errors.password ? (
                                    <p className={styles.error}>{formik.errors.password}</p>
                                ) : null}

                                <input
                                    type="password"
                                    placeholder="Password *"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </label>
                            {sign && (
                                <label>
                                    {formik.touched.confirmPassword &&
                                    formik.errors.confirmPassword ? (
                                        <p className={styles.error}>
                                            {formik.errors.confirmPassword}
                                        </p>
                                    ) : null}

                                    <input
                                        type="password"
                                        placeholder="Confirm Password *"
                                        name="confirmPassword"
                                        value={formik.values.confirmPassword}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </label>
                            )}
                        </div>
                        <label className={styles.checkbox}>
                            <input
                                type="checkbox"
                                name="agree"
                                value={formik.values.agree}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <p>
                                {
                                    "Let's get personal! We'll send you only the good stuff: Exclusive early access to Sale, new arrivals and promotions. No nasties."
                                }
                            </p>
                        </label>
                        <p className={styles.termsPolicy}>
                            By signing up you agree to{' '}
                            <Link to="/terms&policy">Terms of Service</Link> and{' '}
                            <Link to="/terms&policy">Privacy Policy</Link>
                        </p>
                        <input type="submit" value={sign ? 'SIGN UP' : 'LOG IN'} />
                    </form>
                    {sign && (
                        <div className={styles.social}>
                            <Icon type="google" />
                            <Icon type="facebook" />
                        </div>
                    )}
                    {sign ? (
                        <Button handleClick={() => setSign(false)} text="I HAVE AN ACCOUNT" />
                    ) : (
                        <Button text="FORGOT PASSWORD?" />
                    )}
                </div>
            </div>
        </>
    );
}

export default Modal;
