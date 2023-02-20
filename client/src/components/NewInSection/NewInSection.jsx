import React from 'react';
import newInStyles from './NewInSection.module.scss';
import imgOne from './NewInSection-img/img1-min.png';
import imgTwo from './NewInSection-img/img2-min.png';
import imgThree from './NewInSection-img/img3-min.png';
import imgFour from './NewInSection-img/img4-min.png';

function NewInSection() {
    const { newInTitle, newInWrp, newInItem, newInImg, newInText, newInPrice } = newInStyles;

    return (
        <section>
            <div className="container">
                <p className={newInTitle}>NEW IN</p>
                <div className={newInWrp}>
                    <div className={newInItem}>
                        <img className={newInImg} src={imgOne} alt="img-1" />
                        <p className={newInText}>Cotton Dark Blue Bed Linen</p>
                        <p className={newInPrice}>$280</p>
                    </div>
                    <div className={newInItem}>
                        <img className={newInImg} src={imgTwo} alt="img-1" />
                        <p className={newInText}>Phistachio French Linen</p>
                        <p className={newInPrice}>$220</p>
                    </div>
                    <div className={newInItem}>
                        <img className={newInImg} src={imgThree} alt="img-1" />
                        <p className={newInText}>Cotton Dark Blue Bed Linen</p>
                        <p className={newInPrice}>$250</p>
                    </div>
                    <div className={newInItem}>
                        <img className={newInImg} src={imgFour} alt="img-1" />
                        <p className={newInText}>Cotton Dark Blue Bed Linen</p>
                        <p className={newInPrice}>$270</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewInSection;
