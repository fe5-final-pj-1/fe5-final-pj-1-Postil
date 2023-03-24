import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import classNames from 'classnames';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import getCustomerComments from 'api/getCustomerComments';
import styles from './UserReviewsPage.module.scss';
import Button from 'components/Button';
import Icon from 'components/Icon';
import { Oval } from 'react-loader-spinner';
import deleteComment from 'api/deleteComment';

function UserReviewsPage() {
    const tokenSting = useSelector((state) => state.store.login.token, shallowEqual);
    const [, token] = tokenSting.split(' ');
    const decodedToken = token ? jwt_decode(token) : '';
    const [reviews, setReviews] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
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
        getCustomerComments(decodedToken.id).then((res) => {
            if (res) setReviews(res.data);
            setIsLoaded(true);
        });
    }, [decodedToken.id]);
    if (!isLoaded) {
        return (
            <Oval
                height={130}
                width={130}
                color="#373F41"
                wrapperStyle={{}}
                wrapperClass={styles.loader}
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        );
    }
    return (
        <>
            <main className={styles.container}>
                <h1 className={classNames(styles.title, 'h2')}>My Reviwes</h1>
                {!reviews.length && <h2 className={styles.noReviews}>No reviews</h2>}
                <div className={styles.reviewsWrapper}>
                    {[...reviews].reverse().map((review) => {
                        const date = new Date(review.date);
                        const dateNow = Date.now();
                        const time = date.getTime();
                        const isNew = dateNow - time > 7200000 ? false : true;
                        const day = date.getDate();
                        const month = date.getMonth();
                        const year = date.getFullYear();
                        return (
                            <div className={styles.reviewsContainer} key={review._id}>
                                <div className={styles.reviewsProductImage}>
                                    <Link to={`/catalog/${review.product._id}`}>
                                        <img
                                            src={review.product.imageUrls[0]}
                                            alt={`Product ${review.product._id}`}
                                        />
                                    </Link>
                                </div>
                                <div>
                                    <p className={styles.reviewsProductName}>
                                        <Link to={`/catalog/${review.product._id}`}>
                                            {review.product.name}
                                        </Link>
                                    </p>
                                    <div className={styles.reviewsComment}>
                                        <p
                                            className={
                                                review.customer.isAdmin
                                                    ? classNames(
                                                          styles.reviewsCommentName,
                                                          styles.reviewsCommentNameAdmin,
                                                      )
                                                    : styles.reviewsCommentName
                                            }
                                        >
                                            {review.customer.firstName} {review.customer.lastName}
                                        </p>
                                        <p className={styles.reviewsCommentText}>
                                            {review.content}
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.reviewsInfo}>
                                    {isNew ? (
                                        <div className={styles.reviewsNew}>New</div>
                                    ) : (
                                        <div className={styles.reviewsDate}>
                                            {day} {months[month]} {year}
                                        </div>
                                    )}
                                    <Button
                                        className={styles.reviewsBtnDelete}
                                        handleClick={() => {
                                            setIsLoaded(false);
                                            deleteComment(review._id).then(() => {
                                                getCustomerComments(decodedToken.id).then((res) => {
                                                    if (res.data) {
                                                        setReviews(res.data);
                                                        setIsLoaded(true);
                                                    } else {
                                                        setReviews([]);
                                                    }
                                                });
                                            });
                                        }}
                                        text={<Icon type="delete" />}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </>
    );
}

export default UserReviewsPage;
