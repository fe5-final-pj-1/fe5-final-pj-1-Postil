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

const ListItem = ({ quantity, item, type, favouritesReload }) => {
    const { _id, name, imageUrls, currentPrice, color, size, fabric, itemNo } = item;
    const isLogin = useSelector((state) => state.store.login.isLogIn, shallowEqual);
    const [favouritesClicked, setFavouritesClicked] = useState(false);
    const [double, setDouble] = useState(false);
    const dispatch = useDispatch();
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
        dispatch(itemAdded(_id));
    };
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
                    {type === 'cart' ? (
                        <QuantityInput itemNo={itemNo} id={_id} quantity={quantity} />
                    ) : null}
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
