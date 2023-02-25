import React from 'react';
import newInStyles from './NewInSection.module.scss';
import imgOne from './NewInSection-img/img1-min.png';
import imgTwo from './NewInSection-img/img2-min.png';
import imgThree from './NewInSection-img/img3-min.png';
import imgFour from './NewInSection-img/img4-min.png';

function NewInSection() {
    const { newInTitle, newInWrp, newInItem, newInImg, newInText, newInPrice } = newInStyles;
    const items = [
        {
            text: 'Cotton Dark Blue Bed Linen',
            price: '$280',
            image: imgOne,
        },
        {
            text: 'Phistachio French Linen',
            price: '$220',
            image: imgTwo,
        },
        {
            text: 'Light Pink Bed Linen',
            price: '$250',
            image: imgThree,
        },
        {
            text: 'French Dark Green Linen',
            price: '$270',
            image: imgFour,
        },
    ];

    return (
        <section>
            <div className="container">
                <p className={newInTitle}>NEW IN</p>
                <ul className={newInWrp}>
                    {items.map((item, key) => {
                        return (
                            <li className={newInItem} key={key}>
                                <a href="!#" target="_blank">
                                    <img className={newInImg} src={item.image} alt="new-img" />
                                    <p className={newInText}>{item.text}</p>
                                    <p className={newInPrice}>{item.price}</p>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default NewInSection;
