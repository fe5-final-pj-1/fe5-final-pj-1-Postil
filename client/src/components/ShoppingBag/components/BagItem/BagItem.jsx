import React from 'react';
import PropTypes from 'prop-types';
import BagItemForm from '../BagItemForm';

const BagItem = (props) => {
    const imgUrlPrefix = './img/catalog/';
    const { name, imgUrl, description, currentPrice, colors, sizes } = props.item;

    return (
        <>
            <img src={imgUrlPrefix + imgUrl} alt="bed linen" />
            <div className="textWrapper">
                <h3 className="name">{name}</h3>
                <p className="description">{description}</p>
                <p className="price">${currentPrice}</p>
                <BagItemForm colors={colors} sizes={sizes} />
            </div>
        </>
    );
};

BagItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        imgUrl: PropTypes.string,
        currentPrice: PropTypes.number,
        colors: PropTypes.array,
        sizes: PropTypes.array,
        description: PropTypes.string,
    }),
};

export default BagItem;
