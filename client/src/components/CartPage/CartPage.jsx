import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

import styles from './CartPage.module.scss';

import ShoppingBag from 'components/ShoppingBag';
import Button from 'components/Button';

function CartPage() {
    return (
        <main>
            <BreadCrumbs />
            <ShoppingBag />
            <Button text="PROCEED TO CHECKOUT" className={styles.checkoutBtn} />
        </main>
    );
}

export default CartPage;
