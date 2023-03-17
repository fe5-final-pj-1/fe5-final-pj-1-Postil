import React, { useState, useEffect } from 'react';
import adminPanelStyles from './AdminProductsActions.module.scss';
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import getAllProducts from 'api/getAllProducts';
import getOneProduct from 'api/getOneProduct';
import updateOneProduct from 'api/updateOneProduct';
import classNames from 'classnames';
import addNewProduct from 'api/addNewProduct';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Oval } from 'react-loader-spinner';

function AdminProductsActions({ type }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState('');
    let { productId } = useParams();
    useEffect(() => {
        if (type !== 'edit') {
            getAllProducts().then((res) => {
                setIsLoaded(true);
                if (res && res.data) {
                    const numberStr = res.data[res.data.length - 1].itemNo;
                    const numberArr = numberStr.split('-');
                    numberArr[1] = `0${Number(numberArr[1]) + 1}`;
                    formik.values.itemNo = numberArr.join('-');
                }
            });
        } else {
            getOneProduct(productId).then((res) => {
                setProduct(res.data);
                setIsLoaded(true);
            });
        }
    });
    const formik = useFormik({
        enableReinitialize: type !== 'edit' ? false : true,
        initialValues: {
            enabled: true,
            isNew: product.isNew ? product.isNew : 'true',
            name: product.name ? product.name : '',
            currentPrice: product.currentPrice ? product.currentPrice : 0,
            previousPrice: product.previousPrice ? product.previousPrice : 0,
            categories: product.categories ? product.categories : '',
            imageUrls: product.imageUrls ? product.imageUrls : ['', '', ''],
            quantity: product.quantity ? product.quantity : 0,
            fabric: product.fabric ? product.fabric : '',
            color: product.color ? product.color : '',
            size: product.size ? product.size : '',
            itemNo: product.itemNo ? product.itemNo : '',
        },
        validationSchema: Yup.object({
            enabled: Yup.bool(),
            isNew: Yup.string(),
            name: Yup.string()
                .max(30, 'Must be 30 characters or less')
                .min(3, 'Must be 3 characters or more')
                .required('Required'),
            currentPrice: Yup.number().required('Required').positive().integer(),
            previousPrice: Yup.number().integer(),
            categories: Yup.string().required('Required'),
            imageUrls: Yup.array()
                .required('Required')
                .of(Yup.string().required('Required').min(15, 'Must be 15 characters or more')),
            quantity: Yup.number().required('Required').positive().integer(),
            fabric: Yup.string().required('Required'),
            color: Yup.string(),
            size: Yup.string(),
            itemNo: Yup.string(),
        }),
        onSubmit: (values) => {
            const {
                enabled,
                name,
                isNew,
                currentPrice,
                previousPrice,
                categories,
                imageUrls,
                quantity,
                fabric,
                color,
                size,
                itemNo,
            } = values;
            const data = {
                enabled,
                isNew,
                name,
                currentPrice: Number(currentPrice),
                previousPrice: Number(previousPrice),
                categories,
                imageUrls,
                quantity: Number(quantity),
                fabric,
                color,
                size,
                itemNo,
            };
            setIsLoaded(false);
            if (type !== 'edit') {
                addNewProduct(data).then(() => setIsLoaded(true));
            } else {
                updateOneProduct(product._id, data);
            }
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
        <div className={adminPanelStyles.wrapper}>
            <h2 className="h2">
                {type !== 'edit' ? 'add new product' : `edit ${product.name} №${product.itemNo}`}
            </h2>
            <form onSubmit={formik.handleSubmit} className={adminPanelStyles.form}>
                <input name="enabled" type="hidden" value={formik.values.name} />
                <input name="itemNo" type="hidden" value={formik.values.itemNo} />
                <input name="isNew" type="hidden" value={formik.values.isNew} />
                <label className={adminPanelStyles.formLabel} htmlFor="name">
                    add product name
                </label>
                {formik.touched.name && formik.errors.name ? (
                    <div className={adminPanelStyles.formError}>{formik.errors.name}</div>
                ) : null}
                <input
                    id="name"
                    name="name"
                    type="text"
                    className={adminPanelStyles.formInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    autoComplete="off"
                    placeholder="Linen"
                />
                <label className={adminPanelStyles.formLabel} htmlFor="currentPrice">
                    add current price
                </label>
                {formik.touched.currentPrice && formik.errors.currentPrice ? (
                    <div className={adminPanelStyles.formError}>{formik.errors.currentPrice}</div>
                ) : null}
                <input
                    id="currentPrice"
                    name="currentPrice"
                    type="text"
                    className={adminPanelStyles.formInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.currentPrice}
                    autoComplete="off"
                />
                <label className={adminPanelStyles.formLabel} htmlFor="previousPrice">
                    add previous price (optional)
                </label>
                {formik.touched.previousPrice && formik.errors.previousPrice ? (
                    <div className={adminPanelStyles.formError}>{formik.errors.previousPrice}</div>
                ) : null}
                <input
                    id="previousPrice"
                    name="previousPrice"
                    type="text"
                    className={adminPanelStyles.formInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.previousPrice}
                    autoComplete="off"
                />
                <label className={adminPanelStyles.formLabel} htmlFor="categories">
                    select product&rsquo;s category
                </label>
                {formik.touched.categories && formik.errors.categories ? (
                    <div className={adminPanelStyles.formError}>{formik.errors.categories}</div>
                ) : null}
                <select
                    id="categories"
                    name="categories"
                    className={adminPanelStyles.formSelect}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.categories}
                >
                    <option value="">Select category</option>
                    <option value="bedroom">Bedroom</option>
                    <option value="bed linen">Bed linen</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="bathroom">Bathroom</option>
                    <option value="loungewear">Loungewear</option>
                    <option value="Sale">Sale</option>
                </select>

                <label className={adminPanelStyles.formLabel} htmlFor="imageUrls">
                    add product image URL&rsquo;s
                </label>
                {formik.touched.imageUrls && formik.errors.imageUrls ? (
                    <div className={adminPanelStyles.formError}>{formik.errors.imageUrls[0]}</div>
                ) : null}
                <input
                    id="imageUrls"
                    name="imageUrls[0]"
                    type="text"
                    className={classNames(
                        adminPanelStyles.formInput,
                        adminPanelStyles.formInputUrl,
                    )}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.imageUrls[0]}
                    autoComplete="off"
                    placeholder="https://res.cloudinary.com/url-1"
                />
                {formik.touched.imageUrls && formik.errors.imageUrls ? (
                    <div className={adminPanelStyles.formError}>{formik.errors.imageUrls[1]}</div>
                ) : null}
                <input
                    id="imageUrls"
                    name="imageUrls[1]"
                    type="text"
                    className={classNames(
                        adminPanelStyles.formInput,
                        adminPanelStyles.formInputUrl,
                    )}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.imageUrls[1]}
                    autoComplete="off"
                    placeholder="https://res.cloudinary.com/url-2"
                />
                {formik.touched.imageUrls && formik.errors.imageUrls ? (
                    <div className={adminPanelStyles.formError}>{formik.errors.imageUrls[2]}</div>
                ) : null}
                <input
                    id="imageUrls"
                    name="imageUrls[2]"
                    type="text"
                    className={classNames(
                        adminPanelStyles.formInput,
                        adminPanelStyles.formInputUrl,
                    )}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.imageUrls[2]}
                    autoComplete="off"
                    placeholder="https://res.cloudinary.com/url-3"
                />
                <label className={adminPanelStyles.formLabel} htmlFor="quantity">
                    add product quantity
                </label>
                {formik.touched.quantity && formik.errors.quantity ? (
                    <div className={adminPanelStyles.formError}>{formik.errors.quantity}</div>
                ) : null}
                <input
                    id="quantity"
                    name="quantity"
                    type="text"
                    className={adminPanelStyles.formInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.quantity}
                    autoComplete="off"
                />

                <label className={adminPanelStyles.formLabel} htmlFor="fabric">
                    select product&rsquo;s fabric
                </label>
                {formik.touched.fabric && formik.errors.fabric ? (
                    <div className={adminPanelStyles.formError}>{formik.errors.fabric}</div>
                ) : null}
                <select
                    id="fabric"
                    name="fabric"
                    className={adminPanelStyles.formSelect}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fabric}
                >
                    <option value="">Select fabric</option>
                    <option value="cotton">Cotton</option>
                    <option value="cashemire">Cashemire</option>
                    <option value="satin">Satin</option>
                    <option value="silk">Silk</option>
                    <option value="viscose">Viscose</option>
                    <option value="linen">Linen</option>
                </select>
                <label className={adminPanelStyles.formLabel} htmlFor="color">
                    select product&rsquo;s color (optional)
                </label>
                {formik.touched.color && formik.errors.color ? (
                    <div className={adminPanelStyles.formError}>{formik.errors.color}</div>
                ) : null}
                <select
                    id="color"
                    name="color"
                    className={adminPanelStyles.formSelect}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.color}
                >
                    <option value="">Select color</option>
                    <option value="#C96456">Salmon</option>
                    <option value="#957157">BurlyWood</option>
                    <option value="#E6C463">LightGold</option>
                    <option value="#E4CFCC">LemonChiffon</option>
                    <option value="#DBC6BF">Lavender</option>
                    <option value="#F2DED0">PapayaWhip</option>
                    <option value="#5A5D51">Gray</option>
                    <option value="#6E7181">LightSlateGray</option>
                    <option value="#99B5BB">LightSteelBlue</option>
                    <option value="#A1ADB0">PapayaWhip</option>
                    <option value="#A9AAAC">Silver</option>
                    <option value="#C92B56">PaleVioletRed</option>
                </select>
                <label className={adminPanelStyles.formLabel} htmlFor="size">
                    select product&rsquo;s size (optional)
                </label>
                {formik.touched.size && formik.errors.size ? (
                    <div className={adminPanelStyles.formError}>{formik.errors.size}</div>
                ) : null}
                <select
                    id="size"
                    name="size"
                    className={adminPanelStyles.formSelect}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.size}
                >
                    <option value="">Select size</option>
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="queen">Queen</option>
                    <option value="king">King</option>
                </select>
                <div className={adminPanelStyles.formButtons}>
                    <button type="submit" className={adminPanelStyles.formSubmitBtn}>
                        {type !== 'edit' ? 'Add product' : 'Edit product'}
                    </button>
                    <button
                        onClick={() =>
                            formik.resetForm({
                                values: {
                                    enabled: true,
                                    name: '',
                                    currentPrice: 0,
                                    previousPrice: 0,
                                    categories: '',
                                    imageUrls: ['', '', ''],
                                    quantity: 0,
                                    fabric: '',
                                    color: '',
                                    size: '',
                                    itemNo: formik.values.itemNo,
                                },
                            })
                        }
                        type="reset"
                        className={adminPanelStyles.formResetBtn}
                    >
                        Reset Changes
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AdminProductsActions;

AdminProductsActions.propTypes = {
    type: PropTypes.string,
};

AdminProductsActions.defaultProps = {
    type: '',
};
