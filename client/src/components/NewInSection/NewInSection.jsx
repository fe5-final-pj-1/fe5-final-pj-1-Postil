import React, { useEffect, useState } from 'react';
import newInStyles from './NewInSection.module.scss';
import getFilteredProducts from '../../api/getFilteredProducts';
import { Link } from 'react-router-dom';

function NewInSection() {
    const { newIn, newInTitle, newInWrp, newInItem, newInImg, newInText, newInPrice } = newInStyles;
    const [items, setIsItems] = useState([]);

    useEffect(() => {
        getFilteredProducts('isNew=true').then((res) => {
            setIsItems(res.data.products);
        });
    }, []);

    return (
        <section className={newIn}>
            <div className="container">
                <p className={newInTitle}>NEW IN</p>
                <ul className={newInWrp}>
                    {items.map(({ name, itemNo, imageUrls, currentPrice }) => {
                        return (
                            <li className={newInItem} key={itemNo}>
                                <Link to={`/catalog/${itemNo}`}>
                                    <img className={newInImg} src={imageUrls[0]} alt="new-img" />
                                    <p className={newInText}>{name}</p>
                                    <p className={newInPrice}>{currentPrice}$</p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default NewInSection;
