import React, { useState, useEffect } from 'react';
import adminPanelStyles from './AdminDashboardPromotions.module.scss';
import classNames from 'classnames';
import { useFormik } from 'formik';
import getAllSlides from 'api/getAllSlides';
import Button from 'components/Button';
import Icon from 'components/Icon';
import * as Yup from 'yup';
import addNewSlide from 'api/addNewSlide';
import deleteSpecificSlide from 'api/deleteSpecificSlide';
import { Oval } from 'react-loader-spinner';

function AdminDashboardPromotions() {
    const [promotions, setPromotions] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        getAllSlides().then((slides) => {
            setPromotions(slides.data);
            setIsLoaded(true);
        });
    }, []);
    const formik = useFormik({
        initialValues: {
            customId: Math.floor(Math.random() * 100000),
            title: '',
            description: '',
            imageUrl: '',
            product: '',
            categoryName: '',
        },
        validationSchema: Yup.object({
            customId: Yup.number(),
            title: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .min(5, 'Must be 5 characters or more')
                .required('Required'),
            description: Yup.string()
                .max(200, 'Must be 200 characters or less')
                .min(10, 'Must be 10 characters or more')
                .required('Required'),
            imageUrl: Yup.string().required('Required'),
            product: Yup.string(),
            categoryName: Yup.string(),
        }),
        onSubmit: (values) => {
            setIsLoaded(false);
            addNewSlide(values).then(() => {
                getAllSlides().then((slides) => {
                    setPromotions(slides.data);
                    setIsLoaded(true);
                });
            });
        },
    });
    if (!isLoaded) {
        return (
            <Oval
                height={130}
                width={130}
                color="#373F41"
                wrapperStyle={{}}
                wrapperClass={adminPanelStyles.loader}
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        );
    }
    return (
        <div className={adminPanelStyles.promotionsWrapper}>
            <div className={adminPanelStyles.promotionsLeft}>
                <h3 className="h3">Add new promotion</h3>
                <form onSubmit={formik.handleSubmit} className={adminPanelStyles.promotionsForm}>
                    <input name="customId" type="hidden" value={formik.values.customId} />
                    <label className={adminPanelStyles.promotionsLabel} htmlFor="title">
                        add promotion title
                    </label>
                    {formik.touched.title && formik.errors.title ? (
                        <div className={adminPanelStyles.promotionsError}>
                            {formik.errors.title}
                        </div>
                    ) : null}
                    <input
                        id="title"
                        name="title"
                        type="text"
                        className={adminPanelStyles.promotionsInput}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                        autoComplete="off"
                        placeholder="Promotion title"
                    />
                    <label className={adminPanelStyles.promotionsLabel} htmlFor="imageUrl">
                        add promotion image URL
                    </label>
                    {formik.touched.imageUrl && formik.errors.imageUrl ? (
                        <div className={adminPanelStyles.promotionsError}>
                            {formik.errors.imageUrl}
                        </div>
                    ) : null}
                    <input
                        id="imageUrl"
                        name="imageUrl"
                        type="text"
                        className={adminPanelStyles.promotionsInput}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.imageUrl}
                        autoComplete="off"
                        placeholder="https://res.cloudinary.com/..."
                    />
                    <label className={adminPanelStyles.promotionsLabel} htmlFor="product">
                        add promotion product ID (optional)
                    </label>
                    {formik.touched.product && formik.errors.product ? (
                        <div className={adminPanelStyles.promotionsError}>
                            {formik.errors.product}
                        </div>
                    ) : null}
                    <input
                        id="product"
                        name="product"
                        type="text"
                        className={adminPanelStyles.promotionsInput}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.product}
                        autoComplete="off"
                        placeholder="63f341d1b9e5b52a8797f518"
                    />
                    <label className={adminPanelStyles.promotionsLabel} htmlFor="categoryName">
                        select promotion category (optional)
                    </label>
                    {formik.touched.categoryName && formik.errors.categoryName ? (
                        <div className={adminPanelStyles.promotionsError}>
                            {formik.errors.categoryName}
                        </div>
                    ) : null}
                    <select
                        id="categoryName"
                        name="categoryName"
                        className={adminPanelStyles.promotionsSelect}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.categoryName}
                    >
                        <option value="">Select category</option>
                        <option value="bedroom">Bedroom</option>
                        <option value="bed linen">Bed linen</option>
                        <option value="kitchen">Kitchen</option>
                        <option value="bathroom">Bathroom</option>
                        <option value="loungewear">Loungewear</option>
                        <option value="Sale">Sale</option>
                    </select>
                    <label className={adminPanelStyles.promotionsLabel} htmlFor="description">
                        add promotion description
                    </label>
                    {formik.touched.description && formik.errors.description ? (
                        <div className={adminPanelStyles.promotionsError}>
                            {formik.errors.description}
                        </div>
                    ) : null}
                    <textarea
                        id="description"
                        name="description"
                        className={adminPanelStyles.promotionsTextArea}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                        placeholder="Promotion description"
                    ></textarea>
                    <div className={adminPanelStyles.promotionsButtons}>
                        <button type="submit" className={adminPanelStyles.promotionsSubmitBtn}>
                            Add promotion
                        </button>
                        <button
                            onClick={() =>
                                formik.resetForm({
                                    values: {
                                        customId: Math.floor(Math.random() * 100000),
                                        title: '',
                                        description: '',
                                        imageUrl: '',
                                        product: '',
                                        categoryName: '',
                                    },
                                })
                            }
                            type="reset"
                            className={adminPanelStyles.promotionsResetBtn}
                        >
                            Reset Changes
                        </button>
                    </div>
                </form>
            </div>
            <div className={adminPanelStyles.promotionsRight}>
                <h3 className="h3">Active promotions</h3>
                {promotions.map((promotion) => {
                    return (
                        <div key={promotion.customId} className={adminPanelStyles.promotionsData}>
                            <img
                                src={promotion.imageUrl}
                                className={adminPanelStyles.promotionsImg}
                                alt={`Carousel img ${promotion.customId}`}
                            />
                            <div className={adminPanelStyles.promotionsInfo}>
                                <p
                                    className={classNames(
                                        adminPanelStyles.promotionsText,
                                        adminPanelStyles.promotionsHeading,
                                        'h2 h2--dark',
                                    )}
                                >
                                    {promotion.title}
                                </p>
                                <p
                                    className={classNames(
                                        adminPanelStyles.promotionsText,
                                        adminPanelStyles.promotionsTextDescription,
                                        'p p--dark',
                                    )}
                                >
                                    {promotion.description}
                                </p>
                            </div>
                            <p className={adminPanelStyles.promotionsNumber}>
                                {`№ ${promotion.customId}`}
                            </p>
                            <Button
                                handleClick={() => {
                                    setIsLoaded(false);
                                    deleteSpecificSlide(promotion.customId).then(() => {
                                        getAllSlides().then((slides) => {
                                            setPromotions(slides.data);
                                            setIsLoaded(true);
                                        });
                                    });
                                }}
                                text={<Icon type="delete" />}
                                className={adminPanelStyles.promotionsRemoveBtn}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default AdminDashboardPromotions;
