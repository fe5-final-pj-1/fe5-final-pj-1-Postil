import React, { useState } from 'react';
import styles from './SingleItemSection.module.scss';
import Button from '../Button';
import Icon from '../Icon/Icon';
import classNames from 'classnames';

const SingleItemSection = () => {
    // From Sergey
    const [active, setActive] = useState({
        price: false,
        size: false,
        color: false,
        fabric: false,
    });
    const sizes = [{ size: 'king' }];
    const colors = [{ color: '#6FB7AC' }];
    const handleChange = (e) => {
        e.target.checked
            ? console.log(e.target.name)
            : console.log(`remove filter: ${e.target.name}`);
    };

    return (
        <section className={styles.singleItem}>
            <div className={styles.container}>
                <div className={styles.singleItemWrp}>
                    <div className={styles.boxLeft}>
                        <h5 className={styles.sliderTitle}>Slider</h5>
                    </div>
                    <div className={styles.boxRight}>
                        <div className={styles.boxRightHeader}>
                            <h2 className={styles.singleItemTitle}>SWEETNESS BED LINEN</h2>
                            <div className={styles.boxRightLinkWrp}>
                                <a
                                    href="https://www.facebook.com/"
                                    className={styles.boxRightLinks}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Icon type={'FacebookMin'} className={styles.linksImg} />
                                </a>
                                <a
                                    href="https://www.twitter.com/"
                                    className={styles.boxRightLinks}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Icon type={'TwitterMin'} className={styles.linksImg} />
                                </a>
                                <a
                                    href="https://www.instagram.com/"
                                    className={styles.boxRightLinks}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Icon type={'InstagramMin'} className={styles.linksImg} />
                                </a>
                            </div>
                        </div>
                        <p className={styles.boxRightId}>PRODUCT ID: 10101</p>

                        {/* From Sergey */}
                        <ul className={styles.filtersContainer}>
                            <li className={(styles.filter, styles.active)}>
                                <p className={styles.filterTitle}>COLOR</p>
                                <div className={styles.color}>
                                    {colors.map((color, key) => {
                                        return (
                                            <label
                                                key={key}
                                                style={{ backgroundColor: color.color }}
                                            >
                                                <input
                                                    onChange={handleChange}
                                                    type="checkbox"
                                                    value={color.color}
                                                    name={color.color}
                                                />
                                            </label>
                                        );
                                    })}
                                </div>
                            </li>
                            <li className={(styles.filter, styles.active)}>
                                <p className={styles.filterTitle}>SIZE</p>
                                <div className={styles.size}>
                                    {sizes.map((size, key) => (
                                        <div className={styles.sizeName} key={key}>
                                            <a className={styles.sizeLink} href="!#">
                                                {size.size}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </li>

                            <div className={styles.boxForBuy}>
                                <div className={styles.boxForBuyL}>
                                    <p className={styles.buyTextOne}>USD $150.00</p>
                                    <p className={styles.buyTextTwo}>PRE-ORDER</p>
                                </div>
                                <div className={styles.boxForBuyR}>
                                    <Button text={'ADD TO BAG'} className={styles.btn} />
                                    <Button className={styles.btnHeart} />
                                </div>
                            </div>

                            <li
                                className={
                                    active.price
                                        ? classNames(styles.filter, styles.active)
                                        : styles.filter
                                }
                            >
                                <Button
                                    handleClick={() =>
                                        setActive({ ...active, price: active.price ? false : true })
                                    }
                                    className={styles.filterName}
                                    text={
                                        <>
                                            <Icon type={active.price ? 'minus' : 'plus'} />
                                            <p
                                                className={
                                                    (styles.filterTitle, styles.filterTitleFix)
                                                }
                                            >
                                                PRODUCT DESCRIPTION
                                            </p>
                                        </>
                                    }
                                />
                                {active.price && (
                                    <div className={styles.price}>
                                        <p className={styles.descrText}>
                                            Silk has a number of positive qualities. It has a
                                            beautiful appearance, pleasant to the body, easy to care
                                            for. The material is very soft, delicate and pleasant to
                                            the touch. Given all its positive qualities, it is ideal
                                            for sewing bed linen. It perfectly keeps its shape, does
                                            not wrinkle, does not shed and practically does not
                                            shrink when washed.
                                        </p>
                                    </div>
                                )}
                            </li>
                            <li
                                className={
                                    active.fabric
                                        ? classNames(styles.filter, styles.active)
                                        : styles.filter
                                }
                            >
                                <Button
                                    handleClick={() =>
                                        setActive({
                                            ...active,
                                            fabric: active.fabric ? false : true,
                                        })
                                    }
                                    className={styles.filterName}
                                    text={
                                        <>
                                            <Icon type={active.fabric ? 'minus' : 'plus'} />
                                            <p
                                                className={
                                                    (styles.filterTitle, styles.filterTitleFix)
                                                }
                                            >
                                                REVIEWS
                                            </p>
                                        </>
                                    }
                                />
                                {active.fabric && (
                                    <div className={styles.fabric}>
                                        <p className={styles.reviewsText}>
                                            The main advantages of silk underwear. Rich appearance
                                            and beautiful shine. Soft and pleasant to the touch.
                                            Ideal for summer as it creates a cool feeling. Good
                                            breathability. Perfectly absorbs moisture. Virtually no
                                            wrinkling. Does not shed or shrink. Moths and other
                                            insects do not start in it. Does not cause allergic
                                            reactions. Not afraid of direct sunlight.
                                        </p>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleItemSection;
