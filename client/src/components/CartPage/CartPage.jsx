import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import styles from './CartPage.module.scss';
import ShoppingBag from 'components/ShoppingBag';
import CarouselSection from 'components/CarouselSection';
import { useSelector } from 'react-redux';
import getAllProducts from 'api/getAllProducts';

function CartPage() {
    const [products, setProducts] = useState([]);
    const cartStorage = useSelector((state) => state.store.cart);
    useEffect(() => {
        getAllProducts().then((res) =>
            setProducts(
                res.data.length % 3
                    ? res.data.slice(0, res.data.length - (res.data.length % 3)).map((item) => {
                          const { name, currentPrice, imageUrls, _id } = item;
                          return { name, currentPrice, imageUrls, _id };
                      })
                    : res.data.map((item) => {
                          const { name, currentPrice, imageUrls, _id } = item;
                          return { name, currentPrice, imageUrls, _id };
                      }),
            ),
        );
    }, []);

    return (
        <main>
            <BreadCrumbs />
            {cartStorage.length === 0 ? (
                <h2 className="h2" style={{ textAlign: 'center', paddingBottom: '8rem' }}>
                    Cart is empty
                </h2>
            ) : (
                <>
                    <ShoppingBag />
                    <Link
                        to="/checkout"
                        className={styles.checkoutBtn}
                        onClick={() => window.scroll(0, 0)}
                    >
                        PROCEED TO CHECKOUT
                    </Link>
                </>
            )}
            <CarouselSection products={products} sectionTitle="YOU MIGHT LIKE IT TOO" />
        </main>
    );
}

export default CartPage;
