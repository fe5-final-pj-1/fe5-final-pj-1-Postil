import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import classNames from 'classnames';
import Button from 'components/Button';
import Icon from 'components/Icon';
import adminPanelStyles from './AdminDashboardReviews.module.scss';
import { Link } from 'react-router-dom';
import getAllComments from 'api/getAllComments';
import deleteComment from 'api/deleteComment';
import { Oval } from 'react-loader-spinner';

function AdminDashboardReviews() {
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
        getAllComments().then((res) => {
            if (res.data) {
                setReviews(res.data);
            }
            setIsLoaded(true);
        });
    }, []);
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
        <div className={adminPanelStyles.reviews}>
            <div className={adminPanelStyles.reviewsWrapper}>
                {[...reviews].reverse().map((review) => {
                    const date = new Date(review.date);
                    const dateNow = Date.now();
                    const time = date.getTime();
                    const isNew = dateNow - time > 7200000 ? false : true;
                    const day = date.getDate();
                    const month = date.getMonth();
                    const year = date.getFullYear();
                    return (
                        <div className={adminPanelStyles.reviewsContainer} key={review._id}>
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
                                            getAllComments().then((res) => {
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
        </div>
    );
}

export default AdminDashboardReviews;
