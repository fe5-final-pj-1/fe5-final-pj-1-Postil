import React from 'react';
import PropTypes from 'prop-types';

function Icon(props) {
    const { type } = props;

    switch (type) {
        case 'facebook':
            return (
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M26.25 0H3.75C1.68125 0 0 1.68125 0 3.75V26.25C0 28.3175 1.68125 30 3.75 30H26.25C28.3175 30 30 28.3175 30 26.25V3.75C30 1.68125 28.3175 0 26.25 0Z"
                        fill="#3B5999"
                    />
                    <path
                        d="M20.625 14V10.25C20.625 9.215 21.465 9.3125 22.5 9.3125H24.375V4.625H20.625C17.5175 4.625 15 7.1425 15 10.25V14H11.25V18.6875H15V29H20.625V18.6875H23.4375L25.3125 14H20.625Z"
                        fill="white"
                    />
                </svg>
            );
        case 'google':
            return (
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.64867 18.1298L5.60441 22.0282L1.78765 22.109C0.646996 19.9933 0 17.5727 0 15.0005C0 12.5131 0.604926 10.1674 1.6772 8.10205H1.67802L5.07601 8.72502L6.56453 12.1026C6.25299 13.0109 6.08318 13.9859 6.08318 15.0005C6.0833 16.1016 6.28275 17.1565 6.64867 18.1298Z"
                        fill="#FBBB00"
                    />
                    <path
                        d="M29.7376 12.1978C29.9098 13.1051 29.9997 14.0422 29.9997 15C29.9997 16.0739 29.8868 17.1214 29.6717 18.1319C28.9415 21.5704 27.0335 24.5728 24.3903 26.6976L24.3895 26.6968L20.1096 26.4784L19.5038 22.697C21.2577 21.6684 22.6283 20.0588 23.3503 18.1319H15.3293V12.1978H23.4673H29.7376Z"
                        fill="#518EF8"
                    />
                    <path
                        d="M24.3899 26.6972L24.3907 26.698C21.8202 28.7642 18.5547 30.0005 15 30.0005C9.28764 30.0005 4.32115 26.8077 1.7876 22.109L6.64862 18.1299C7.91537 21.5106 11.1767 23.9173 15 23.9173C16.6434 23.9173 18.1831 23.473 19.5042 22.6975L24.3899 26.6972Z"
                        fill="#28B446"
                    />
                    <path
                        d="M24.5749 3.4533L19.7155 7.43161C18.3482 6.57696 16.732 6.08324 15.0004 6.08324C11.0905 6.08324 7.76817 8.60027 6.56488 12.1023L1.67831 8.10169H1.67749C4.17395 3.28848 9.20308 0 15.0004 0C18.64 0 21.9771 1.29645 24.5749 3.4533Z"
                        fill="#F14336"
                    />
                </svg>
            );
        case 'close':
            return (
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.78267 7.50259L0.143033 14.1889C-0.0414274 14.3746 -0.0414274 14.6756 0.143033 14.8613C0.235146 14.9543 0.356088 15.0006 0.476796 15.0006C0.597738 15.0006 0.718446 14.9543 0.810559 14.8613L7.50012 8.12477L14.1897 14.8613C14.282 14.9543 14.4027 15.0006 14.5234 15.0006C14.6441 15.0006 14.7651 14.9543 14.8572 14.8613C15.0417 14.6756 15.0417 14.3746 14.8572 14.1889L8.2178 7.50259L14.8617 0.811592C15.0461 0.625836 15.0461 0.324896 14.8617 0.13914C14.6772 -0.0463801 14.3784 -0.0463801 14.1941 0.13914L7.50035 6.88042L0.805871 0.139376C0.621411 -0.046144 0.322806 -0.046144 0.138345 0.139376C-0.0461151 0.325132 -0.0461151 0.626072 0.138345 0.811828L6.78267 7.50259Z"
                        fill="#373F41"
                    />
                </svg>
            );
        case 'plus':
            return (
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 0H6V6H0V8H6V14H8V8H14V6H8V0Z"
                        fill="#373F41"
                    />
                </svg>
            );
        case 'minus':
            return (
                <svg
                    width="14"
                    height="2"
                    viewBox="0 0 14 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 0H14V2H0V0Z" fill="#373F41" />
                </svg>
            );
        default:
            return null;
    }
}

Icon.propTypes = {
    type: PropTypes.string,
};

export default Icon;
