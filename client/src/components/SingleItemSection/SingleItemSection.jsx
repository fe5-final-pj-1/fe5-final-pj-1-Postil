import React, { useState, useEffect } from 'react';
import styles from './SingleItemSection.module.scss';
import Button from '../Button';
import Icon from '../Icon/Icon';
import ProductCarousel from '../ProductCarousel';
import PropTypes from 'prop-types';
import { itemAdded } from '../../store/cartSlice';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import createWishList from 'api/createWishList';
import getWishList from 'api/getWishList';
import addProductToWishList from 'api/addProductToWishList';
import getCart from 'api/getCart';
import addProductToCart from 'api/addProductToCart';
import createCart from 'api/createCart';
import deleteProductFromWishList from 'api/deleteProductFromWishList';
import { Oval } from 'react-loader-spinner';

const SingleItemSection = ({ product }) => {
    const { _id, color, currentPrice, imageUrls, fabric, itemNo, name, size } = product;
    const [active, setActive] = useState({
        reviews: false,
        description: false,
    });
    const [isLoaded, setIsLoaded] = useState(false);
    const [favouritesClicked, setFavouritesClicked] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [double, setDouble] = useState(false);
    const [wishlist, setWishlist] = useState([]);
    const dispatch = useDispatch();
    const isLogIn = useSelector((state) => state.store.login.isLogIn, shallowEqual);

    useEffect(() => {
        if (isLogIn) {
            getWishList().then((res) => {
                if (res.data !== null) {
                    const wishlist = res.data.products;
                    setWishlist(res.data.products);
                    const isInArray = wishlist.find((elem) => elem._id === _id);
                    if (isInArray) {
                        setFavouritesClicked(true);
                    }
                }
                setTimeout(() => setIsLoaded(true), 400);
            });
        } else {
            setTimeout(() => setIsLoaded(true), 300);
        }
    }, [wishlist, isLogIn, _id]);
    //user is not login
    const addToCart = async () => {
        dispatch(itemAdded(_id));
        if (isLogIn) {
            addToCartForLoginUser();
        }
    };
    // user is login
    const addToCartForLoginUser = async () => {
        const userCart = await getCart();
        const userCartData = await userCart.data;
        if (!userCartData) {
            createCart({
                products: [{ product: _id, cartQuantity: 1 }],
            });
        } else {
            addProductToCart(_id);
        }
    };
    const addToFavourites = async () => {
        if (!favouritesClicked && !double) {
            setDouble(true);
            const wishList = await getWishList();
            const wishListData = wishList.data;
            if (!wishListData) {
                createWishList({
                    products: [_id],
                }).then(() => {
                    setFavouritesClicked(true);
                    setDouble(false);
                });
            } else {
                const currentProduct = wishListData.products.find((elem) => elem._id === _id);
                if (!currentProduct) {
                    addProductToWishList(_id).then(() => {
                        setFavouritesClicked(true);
                        setDouble(false);
                    });
                }
            }
        }
    };
    const removeFromFavourites = () => {
        if (favouritesClicked && !double) {
            setDouble(true);
            deleteProductFromWishList(_id).then(() => {
                setFavouritesClicked(false);
                setDouble(false);
            });
        }
    };
    if (!isLoaded) {
        return (
            <div className="container">
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
            </div>
        );
    }
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
                                <Button
                                    handleClick={addToCart}
                                    text={'ADD TO CART'}
                                    className={styles.btn}
                                />
                                {isLogIn && (
                                    <Button
                                        className={styles.btnHeart}
                                        handleClick={
                                            favouritesClicked
                                                ? removeFromFavourites
                                                : addToFavourites
                                        }
                                        text={
                                            <Icon
                                                type={
                                                    favouritesClicked
                                                        ? 'bagFavIconFill'
                                                        : 'bagFavIcon'
                                                }
                                            />
                                        }
                                    />
                                )}
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
