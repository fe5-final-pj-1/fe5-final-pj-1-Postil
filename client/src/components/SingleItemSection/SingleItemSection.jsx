import React, { useState } from 'react';
import styles from './SingleItemSection.module.scss';
import Button from '../Button';
import Icon from '../Icon/Icon';
import ProductCarousel from '../ProductCarousel';
import PropTypes from 'prop-types';

const SingleItemSection = ({ product }) => {
    const { color, currentPrice, imageUrls, fabric, itemNo, name, size } = product;
    const [active, setActive] = useState({
        reviews: false,
        description: false,
    });
    return (
        <section className={styles.singleItem}>
            <div className="container">
                <div className={styles.singleItemWrp}>
                    <ProductCarousel images={imageUrls} />
                    <div className={styles.boxRight}>
                        <div className={styles.boxRightHeader}>
                            <h2 className={styles.singleItemTitle}>{name}</h2>
                            <div className={styles.boxRightLinkWrp}>
                                <a
                                    href="https://www.facebook.com/"
                                    className={styles.boxRightLinks}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Icon type={'FacebookMin'} className={styles.linksImg} />
                                </a>
                                <a
                                    href="https://www.twitter.com/"
                                    className={styles.boxRightLinks}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Icon type={'TwitterMin'} className={styles.linksImg} />
                                </a>
                                <a
                                    href="https://www.instagram.com/"
                                    className={styles.boxRightLinks}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Icon type={'InstagramMin'} className={styles.linksImg} />
                                </a>
                            </div>
                        </div>
                        <p className={styles.boxRightId}>PRODUCT ID: {itemNo}</p>
                        <div className={styles.boxOption}>
                            {color && (
                                <p>
                                    Color:
                                    <span
                                        className={styles.color}
                                        style={{ backgroundColor: color }}
                                    ></span>
                                </p>
                            )}
                            {size && (
                                <p>
                                    Size: <span>{size}</span>
                                </p>
                            )}
                            {fabric && (
                                <p>
                                    Fabric: <span>{fabric}</span>
                                </p>
                            )}
                        </div>
                        <div className={styles.boxOption}></div>
                        <div className={styles.boxForBuy}>
                            <div className={styles.boxForBuyL}>
                                <p className={styles.buyTextOne}>USD ${currentPrice}</p>
                                <p className={styles.buyTextTwo}>PRE-ORDER</p>
                            </div>
                            <div className={styles.boxForBuyR}>
                                <Button text={'ADD TO BAG'} className={styles.btn} />
                                <Button className={styles.btnHeart} />
                            </div>
                        </div>
                        <div className={styles.boxInfo}>
                            <Button
                                handleClick={() =>
                                    setActive({
                                        ...active,
                                        description: !active.description,
                                    })
                                }
                                className={styles.boxInfoName}
                                text={
                                    <>
                                        <Icon type={active.description ? 'minus' : 'plus'} />
                                        <p
                                            className={
                                                (styles.boxInfoTitle, styles.boxInfoTitleFix)
                                            }
                                        >
                                            Product Description
                                        </p>
                                    </>
                                }
                            />
                            {active.description && (
                                <p className={styles.reviewsText}>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts.Far far
                                    away, behind the word mountains, far from the countries Vokalia
                                    and Consonantia, there live the blind texts
                                </p>
                            )}
                        </div>
                        <div className={styles.boxInfo}>
                            <Button
                                handleClick={() =>
                                    setActive({
                                        ...active,
                                        reviews: !active.reviews,
                                    })
                                }
                                className={styles.boxInfoName}
                                text={
                                    <>
                                        <Icon type={active.reviews ? 'minus' : 'plus'} />
                                        <p
                                            className={
                                                (styles.boxInfoTitle, styles.boxInfoTitleFix)
                                            }
                                        >
                                            Reviews
                                        </p>
                                    </>
                                }
                            />
                            {active.reviews && (
                                <p className={styles.reviewsText}>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts.Far far
                                    away, behind the word mountains, far from the countries Vokalia
                                    and Consonantia, there live the blind texts
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleItemSection;

SingleItemSection.propTypes = {
    product: PropTypes.object,
};

SingleItemSection.defaultProps = {
    product: {},
};
