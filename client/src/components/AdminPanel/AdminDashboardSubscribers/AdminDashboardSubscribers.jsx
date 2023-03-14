import React, { useState, useEffect } from 'react';
import getAllSubscribers from 'api/getAllSubscribers';
import { useFormik } from 'formik';
import Button from 'components/Button';
import Icon from 'components/Icon';
import * as Yup from 'yup';
import adminPanelStyles from './AdminDashboardSubscribers.module.scss';
import { Oval } from 'react-loader-spinner';

function AdminDashboardSubscribers() {
    // eslint-disable-next-line no-unused-vars
    const [subscribers, setSubscribers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        getAllSubscribers().then((res) => {
            console.log(res.data);
            setSubscribers(res.data);
            setIsLoaded(true);
        });
    }, []);
    const formik = useFormik({
        initialValues: {
            letterSubject: '',
            letterHtml: '',
        },
        validationSchema: Yup.object({
            letterSubject: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .min(5, 'Must be 5 characters or more')
                .required('Required'),
            letterHtml: Yup.string().min(10, 'Must be 10 characters or more').required('Required'),
        }),
        onSubmit: (values) => {
            console.log(values);
            // setIsLoaded(false);
            // addNewSlide(values).then(() => {
            //     getAllSlides().then((slides) => {
            //         setPromotions(slides.data);
            //         setIsLoaded(true);
            //     });
            // });
        },
    });
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
        <div className={adminPanelStyles.subscribersWrapper}>
            <div className={adminPanelStyles.subscribersLeft}>
                <form onSubmit={formik.handleSubmit} className={adminPanelStyles.subscribersForm}>
                    <label className={adminPanelStyles.subscribersLabel} htmlFor="letterSubject">
                        add letter subject
                    </label>
                    {formik.touched.letterSubject && formik.errors.letterSubject ? (
                        <div className={adminPanelStyles.subscribersError}>
                            {formik.errors.letterSubject}
                        </div>
                    ) : null}
                    <input
                        id="letterSubject"
                        name="letterSubject"
                        type="text"
                        className={adminPanelStyles.subscribersInput}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.letterSubject}
                        autoComplete="off"
                        placeholder="Letter subject"
                    />
                    <label className={adminPanelStyles.subscribersLabel} htmlFor="letterHtml">
                        add letter text
                    </label>
                    {formik.touched.letterHtml && formik.errors.letterHtml ? (
                        <div className={adminPanelStyles.subscribersError}>
                            {formik.errors.letterHtml}
                        </div>
                    ) : null}
                    <textarea
                        id="letterHtml"
                        name="letterHtml"
                        className={adminPanelStyles.subscribersTextArea}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.letterHtml}
                        placeholder="Letter some dummy text..."
                    ></textarea>
                    <div className={adminPanelStyles.subscribersButtons}>
                        <button type="submit" className={adminPanelStyles.subscribersSubmitBtn}>
                            Send letter
                        </button>
                        <button
                            onClick={() =>
                                formik.resetForm({
                                    values: {
                                        letterSubject: '',
                                        letterHtml: '',
                                    },
                                })
                            }
                            type="reset"
                            className={adminPanelStyles.subscribersResetBtn}
                        >
                            Reset Changes
                        </button>
                    </div>
                </form>
            </div>
            <table className={adminPanelStyles.subscribersRight}>
                <tr>
                    <th>email</th>
                    <th>delete</th>
                </tr>
                {subscribers.map((subscriber) => {
                    return (
                        <tr className={adminPanelStyles.subscribersData} key={subscriber._id}>
                            <td>{subscriber.email}</td>
                            <td>
                                <Button
                                    handleClick={() => {
                                        // setIsLoaded(false);
                                        // deleteSpecificSlide(promotion.customId).then(() => {
                                        //     getAllSlides().then((slides) => {
                                        //         setPromotions(slides.data);
                                        //         setIsLoaded(true);
                                        //     });
                                        // });
                                    }}
                                    text={<Icon type="delete" />}
                                    className={adminPanelStyles.subscribersRemoveBtn}
                                />
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default AdminDashboardSubscribers;
