import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import classNames from 'classnames';
// eslint-disable-next-line no-unused-vars
import Button from 'components/Button';
// eslint-disable-next-line no-unused-vars
import Icon from 'components/Icon';
import adminPanelStyles from './AdminDashboardReviews.module.scss';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import getLimitedComments from 'api/getLimitedComments';
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line no-unused-vars
import deleteComment from 'api/deleteComment';
// eslint-disable-next-line no-unused-vars
import { Oval, ThreeDots } from 'react-loader-spinner';

function AdminDashboardReviews() {
    const [reviews, setReviews] = useState([]);
    const [startPage, setStartPage] = useState(1);
    const { ref, inView } = useInView({
        threshold: 1,
    });
    // eslint-disable-next-line no-unused-vars
    const [isLoaded, setIsLoaded] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [isReviewsUpload, setIsReviewsUpload] = useState(true);
    // eslint-disable-next-line no-unused-vars
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
        if (inView) {
            loadMoreComments();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    const loadMoreComments = () => {
        setIsReviewsUpload(false);
        setTimeout(() => {
            getLimitedComments(startPage, 10).then((res) => {
                setReviews((prevReviews) => {
                    setIsLoaded(true);
                    setIsReviewsUpload(true);
                    return [...prevReviews, ...res.data];
                });
                setStartPage((prevStartPage) => prevStartPage + 1);
            });
        }, 300);
    };

    return (
        <div className={adminPanelStyles.reviews}>
            <div className={adminPanelStyles.reviewsWrapper}>
                {reviews.length === 0 && <div ref={ref}></div>}
                {!isLoaded && (
                    <div className={adminPanelStyles.loaderContainer}>
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
                    </div>
                )}
                {[...reviews].map((review, index) => {
                    const date = new Date(review.date);
                    const dateNow = Date.now();
                    const time = date.getTime();
                    const isNew = dateNow - time > 7200000 ? false : true;
                    const day = date.getDate();
                    const month = date.getMonth();
                    const year = date.getFullYear();
                    return (
                        <div className={adminPanelStyles.reviewsContainer} key={index}>
                            {index === reviews.length - 1 && <div ref={ref}></div>}
                            <div className={adminPanelStyles.reviewsProductImage}>
                                <Link to={`/catalog/${review.product._id}`}>
                                    <img
                                        src={review.product.imageUrls[0]}
                                        alt={`Product ${review.product._id}`}
                                    />
                                </Link>
                            </div>
                            <div>
                                <p className={adminPanelStyles.reviewsProductName}>
                                    <Link to={`/catalog/${review.product._id}`}>
                                        {review.product.name}
                                    </Link>
                                </p>
                                <div className={adminPanelStyles.reviewsComment}>
                                    <p
                                        className={
                                            review.customer.isAdmin
                                                ? classNames(
                                                      adminPanelStyles.reviewsCommentName,
                                                      adminPanelStyles.reviewsCommentNameAdmin,
                                                  )
                                                : adminPanelStyles.reviewsCommentName
                                        }
                                    >
                                        {review.customer.firstName} {review.customer.lastName}
                                    </p>
                                    <p className={adminPanelStyles.reviewsCommentText}>
                                        {review.content}
                                    </p>
                                </div>
                            </div>
                            <div className={adminPanelStyles.reviewsInfo}>
                                {isNew ? (
                                    <div className={adminPanelStyles.reviewsNew}>New</div>
                                ) : (
                                    <div className={adminPanelStyles.reviewsDate}>
                                        {day} {months[month]} {year}
                                    </div>
                                )}
                                <Button
                                    className={adminPanelStyles.reviewsBtnDelete}
                                    handleClick={() => {
                                        setIsLoaded(false);
                                        deleteComment(review._id).then(() => {
                                            getLimitedComments(1, 10).then((res) => {
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
            {isLoaded && !isReviewsUpload && (
                <div>
                    <ThreeDots
                        height="50"
                        width="50"
                        radius="9"
                        color="#8a9394"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{ justifyContent: 'center' }}
                        wrapperClassName=""
                        visible={true}
                    />
                </div>
            )}
        </div>
    );
}

export default AdminDashboardReviews;
