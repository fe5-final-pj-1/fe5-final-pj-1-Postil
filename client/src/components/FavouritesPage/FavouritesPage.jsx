// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import favouritesStyles from './FavouritesPage.module.scss';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import getWishList from 'api/getWishList';
import ListItem from 'components/ListItem';

function FavouritesPage() {
    const isLogIn = useSelector((state) => state.store.login.isLogIn, shallowEqual);
    // eslint-disable-next-line no-unused-vars
    const [favourites, setFavourites] = useState([]);
    useEffect(() => {
        if (isLogIn) {
            getWishList().then((res) => setFavourites(res.data.products));
        }
    }, [isLogIn]);
    if (!isLogIn) {
        return (
            <main>
                <p className={favouritesStyles.unauthorized}>
                    Only authorized users can add products to favourites
                </p>
            </main>
        );
    }
    return (
        <main>
            <div className="container">
                {favourites.length > 0 ? (
                    <ul className={favouritesStyles.itemsList}>
                        {favourites.map((item) => (
                            <li key={item._id} className={favouritesStyles.bagLiItem}>
                                <ListItem item={item} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className={favouritesStyles.empty}>Add some products to favourites</p>
                )}
            </div>
        </main>
    );
}

export default FavouritesPage;
