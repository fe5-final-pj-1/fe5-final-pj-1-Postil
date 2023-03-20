import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './InfoModal.module.scss';
import Button from '../Button';
import Icon from '../Icon';

const InfoModal = ({ text, isOpen, closeModal }) => {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                closeModal();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [closeModal, isOpen]);

    return (
        <div
            className={`${styles.infoBody} ${isOpen ? styles['block-show'] : styles['block-hide']}`}
        >
            <Button
                className={styles.close}
                text={<Icon type="miniClose" />}
                handleClick={() => closeModal()}
            />
            {text}
        </div>
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
