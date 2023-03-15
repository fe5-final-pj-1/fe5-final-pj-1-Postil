import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import styles from './ListItem.module.scss';
import Icon from 'components/Icon';
import QuantityInput from '../ShoppingBag/QuantityInput';
import getWishList from 'api/getWishList';
import createWishList from 'api/createWishList';
import addProductToWishList from 'api/addProductToWishList';
import Button from 'components/Button';
import deleteProductFromCart from 'api/deleteProductFromCart';
import { Link } from 'react-router-dom';
import { itemAdded } from 'store/cartSlice';
import { removeItem } from 'store/cartSlice';
import deleteProductFromWishList from 'api/deleteProductFromWishList';
import classNames from 'classnames';
import getOneProduct from 'api/getOneProduct';

const ListItem = ({ quantity, item, type, favouritesReload }) => {
    const { _id, name, imageUrls, currentPrice, color, size, fabric } = item;
    const isLogin = useSelector((state) => state.store.login.isLogIn, shallowEqual);
    const dispatch = useDispatch();

    //for checking balance of products in DB
    const localCart = useSelector((state) => state.store.cart, shallowEqual);
    const [itemQuantityInDB, setItemQuantityInDB] = useState();

    //favourites
    const [double, setDouble] = useState(false);
    const [favouritesClicked, setFavouritesClicked] = useState(false);

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
    const DeleteFromFavourites = async () => {
        await deleteProductFromWishList(_id);
        favouritesReload((prev) => !prev);
    };
    const deleteFromCart = async () => {
        if (isLogin) {
            await deleteProductFromCart(_id);
        }
        dispatch(removeItem(_id));
    };
    const addToCart = () => {
        //for checking balance of products in DB
        if (localCart.map((item) => item.product).includes(_id)) {
            if (localCart.find((item) => item.product === _id).cartQuantity >= itemQuantityInDB) {
                return;
            }
        }
        dispatch(itemAdded(_id));
    };
    //for checking balance of products in DB
    useEffect(() => {
        if (_id) getOneProduct(_id).then((res) => setItemQuantityInDB(res.data.quantity));
    }, [_id]);

    useEffect(() => {
        if (type === 'cart' && isLogin) {
            getWishList().then((res) => {
                if (res.data !== null) {
                    const wishlist = res.data.products;
                    const isInArray = wishlist.find((elem) => elem._id === _id);
                    if (isInArray) {
                        setFavouritesClicked(true);
                    }
                }
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <div
                className={classNames(
                    styles.itemWrapper,
                    type === 'cart' ? null : color && size ? null : styles.largePadding,
                    type !== 'cart' ? styles.favourite : null,
                )}
            >
                <Link to={`/catalog/${_id}`}>
                    <img src={imageUrls[0]} alt="bed linen" className={styles.itemImg} />
                </Link>
                <div className={styles.textWrapper}>
                    <Link to={`/catalog/${_id}`}>
                        <span className={styles.itemName}>{name}</span>
                    </Link>
                    <p className={styles.description}>
                        {
                            "This is the luxury bedding set with absolutely everything in it, at a price that won't keep you up at night."
                        }
                    </p>
                    <p className={styles.currentPrice}>${currentPrice}</p>

                    <div className={styles.flexBlock}>
                        <div className={styles.configWrapper}>
                            {color && (
                                <p className={styles.colorBlock}>
                                    <span className={styles.confName}>COLOR:</span>
                                    <span
                                        className={styles.color}
                                        style={{ backgroundColor: color }}
                                    ></span>
                                </p>
                            )}
                            {size && (
                                <p className={styles.configBlock}>
                                    <span className={styles.confName}>SIZE:</span>
                                    <span className={styles.confValue}>{size}</span>
                                </p>
                            )}
                            {fabric && (
                                <p className={styles.configBlock}>
                                    <span className={styles.confName}>FABRIC:</span>
                                    <span className={styles.confValue}>{fabric}</span>
                                </p>
                            )}
                        </div>
                        {type === 'cart' ? <QuantityInput id={_id} quantity={quantity} /> : null}
                    </div>
                </div>
            </div>
            <div className={styles.flexBlockBtns}>
                {type === 'cart' ? (
                    <>
                        <Button
                            handleClick={deleteFromCart}
                            text={<Icon type="bagRemoveBtn" />}
                            className={styles.removeBtn}
                        />
                        {isLogin && (
                            <div className={styles.addToFav}>
                                <span className={styles.addToFavTxt}>
                                    {favouritesClicked ? 'REMOVE FROM' : 'ADD TO'} FAVORITES
                                </span>
                                <Button
                                    handleClick={
                                        favouritesClicked ? removeFromFavourites : addToFavourites
                                    }
                                    text={
                                        favouritesClicked ? (
                                            <Icon type="bagFavIconFill" />
                                        ) : (
                                            <Icon type="bagFavIcon" />
                                        )
                                    }
                                    className={styles.favBtn}
                                />
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <Button
                            handleClick={DeleteFromFavourites}
                            text={<Icon type="bagRemoveBtn" />}
                            className={styles.removeBtn}
                        />
                        <Button
                            handleClick={addToCart}
                            text={'ADD TO CART'}
                            className={styles.btnCart}
                        />
                    </>
                )}
            </div>
        </>
    );
};

ListItem.propTypes = {
    item: PropTypes.object,
    type: PropTypes.string,
    quantity: PropTypes.number,
    favouritesReload: PropTypes.func,
};
ListItem.defaultProps = {
    item: {},
    type: '',
    quantity: 1,
};

export default ListItem;
