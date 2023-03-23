import React, { useState, useEffect } from 'react';
import partnersStyles from './PartnersSection.module.scss';
import getAllPartners from 'api/getAllPartners';
import classNames from 'classnames';

function PartnersSection() {
    const [partners, setPartners] = useState([]);
    const [numItems, setNumItems] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 500) {
                setNumItems(-3);
            } else if (width < 800) {
                setNumItems(-4);
            } else {
                setNumItems(-6);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        getAllPartners().then((res) => {
            setPartners(res.data);
        });
    }, []);
    return (
        <section className={partnersStyles.partners}>
            <div className="container">
                <h2 className="h2">Partners</h2>
                <ul className={partnersStyles.partnersList}>
                    {partners.slice(numItems).map((partner) => {
                        return (
                            <li className={partnersStyles.partnersItem} key={partner._id}>
                                <div
                                    className={classNames(
                                        partnersStyles.partnersSide,
                                        partnersStyles.partnersFrontSide,
                                    )}
                                >
                                    <img
                                        className={partnersStyles.partnersImage}
                                        src={partner.imageUrl}
                                        alt={`Partners img ${partner.customId}`}
                                    />
                                </div>
                                <div
                                    className={classNames(
                                        partnersStyles.partnersSide,
                                        partnersStyles.partnersBackSide,
                                    )}
                                >
                                    <p className={partnersStyles.partnersDesk}>
                                        {partner.shortDesc}
                                    </p>
                                    <p className={partnersStyles.partnersDesk}>
                                        <span>{partner.years}</span> years of partnership.
                                    </p>
                                    <a
                                        href={partner.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={partnersStyles.partnersLink}
                                    >
                                        Watch more
                                    </a>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default PartnersSection;
