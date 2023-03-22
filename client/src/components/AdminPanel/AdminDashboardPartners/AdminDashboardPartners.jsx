import React, { useState, useEffect } from 'react';
import adminPanelStyles from './AdminDashboardPartners.module.scss';
import { useFormik } from 'formik';
import Button from 'components/Button';
import Icon from 'components/Icon';
import addNewPartner from 'api/addNewPartner';
import getAllPartners from 'api/getAllPartners';
import deleteSpecificPartner from 'api/deleteSpecificPartner';
import * as Yup from 'yup';
import { Oval } from 'react-loader-spinner';

function AdminDashboardPartners() {
    const [partners, setPartners] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        getAllPartners().then((partners) => {
            setPartners(partners.data);
            setIsLoaded(true);
        });
    }, []);
    const formik = useFormik({
        initialValues: {
            customId: Math.floor(Math.random() * 100000),
            name: '',
            shortDesc: '',
            years: 0,
            imageUrl: '',
            url: '',
        },
        validationSchema: Yup.object({
            customId: Yup.number(),
            name: Yup.string()
                .max(30, 'Must be 30 characters or less')
                .min(3, 'Must be 3 characters or more')
                .required('Required'),
            shortDesc: Yup.string()
                .max(30, 'Must be 30 characters or less')
                .min(5, 'Must be 5 characters or more')
                .required('Required'),
            years: Yup.number().required('Required').positive().integer(),
            imageUrl: Yup.string().required('Required'),
            url: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            setIsLoaded(false);
            addNewPartner(values).then(() => {
                formik.resetForm({
                    values: {
                        customId: Math.floor(Math.random() * 100000),
                        name: '',
                        shortDesc: '',
                        years: 0,
                        imageUrl: '',
                        url: '',
                    },
                });
                getAllPartners().then((partners) => {
                    setPartners(partners.data);
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
        <div className={adminPanelStyles.partnersWrapper}>
            <div className={adminPanelStyles.partnersLeft}>
                <h3 className="h3">Add new partner</h3>
                <form onSubmit={formik.handleSubmit} className={adminPanelStyles.partnersForm}>
                    <input name="customId" type="hidden" value={formik.values.customId} />
                    <label className={adminPanelStyles.partnersLabel} htmlFor="name">
                        add partner name
                    </label>
                    {formik.touched.name && formik.errors.name ? (
                        <div className={adminPanelStyles.partnersError}>{formik.errors.name}</div>
                    ) : null}
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className={adminPanelStyles.partnersInput}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        autoComplete="off"
                        placeholder="Partner name"
                    />
                    <label className={adminPanelStyles.partnersLabel} htmlFor="years">
                        add years of partnership
                    </label>
                    {formik.touched.years && formik.errors.years ? (
                        <div className={adminPanelStyles.partnersError}>{formik.errors.years}</div>
                    ) : null}
                    <input
                        id="years"
                        name="years"
                        type="text"
                        className={adminPanelStyles.partnersInput}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.years}
                        autoComplete="off"
                        placeholder={0}
                    />
                    <label className={adminPanelStyles.partnersLabel} htmlFor="imageUrl">
                        add partner image URL
                    </label>
                    {formik.touched.imageUrl && formik.errors.imageUrl ? (
                        <div className={adminPanelStyles.partnersError}>
                            {formik.errors.imageUrl}
                        </div>
                    ) : null}
                    <input
                        id="imageUrl"
                        name="imageUrl"
                        type="text"
                        className={adminPanelStyles.partnersInput}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.imageUrl}
                        autoComplete="off"
                        placeholder="https://res.cloudinary.com/..."
                    />
                    <label className={adminPanelStyles.partnersLabel} htmlFor="url">
                        add partner URL
                    </label>
                    {formik.touched.url && formik.errors.url ? (
                        <div className={adminPanelStyles.partnersError}>{formik.errors.url}</div>
                    ) : null}
                    <input
                        id="url"
                        name="url"
                        type="text"
                        className={adminPanelStyles.partnersInput}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.url}
                        autoComplete="off"
                        placeholder="https://www.google.com/..."
                    />
                    <label className={adminPanelStyles.partnersLabel} htmlFor="shortDesc">
                        add partner short description
                    </label>
                    {formik.touched.shortDesc && formik.errors.shortDesc ? (
                        <div className={adminPanelStyles.partnersError}>
                            {formik.errors.shortDesc}
                        </div>
                    ) : null}
                    <input
                        id="shortDesc"
                        name="shortDesc"
                        type="text"
                        className={adminPanelStyles.partnersInput}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.shortDesc}
                        autoComplete="off"
                        placeholder="Best bed linen seller."
                    />
                    <div className={adminPanelStyles.partnersButtons}>
                        <button type="submit" className={adminPanelStyles.partnersSubmitBtn}>
                            Add partner
                        </button>
                        <button
                            onClick={() =>
                                formik.resetForm({
                                    values: {
                                        customId: Math.floor(Math.random() * 100000),
                                        name: '',
                                        shortDesc: '',
                                        years: 0,
                                        imageUrl: '',
                                        url: '',
                                    },
                                })
                            }
                            type="reset"
                            className={adminPanelStyles.partnersResetBtn}
                        >
                            Reset Changes
                        </button>
                    </div>
                </form>
            </div>
            <div className={adminPanelStyles.partnersRight}>
                <h3 className="h3">Last partners</h3>
                <ul className={adminPanelStyles.partnersList}>
                    {partners
                        .slice(-6)
                        .reverse()
                        .map((partner) => {
                            return (
                                <li key={partner._id} className={adminPanelStyles.partnersItem}>
                                    <img
                                        className={adminPanelStyles.partnersImage}
                                        src={partner.imageUrl}
                                        alt={`Partners img ${partner.customId}`}
                                    />
                                    <Button
                                        handleClick={() => {
                                            setIsLoaded(false);
                                            deleteSpecificPartner(partner.customId).then(() => {
                                                getAllPartners().then((partners) => {
                                                    setPartners(partners.data);
                                                    setIsLoaded(true);
                                                });
                                            });
                                        }}
                                        text={<Icon type="delete" />}
                                        className={adminPanelStyles.partnersRemoveBtn}
                                    />
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
}

export default AdminDashboardPartners;
