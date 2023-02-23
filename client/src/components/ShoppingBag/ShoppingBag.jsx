import React from 'react';
import BagItem from './components/BagItem';
import Header from './components/Header';
import TotalPrice from './components/TotalPrice';

const goodsItems = [
    {
        _id: '5d6a8385ff10dc0af0c90e5c',
        id: 'men-clothing-suits',
        name: 'SWEETNESS BED LINEN',
        parentId: 'men-clothing',
        imgUrl: 'sweetness-bed-linen.jpg',
        __v: 0,
        date: '2019-10-06T13:50:11.859Z',
        colors: ['GREY', 'GREEN'],
        currentPrice: 150,
        sizes: ['DOUBLE', 'NORMAL'],
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
        colors: ['PHISTACHIO', 'YELLOW'],
        currentPrice: 340,
        sizes: ['DOUBLE', 'NORMAL'],
        description:
            "This is the luxury bedding set with absolutely everything in it, at a price that won't keep you up at night.",
    },
];

const ShoppingBag = () => {
    return (
        <>
            <Header />
            <TotalPrice totalPrice={'490.00'} />
            <ul>
                {goodsItems.map((item) => (
                    <li key={item._id}>
                        <BagItem item={item} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ShoppingBag;
