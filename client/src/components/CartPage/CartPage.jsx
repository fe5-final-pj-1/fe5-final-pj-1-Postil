import React from 'react';
import ShoppingBag from 'components/ShoppingBag';
import Button from 'components/Button';

function CartPage() {
    return (
        <>
            <ShoppingBag />
            <Button text="PROCEED TO CHECKOUT" />
        </>
    );
}

export default CartPage;
