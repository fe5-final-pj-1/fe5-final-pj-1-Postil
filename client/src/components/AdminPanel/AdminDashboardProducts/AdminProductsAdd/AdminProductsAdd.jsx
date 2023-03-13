import React from 'react';
import adminPanelStyles from './AdminProductsAdd.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function AdminProductsAdd() {
    const formik = useFormik({
        initialValues: {
            name: '',
            currentPrice: 0,
            previousPrice: 0,
            categories: 'bedroom',
            imageUrls: [],
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .min(3, 'Must be 3 characters or more')
                .required('Required'),
            currentPrice: Yup.number().required('Required').positive().integer(),
            previousPrice: Yup.number().positive().integer(),
            categories: Yup.string(),
            imageUrls: Yup.array().required('Required'),
        }),
        onSubmit: (values) => {
            alert(values.name);
        },
    });
    return (
        <div className={adminPanelStyles.wrapper}>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Product Name</label>
                {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                <input
                    id="name"
                    name="name"
                    type="text"
                    className={adminPanelStyles.ProductInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                <label htmlFor="currentPrice">Current Price</label>
                {formik.touched.currentPrice && formik.errors.currentPrice ? (
                    <div>{formik.errors.currentPrice}</div>
                ) : null}
                <input
                    id="currentPrice"
                    name="currentPrice"
                    type="text"
                    className={adminPanelStyles.ProductInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.currentPrice}
                />
                <label htmlFor="previousPrice">Previous Price</label>
                {formik.touched.previousPrice && formik.errors.previousPrice ? (
                    <div>{formik.errors.previousPrice}</div>
                ) : null}
                <input
                    id="previousPrice"
                    name="previousPrice"
                    type="text"
                    className={adminPanelStyles.ProductInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.previousPrice}
                />
                <label htmlFor="categories">Select category</label>
                {formik.touched.categories && formik.errors.categories ? (
                    <div>{formik.errors.categories}</div>
                ) : null}
                <select
                    id="categories"
                    name="categories"
                    className={adminPanelStyles.ProductSelect}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.categories}
                >
                    <option value="bedroom" selected>
                        Bedroom
                    </option>
                    <option value="bed linen" selected>
                        Bed linen
                    </option>
                    <option value="kitchen" selected>
                        Kitchen
                    </option>
                    <option value="bathroom" selected>
                        Bathroom
                    </option>
                    <option value="loungewear" selected>
                        Loungewear
                    </option>
                    <option value="Sale" selected>
                        Sale
                    </option>
                </select>

                <label htmlFor="imageUrls">Add product image urls</label>
                {formik.touched.imageUrls && formik.errors.imageUrls ? (
                    <div>{formik.errors.imageUrls}</div>
                ) : null}
                <input
                    id="imageUrls"
                    name="imageUrls"
                    type="text"
                    className={adminPanelStyles.ProductInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.previousPrice}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AdminProductsAdd;
