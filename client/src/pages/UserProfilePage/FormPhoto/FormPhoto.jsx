import React from 'react';
import PropTypes from 'prop-types';
import styles from '../UserProfilePage.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from 'components/Button';
import updateCustomer from 'api/updateCustomer';
function FormPhoto({ setUser, editUser }) {
    const { editUserData, setEditUserData } = editUser;
    const REGEX_IMAGE_URL =
        // eslint-disable-next-line
        /^http[s]?:\/(?:\/[^\/]+){1,}(?:\/[А-Яа-яёЁ\S ]+\.[a-z]{3,5}(?![\/]|[\wА-Яа-яёЁ]))$/;

    const formik = useFormik({
        initialValues: {
            avatarUrl: '',
        },
        validationSchema: Yup.object({
            avatarUrl: Yup.string().matches(REGEX_IMAGE_URL, 'No valid link'),
        }),
        onSubmit: (values) => {
            updateCustomer(values).then((res) => (res ? setUser(res.data) : null));
            setEditUserData({ ...editUserData, photo: false });
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={styles.formPhoto}>
            <label className={styles.personalDataItem}>
                {formik.errors.avatarUrl && formik.touched.avatarUrl ? (
                    <p>{formik.errors.avatarUrl}</p>
                ) : null}
                <span className={styles.personalDataPlaseholder}> Enter the image Url</span>
                <input
                    name="avatarUrl"
                    type="text"
                    placeholder="https://image.com/your_image.png"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.avatarUrl}
                />
            </label>
            <Button
                className={styles.editBtn}
                type="submit"
                text="CHANGE"
                handleClick={formik.handleSubmit}
            />
        </form>
    );
}
export default FormPhoto;

FormPhoto.propTypes = {
    editUser: PropTypes.object,
    setUser: PropTypes.func,
};
FormPhoto.defaultProps = {
    editUser: {},
};
