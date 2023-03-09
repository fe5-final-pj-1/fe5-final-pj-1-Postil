import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import styles from './ListItem.module.scss';
import Icon from 'components/Icon';
import QuantityInput from '../ShoppingBag/QuantityInput';
import getWishList from 'api/getWishList';
import createWishList from 'api/createWishList';
import addProductToWishList from 'api/addProductToWishList';
import deleteProductFromCart from 'api/deleteProductFromCart';
import { removeItem } from 'store/cartSlice';

const ListItem = ({ cartChange, quantity, item, type }) => {
    const { _id, name, imageUrls, currentPrice, color, size, fabric, itemNo } = item;
    const isLogin = useSelector((state) => state.store.login.isLogIn, shallowEqual);
    const [favouritesClicked, setFavouritesClicked] = useState(false);
    const dispatch = useDispatch();
    const addToFavourites = async () => {
        if (isLogin) {
            const wishList = await getWishList();
            const wishListData = wishList.data;
            if (!wishListData) {
                createWishList({
                    products: [_id],
                });
            } else {
                const currentProduct = wishListData.products.find((elem) => elem._id === _id);
                if (!currentProduct) {
                    addProductToWishList(_id);
                }
            }
            setFavouritesClicked(true);
        }
    };
    const RemoveFromFavourites = async () => {
        setFavouritesClicked(false);
    };
    const deleteFromCart = async () => {
        dispatch(removeItem(_id));
        if (isLogin) {
            await deleteProductFromCart(_id);
            cartChange(true);
        }
    };
    return (
        <>
            <img src={imageUrls[0]} alt="bed linen" className={styles.itemImg} />
            <div className={styles.textWrapper}>
                <h3 className={styles.itemName}>{name}</h3>
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
                <button className={styles.removeBtn} onClick={deleteFromCart}>
                    <Icon type="bagRemoveBtn" />
                </button>
                <div className={styles.addToFav}>
                    <span className={styles.addToFavTxt}>
                        {favouritesClicked ? 'REMOVE FROM' : 'ADD TO'} FAVORITES
                    </span>
                    <button
                        className={styles.favBtn}
                        onClick={favouritesClicked ? RemoveFromFavourites : addToFavourites}
                    >
                        {favouritesClicked ? (
                            <Icon type="bagFavIconFill" />
                        ) : (
                            <Icon type="bagFavIcon" />
                        )}
                    </button>
                </div>
            </div>
        </>
    );
};

ListItem.propTypes = {
    item: PropTypes.object,
    type: PropTypes.string,
    quantity: PropTypes.number,
    cartChange: PropTypes.func,
};
ListItem.defaultProps = {
    item: {},
    type: '',
    quantity: 1,
};

export default ListItem;
