import React, { useState, useEffect } from 'react';
import styles from './Reviews.module.scss';
import Button from 'components/Button';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';
import { useFormik } from 'formik';
import addNewComment from 'api/addNewComment';
import getAllCommentsOfSpecificProduct from 'api/getAllCommentsOfSpecificProduct';
import userAvatar from './img/UserAvatar.png';
import deleteComment from 'api/deleteComment';
import updateComment from 'api/updateComment';
import * as Yup from 'yup';
import jwt_decode from 'jwt-decode';
import classNames from 'classnames';
import { Comment } from 'react-loader-spinner';

const Reviews = ({ product }) => {
    const isLogIn = useSelector((state) => state.store.login.isLogIn, shallowEqual);
    const tokenSting = useSelector((state) => state.store.login.token, shallowEqual);
    const [isLoaded, setIsLoaded] = useState(false);

    const [reviews, setReviews] = useState([]);
    const [reviewsFormVisible, setReviewsFormVisible] = useState(false);
    const [, token] = tokenSting.split(' ');
    const decodedToken = token ? jwt_decode(token) : '';
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    useEffect(() => {
        if (product._id) {
            getAllCommentsOfSpecificProduct(product._id).then((res) => {
                if (res.data) {
                    const data = res.data.map((review) => ({ ...review, edited: false }));
                    setReviews(data.reverse());
                }
                setTimeout(() => {
                    setIsLoaded(true);
                }, 1000);
            });
        }
    }, [product._id]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            product: product._id ? product._id : '',
            content: '',
        },
        validationSchema: Yup.object({
            product: Yup.string(),
            content: Yup.string()
                .max(300, 'Must be 300 characters or less')
                .min(10, 'Must be 10 characters or more')
                .required('Required'),
        }),
        onSubmit: (values) => {
            setIsLoaded(false);
            addNewComment(values).then(() => {
                getAllCommentsOfSpecificProduct(product._id).then((res) => {
                    const data = res.data.map((review) => ({ ...review, edited: false }));
                    setReviews(data.reverse());
                });
                formik.resetForm({
                    values: {
                        product: product._id ? product._id : '',
                        content: '',
                    },
                });
                setReviewsFormVisible(false);
                setIsLoaded(true);
            });
        },
    });
    const formikEdit = useFormik({
        initialValues: {
            commentId: '',
            content: '',
        },
        validationSchema: Yup.object({
            commentId: Yup.string(),
            content: Yup.string()
                .max(300, 'Must be 300 characters or less')
                .min(10, 'Must be 10 characters or more')
                .required('Required'),
        }),
        onSubmit: (values) => {
            setIsLoaded(false);
            updateComment({ content: values.content }, values.commentId).then(() => {
                getAllCommentsOfSpecificProduct(product._id).then((res) => {
                    const data = res.data.map((review) => ({ ...review, edited: false }));
                    setReviews(data.reverse());
                    setIsLoaded(true);
                });
            });
        },
    });
    if (!isLoaded) {
        return (
            <div className={styles.commentLoader}>
                <Comment
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="comment-loading"
                    wrapperStyle={{}}
                    wrapperClass="comment-wrapper"
                    color="#fff"
                    backgroundColor="#373f41"
                />
            </div>
        );
    }
    return (
        <div className={styles.reviews}>
            {isLogIn ? (
                <>
                    {reviewsFormVisible ? (
                        <form onSubmit={formik.handleSubmit} className={styles.reviewsForm}>
                            <input name="product" type="hidden" value={formik.values.product} />
                            <label className={styles.reviewsLabel} htmlFor="content">
                                add your review
                            </label>
                            {formik.touched.content && formik.errors.content ? (
                                <div className={styles.reviewsError}>{formik.errors.content}</div>
                            ) : null}
                            <textarea
                                id="content"
                                name="content"
                                className={styles.reviewsTextArea}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.content}
                                placeholder="Your review..."
                            ></textarea>
                            <button type="submit" className={styles.reviewsSubmitBtn}>
                                Add review
                            </button>
                        </form>
                    ) : (
                        <div className={styles.reviewsAddInfo}>
                            <p className={styles.reviewsAddInfoMessage}>You can add your review</p>
                            <Button
                                handleClick={() => setReviewsFormVisible(true)}
                                className={styles.reviewsAddInfoBtn}
                                text="Add review"
                            />
                        </div>
                    )}
                </>
            ) : (
                <p className={styles.reviewsUnauthorised}>To add your review you should log in</p>
            )}
            {reviews.length > 0 ? (
                <div className={styles.reviewsMessages}>
                    {reviews.map((review) => {
                        const date = new Date(review.date);
                        const day = date.getDate();
                        const month = date.getMonth();
                        const year = date.getFullYear();
                        return (
                            <div className={styles.reviewsMessage} key={review._id}>
                                {!review.edited ? (
                                    <div className={styles.reviewsMessageContent}>
                                        <div className={styles.reviewsMessageTop}>
                                            <div className={styles.reviewsMessageTopLeft}>
                                                <span
                                                    className={styles.reviewsMessageAvatar}
                                                    src={
                                                        review.customer.avatarUrl
                                                            ? review.customer.avatarUrl
                                                            : userAvatar
                                                    }
                                                    style={{
                                                        backgroundImage: `url(${
                                                            review.customer.avatarUrl
                                                                ? review.customer.avatarUrl
                                                                : userAvatar
                                                        })`,
                                                    }}
                                                ></span>
                                                <span
                                                    className={
                                                        review.customer.isAdmin
                                                            ? styles.reviewsMessageAdmin
                                                            : ''
                                                    }
                                                >{`${review.customer.firstName} ${review.customer.lastName}`}</span>
                                            </div>
                                            <div className={styles.reviewsMessageTopRight}>
                                                {decodedToken.id === review.customer._id && (
                                                    <Button
                                                        className={styles.reviewsMessageBtnEdit}
                                                        handleClick={() => {
                                                            formikEdit.setValues({
                                                                commentId: review._id,
                                                                content: review.content,
                                                            });
                                                            setReviews((prev) => {
                                                                const dataEdit = [...prev];
                                                                const data = dataEdit.map(
                                                                    (element) => ({
                                                                        ...element,
                                                                        edited: false,
                                                                    }),
                                                                );
                                                                const index = prev.findIndex(
                                                                    (elem) =>
                                                                        elem._id === review._id,
                                                                );
                                                                data[index].edited = true;
                                                                return data;
                                                            });
                                                        }}
                                                        text={<Icon type="edit-small" />}
                                                    />
                                                )}
                                                <span>
                                                    {day} {months[month]} {year}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={styles.reviewsMessageBottom}>
                                            {review.content}
                                            {(decodedToken.isAdmin ||
                                                decodedToken.id === review.customer._id) && (
                                                <Button
                                                    className={styles.reviewsMessageBtnDelete}
                                                    handleClick={() => {
                                                        setIsLoaded(false);
                                                        deleteComment(review._id).then(() => {
                                                            getAllCommentsOfSpecificProduct(
                                                                product._id,
                                                            ).then((res) => {
                                                                if (res.data) {
                                                                    const data = res.data.map(
                                                                        (review) => ({
                                                                            ...review,
                                                                            edited: false,
                                                                        }),
                                                                    );
                                                                    setReviews(data.reverse());
                                                                    setIsLoaded(true);
                                                                } else {
                                                                    setReviews([]);
                                                                }
                                                            });
                                                        });
                                                    }}
                                                    text={<Icon type="delete" />}
                                                />
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <form
                                        onSubmit={formikEdit.handleSubmit}
                                        className={classNames(
                                            styles.reviewsForm,
                                            styles.reviewsFormEdit,
                                        )}
                                    >
                                        <input
                                            name="commentId"
                                            type="hidden"
                                            value={formikEdit.values.commentId}
                                        />
                                        <label className={styles.reviewsLabel} htmlFor="content">
                                            edit your review
                                        </label>
                                        {formikEdit.touched.content && formikEdit.errors.content ? (
                                            <div className={styles.reviewsError}>
                                                {formikEdit.errors.content}
                                            </div>
                                        ) : null}
                                        <textarea
                                            id="content"
                                            name="content"
                                            className={styles.reviewsTextArea}
                                            onChange={formikEdit.handleChange}
                                            onBlur={formikEdit.handleBlur}
                                            value={formikEdit.values.content}
                                        ></textarea>
                                        <button type="submit" className={styles.reviewsSubmitBtn}>
                                            Edit review
                                        </button>
                                    </form>
                                )}
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p className={styles.reviewsNoReviews}>Currently this product has no reviews</p>
            )}
        </div>
    );
};

export default Reviews;

Reviews.propTypes = {
    product: PropTypes.object,
};

Reviews.defaultProps = {
    product: {},
};
