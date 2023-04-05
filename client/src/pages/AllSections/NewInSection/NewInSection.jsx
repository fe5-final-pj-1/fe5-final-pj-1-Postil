import React, { useEffect, useState } from 'react';
import newInStyles from './NewInSection.module.scss';
import getFilteredProducts from '../../../api/getFilteredProducts';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NewInSection() {
    const { newIn, newInTitle, newInWrp, newInItem, newInImg, newInText, newInPrice } = newInStyles;
    const [items, setIsItems] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);
    useEffect(() => {
        getFilteredProducts('isNew=true').then((res) => {
            if (res && res.data) {
                setIsItems(res.data.products.slice(-4));
            } else {
                setIsEmpty(true);
            }
        });
    }, []);
    if (isEmpty) {
        return null;
    }
    return (
        <section className={newIn} data-testid="newInSection">
            <div className="container">
                <p className={newInTitle}>NEW IN</p>
                <ul className={newInWrp}>
                    {items.map(({ name, itemNo, imageUrls, currentPrice, _id }) => {
                        return (
                            <li className={newInItem} key={itemNo}>
                                <Link to={`/catalog/${_id}`} target="_top">
                                    <img className={newInImg} src={imageUrls[0]} alt="new-img" />
                                    <div className={newInStyles.descriptionContainer}>
                                        <p className={newInText}>{name}</p>
                                        <p className={newInPrice}>{currentPrice}$</p>
                                    </div>
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

NewInSection.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            itemNo: PropTypes.string.isRequired,
            imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
            currentPrice: PropTypes.number.isRequired,
            _id: PropTypes.string.isRequired,
        }),
    ),
    isEmpty: PropTypes.bool,
};
