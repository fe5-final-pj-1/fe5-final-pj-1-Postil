import React from 'react';

import styles from './CartPage.module.scss';

import ShoppingBag from 'components/ShoppingBag';
import Button from 'components/Button';

function CartPage() {
    return (
        <>
            <ShoppingBag />
            <Button text="PROCEED TO CHECKOUT" className={styles.checkoutBtn} />
        </>
    );
}

export default CartPage;
