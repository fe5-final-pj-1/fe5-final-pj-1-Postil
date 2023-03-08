import React from 'react';
import Icon from 'components/Icon';

import styles from './ActionBtns.module.scss';

const ActionBtns = () => {
    return (
        <div className={styles.flexBlock}>
            <button className={styles.removeBtn}>
                <Icon type="bagRemoveBtn" />
            </button>
            <button className={styles.favBtn}>
                <span className={styles.favBtnTxt}>ADD TO FAVORITES</span>
                <Icon type="bagFavIcon" />
            </button>
        </div>
    );
};

export default ActionBtns;
