import React, { useState, useEffect } from 'react';
import favouritesStyles from './FavouritesPage.module.scss';
import { useSelector, shallowEqual } from 'react-redux';
import getWishList from 'api/getWishList';
import ListItem from 'components/ListItem';
import { Oval } from 'react-loader-spinner';

function FavouritesPage() {
    const isLogIn = useSelector((state) => state.store.login.isLogIn, shallowEqual);
    const [favourites, setFavourites] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);
    useEffect(() => {
        if (isLogIn) {
            setIsLoaded(false);
            getWishList().then((res) => {
                setFavourites(res.data.products);
                setIsLoaded(true);
            });
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
    if (!isLoaded) {
        return (
            <main>
                <Oval
                    height={130}
                    width={130}
                    color="#373F41"
                    wrapperStyle={{}}
                    wrapperClass={favouritesStyles.loader}
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
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
