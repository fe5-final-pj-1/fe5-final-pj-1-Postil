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
import { userLogIn } from '../../store/loginSlice';
import addSubscriber from 'api/addSubscriber';

function Modal() {
    const [signInError, setSignInError] = useState('');
    const [logInError, setLogInError] = useState('');
    const dispatch = useDispatch();
    const [sign, setSign] = useState(false);
    const EMAIL_REGEX =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const NAME_REGEX = /^[a-z ,.'-]+$/i;
    const loginGenerator = () => {
        let abc = 'abcdefghijklmnopqrstuvwxyz';
        let login = '';
        while (login.length < 9) {
            login += abc[Math.floor(Math.random() * abc.length)];
        }
        return login;
    };
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            subscribe: false,
        },
        validationSchema: Yup.object(
            sign
                ? {
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
                      subscribe: Yup.boolean(),
                  }
                : {
                      email: Yup.string()
                          .matches(EMAIL_REGEX, 'No valid email address')
                          .required('Required'),
                      password: Yup.string().required('Required'),
                      subscribe: Yup.boolean(),
                  },
        ),
        onSubmit: (values) => {
            const { firstName, lastName, email, password, subscribe } = values;
            const login = loginGenerator();
            sign
                ? createCustomer({
                      firstName,
                      lastName,
                      login,
                      email,
                      password,
                  }).then((res) => {
                      if (res) {
                          loginCustomer({ loginOrEmail: email, password: password }).then((res) => {
                              const token = res.data.token;
                              dispatch(userLogIn(token));
                              dispatch(hideModal());
                              if (subscribe) {
                                  const newSubscriber = {
                                      email: email,
                                      letterSubject: 'Greetings from Postil team',
                                      letterHtml:
                                          "<!DOCTYPE html><html lang='en'> <head> <meta charset='UTF-8' /> <meta name='viewport' content='width=device-width, initial-scale=1.0' /> <meta http-equiv='X-UA-Compatible' content='ie=edge' /> <title>Document</title> <style> p { margin-top:10px; } </style> </head> <body> <h2>Thank you for subscribe!</h2> <p>We will send you only actual info.</p> </body></html>",
                                  };
                                  addSubscriber(newSubscriber);
                              }
                          });
                      } else {
                          setSignInError(`Email ${email} already exists`);
                          setTimeout(() => setSignInError(''), 3000);
                      }
                  })
                : loginCustomer({ loginOrEmail: email, password: password }).then((res) => {
                      if (res) {
                          const token = res.data.token;
                          dispatch(userLogIn(token));
                          dispatch(hideModal());
                      } else {
                          setLogInError('Incorect password or email');
                          setTimeout(() => setLogInError(''), 3000);
                      }
                  });
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
                    {!sign && logInError && <p className={styles.logInError}>{logInError}</p>}
                    <form onSubmit={formik.handleSubmit}>
                        <div className={styles.valuesInputs}>
                            {sign && (
                                <label>
                                    {formik.touched.firstName && formik.errors.firstName ? (
                                        <p className={styles.error}>{formik.errors.firstName}</p>
                                    ) : null}
                                    <input
                                        type="text"
                                        placeholder="First Name *"
                                        name="firstName"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </label>
                            )}
                            {sign && (
                                <label>
                                    {formik.touched.lastName && formik.errors.lastName ? (
                                        <p className={styles.error}>{formik.errors.lastName}</p>
                                    ) : null}
                                    <input
                                        type="text"
                                        placeholder="Last Name *"
                                        name="lastName"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </label>
                            )}
                            <label>
                                {formik.touched.email && formik.errors.email ? (
                                    <p className={styles.error}>{formik.errors.email}</p>
                                ) : null}
                                {signInError && <p className={styles.error}>{signInError}</p>}

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
                        {sign && (
                            <label className={styles.checkbox}>
                                <input
                                    type="checkbox"
                                    name="subscribe"
                                    value={formik.values.subscribe}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <p>
                                    {
                                        "Let's get personal! We'll send you only the good stuff: Exclusive early access to Sale, new arrivals and promotions. No nasties."
                                    }
                                </p>
                            </label>
                        )}
                        <p className={styles.termsPolicy}>
                            By signing up you agree to{' '}
                            <Link to="/terms&policy">Terms of Service</Link> and{' '}
                            <Link to="/terms&policy">Privacy Policy</Link>
                        </p>
                        <Button type="submit" text={sign ? 'SIGN UP' : 'LOG IN'} />
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
