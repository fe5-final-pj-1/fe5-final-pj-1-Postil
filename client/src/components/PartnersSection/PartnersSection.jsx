// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import partnersStyles from './PartnersSection.module.scss';

function PartnersSection() {
    useEffect(() => {}, []);
    return (
        <section className={partnersStyles.partners}>
            <div className="container">
                <h2 className="h2">Partners</h2>
                <ul className={partnersStyles.partnersList}>
                    <li className={partnersStyles.partnersItem}>
                        <img
                            className={partnersStyles.partnersImage}
                            src="https://res.cloudinary.com/dm2s5stjy/image/upload/v1679424046/photo_from_Cloudinary_%28RESIZE_580-on-580px--WEBP%29/Linens/Partners/good-sheets_rzynmg.webp"
                            alt="Partners img 1"
                        />
                    </li>
                    <li className={partnersStyles.partnersItem}>
                        <img
                            className={partnersStyles.partnersImage}
                            src="https://res.cloudinary.com/dm2s5stjy/image/upload/v1679424046/photo_from_Cloudinary_%28RESIZE_580-on-580px--WEBP%29/Linens/Partners/good-sheets_rzynmg.webp"
                            alt="Partners img 1"
                        />
                    </li>
                    <li className={partnersStyles.partnersItem}>
                        <img
                            className={partnersStyles.partnersImage}
                            src="https://res.cloudinary.com/dm2s5stjy/image/upload/v1679424046/photo_from_Cloudinary_%28RESIZE_580-on-580px--WEBP%29/Linens/Partners/good-sheets_rzynmg.webp"
                            alt="Partners img 1"
                        />
                    </li>
                    <li className={partnersStyles.partnersItem}>
                        <img
                            className={partnersStyles.partnersImage}
                            src="https://res.cloudinary.com/dm2s5stjy/image/upload/v1679424046/photo_from_Cloudinary_%28RESIZE_580-on-580px--WEBP%29/Linens/Partners/good-sheets_rzynmg.webp"
                            alt="Partners img 1"
                        />
                    </li>
                    <li className={partnersStyles.partnersItem}>
                        <img
                            className={partnersStyles.partnersImage}
                            src="https://res.cloudinary.com/dm2s5stjy/image/upload/v1679424046/photo_from_Cloudinary_%28RESIZE_580-on-580px--WEBP%29/Linens/Partners/good-sheets_rzynmg.webp"
                            alt="Partners img 1"
                        />
                    </li>
                    <li className={partnersStyles.partnersItem}>
                        <img
                            className={partnersStyles.partnersImage}
                            src="https://res.cloudinary.com/dm2s5stjy/image/upload/v1679424046/photo_from_Cloudinary_%28RESIZE_580-on-580px--WEBP%29/Linens/Partners/good-sheets_rzynmg.webp"
                            alt="Partners img 1"
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default PartnersSection;
