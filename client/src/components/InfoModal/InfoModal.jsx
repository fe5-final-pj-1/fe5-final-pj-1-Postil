import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './InfoModal.module.scss';
import Button from '../Button';
import Icon from '../Icon';
import { shallowEqual, useSelector } from 'react-redux';

const InfoModal = ({ text, isOpen, closeModal }) => {
    const isLogIn = useSelector((state) => state.store.login.isLogIn, shallowEqual);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                closeModal();
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [closeModal, isOpen]);

    if (isLogIn) {
        text = 'You are already registered!';
    } else {
        text = 'Thank you for registering!';
    }

    return (
        isOpen && (
            <div className={styles.infoBody}>
                <Button
                    className={styles.close}
                    text={<Icon type="miniClose" />}
                    handleClick={() => closeModal()}
                />
                {text}
            </div>
        )
    );
};

export default InfoModal;

InfoModal.propTypes = {
    text: PropTypes.string,
    isOpen: PropTypes.bool,
    closeModal: PropTypes.func,
};
InfoModal.defaultProps = {
    text: '',
    isOpen: false,
};
