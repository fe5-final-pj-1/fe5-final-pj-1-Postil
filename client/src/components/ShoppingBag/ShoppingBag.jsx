import React from 'react';
import BagItem from './components/BagItem';
import Header from './components/Header';
import TotalPrice from './components/TotalPrice';

import styles from './ShoppingBag.module.scss';

const goodsItems = [
    {
        _id: '5d6a8385ff10dc0af0c90e5c',
        id: 'men-clothing-suits',
        name: 'SWEETNESS BED LINEN',
        parentId: 'men-clothing',
        imgUrl: 'sweetness-bed-linen.jpg',
        __v: 0,
        date: '2019-10-06T13:50:11.859Z',
        color: 'GREY',
        currentPrice: 150,
        size: 'DOUBLE',
        description:
            "This is the luxury bedding set with absolutely everything in it, at a price that won't keep you up at night.",
    },
    {
        _id: '6d6a8385ff10dc0af0c90e5c',
        id: 'men-clothing-suits',
        name: 'PHISTACHIO FRENCH COTTON BED LINEN',
        parentId: 'women-clothing',
        imgUrl: 'phistachio-french-cotton-bed-linen.jpg',
        __v: 0,
        date: '2019-10-07T13:50:11.859Z',
        color: 'PHISTACHIO',
        currentPrice: 340,
        size: 'DOUBLE',
        description:
            "This is the luxury bedding set with absolutely everything in it, at a price that won't keep you up at night.",
    },
];

const ShoppingBag = () => {
    return (
        <div className={styles.bagWrapper}>
            <div className={styles.headerWrapper}>
                <Header />
                <TotalPrice totalPrice={'490.00'} />
            </div>

            <ul className={styles.itemsList}>
                {goodsItems.map((item) => (
                    <li key={item._id} className={styles.bagLiItem}>
                        <BagItem item={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingBag;
