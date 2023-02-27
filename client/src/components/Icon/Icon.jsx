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
        case 'arrowLeft':
            return (
                <svg
                    width="10"
                    height="15"
                    viewBox="0 0 10 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9 1L1 8L9 14.5" stroke="#373F41" />
                </svg>
            );
        case 'arrowRight':
            return (
                <svg
                    width="10"
                    height="15"
                    viewBox="0 0 10 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1 1L9 8L1 14.5" stroke="#373F41" />
                </svg>
            );
        case 'FacebookMin':
            return (
                <svg
                    width="10"
                    height="19"
                    viewBox="0 0 10 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.4908 19V10.3333H9.43919L9.8806 6.95561H6.4908V4.79914C6.4908 3.82123 6.76599 3.15484 8.18727 3.15484L10 3.154V0.133076C9.68641 0.091988 8.61041 0 7.35858 0C4.74505 0 2.95586 1.57403 2.95586 4.46473V6.95561H0V10.3333H2.95586V19H6.4908Z"
                        fill="#373F41"
                    />
                </svg>
            );
        case 'TwitterMin':
            return (
                <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.4484 0.31428C18.6548 0.805581 17.778 1.16289 16.8408 1.35407C16.0943 0.520714 15.0274 0 13.8462 0C11.582 0 9.74448 1.92163 9.74448 4.29153C9.74448 4.62814 9.77972 4.95441 9.85021 5.26869C6.44007 5.08949 3.41708 3.38301 1.39214 0.783249C1.03864 1.41944 0.836782 2.15748 0.836782 2.94345C0.836782 4.43151 1.56089 5.74528 2.66254 6.51491C1.99076 6.49422 1.3569 6.29922 0.802606 5.98004V6.03233C0.802606 8.11246 2.21718 9.84781 4.0958 10.2405C3.7519 10.3413 3.38878 10.3919 3.01444 10.3919C2.75011 10.3919 2.49219 10.3658 2.24228 10.3157C2.76453 12.02 4.27896 13.2613 6.07481 13.2945C4.67092 14.446 2.9007 15.1323 0.978827 15.1323C0.647745 15.1323 0.320402 15.1127 0 15.0735C1.81561 16.2892 3.97351 17 6.29002 17C13.8381 17 17.9644 10.4617 17.9644 4.78991C17.9644 4.60309 17.9612 4.41681 17.9542 4.2338C18.7558 3.62866 19.4521 2.87319 20 2.01259C19.2652 2.35356 18.4738 2.58451 17.644 2.68799C18.4914 2.15748 19.1419 1.31649 19.4484 0.31428Z"
                        fill="#373F41"
                    />
                </svg>
            );
        case 'InstagramMin':
            return (
                <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.7445 5.46323C17.7345 4.71453 17.5943 3.97327 17.3303 3.27261C17.1013 2.68161 16.7515 2.14487 16.3033 1.69669C15.8552 1.24852 15.3184 0.898755 14.7274 0.669757C14.0358 0.410121 13.3051 0.269731 12.5664 0.254566C11.6155 0.212058 11.314 0.200195 8.89991 0.200195C6.48587 0.200195 6.17646 0.200195 5.23239 0.254566C4.4941 0.269843 3.76375 0.410231 3.07241 0.669757C2.48132 0.898595 1.9445 1.2483 1.4963 1.6965C1.0481 2.14469 0.6984 2.68151 0.469561 3.27261C0.209405 3.96373 0.0693202 4.69425 0.0553588 5.43259C0.0128511 6.38456 0 6.68607 0 9.10011C0 11.5141 -7.36527e-09 11.8226 0.0553588 12.7676C0.070187 13.5071 0.209572 14.2366 0.469561 14.9296C0.698784 15.5205 1.04875 16.0571 1.4971 16.5051C1.94544 16.9531 2.48231 17.3027 3.0734 17.5314C3.76285 17.8015 4.49333 17.952 5.23338 17.9763C6.18536 18.0188 6.48686 18.0317 8.9009 18.0317C11.3149 18.0317 11.6244 18.0317 12.5684 17.9763C13.307 17.9618 14.0378 17.8217 14.7294 17.5621C15.3202 17.3328 15.8568 16.983 16.305 16.5348C16.7531 16.0867 17.103 15.5501 17.3322 14.9592C17.5922 14.2673 17.7316 13.5377 17.7464 12.7973C17.789 11.8463 17.8018 11.5448 17.8018 9.12976C17.7998 6.71573 17.7998 6.40928 17.7445 5.46323V5.46323ZM8.89398 13.6652C6.36923 13.6652 4.32392 11.6199 4.32392 9.09517C4.32392 6.57041 6.36923 4.5251 8.89398 4.5251C10.106 4.5251 11.2685 5.00659 12.1255 5.86364C12.9826 6.7207 13.464 7.88311 13.464 9.09517C13.464 10.3072 12.9826 11.4696 12.1255 12.3267C11.2685 13.1837 10.106 13.6652 8.89398 13.6652V13.6652ZM13.6459 5.42171C13.0558 5.42171 12.5803 4.94523 12.5803 4.35606C12.5803 4.21618 12.6078 4.07767 12.6614 3.94844C12.7149 3.81921 12.7934 3.70178 12.8923 3.60287C12.9912 3.50397 13.1086 3.42551 13.2378 3.37198C13.3671 3.31845 13.5056 3.2909 13.6454 3.2909C13.7853 3.2909 13.9238 3.31845 14.0531 3.37198C14.1823 3.42551 14.2997 3.50397 14.3986 3.60287C14.4975 3.70178 14.576 3.81921 14.6295 3.94844C14.6831 4.07767 14.7106 4.21618 14.7106 4.35606C14.7106 4.94523 14.2341 5.42171 13.6459 5.42171Z"
                        fill="#373F41"
                    />
                    <path
                        d="M8.89391 12.0637C10.5334 12.0637 11.8625 10.7346 11.8625 9.09508C11.8625 7.45556 10.5334 6.12646 8.89391 6.12646C7.25439 6.12646 5.92529 7.45556 5.92529 9.09508C5.92529 10.7346 7.25439 12.0637 8.89391 12.0637Z"
                        fill="#373F41"
                    />
                </svg>
            );
        case 'favorites':
            return (
                <svg
                    width="21"
                    height="19"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.5 18L10.1647 17.7138C2.95588 11.7037 1 9.58586 1 6.15151C1 3.28956 3.23529 1 6.02941 1C8.32059 1 9.60588 2.3165 10.5 3.3468C11.3941 2.3165 12.6794 1 14.9706 1C17.7647 1 20 3.28956 20 6.15151C20 9.58586 18.0441 11.7037 10.8353 17.7138L10.5 18Z"
                        stroke="#373F41"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case 'arrowDown':
            return (
                <svg
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 1L6.5 7.5L12 1"
                        stroke="#373F41"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case 'logo':
            return (
                <svg
                    width="66"
                    height="41"
                    viewBox="0 0 66 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <mask
                        id="mask0_237_944"
                        style={{ maskType: 'alpha', width: '66px', height: '41px' }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                    >
                        <rect width="66" height="41" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_237_944)">
                        <rect
                            x="-29"
                            y="-11"
                            style={{ width: '120px', height: '63px' }}
                            fill="white"
                        />
                        <path
                            d="M1.6092 11.488L1.6572 11.2H6.6492C8.6172 11.2 10.0732 11.536 11.0172 12.208C11.9772 12.88 12.4572 14.152 12.4572 16.024C12.4572 17.88 11.9612 19.256 10.9692 20.152C9.9932 21.032 8.5532 21.472 6.6492 21.472H4.8012V27.544L6.4572 27.64C6.4572 27.656 6.4492 27.776 6.4332 28L1.6332 28.024C1.6332 27.88 1.6412 27.768 1.6572 27.688L2.9052 27.52C3.0172 27.504 3.1052 27.432 3.1692 27.304V11.944C3.1052 11.8 3.0172 11.72 2.9052 11.704L1.6332 11.56C1.6172 11.544 1.6092 11.52 1.6092 11.488ZM6.5292 11.56H4.8012V21.112H6.5292C7.9692 21.112 9.0412 20.728 9.7452 19.96C10.4652 19.192 10.8252 17.912 10.8252 16.12C10.8252 14.312 10.4732 13.104 9.7692 12.496C9.0652 11.872 7.9852 11.56 6.5292 11.56ZM18.4015 28.096C16.7375 28.096 15.3855 27.616 14.3455 26.656C13.3215 25.696 12.8095 24.232 12.8095 22.264C12.8095 20.28 13.3535 18.728 14.4415 17.608C15.5455 16.472 16.9295 15.904 18.5935 15.904C20.2575 15.904 21.6095 16.384 22.6495 17.344C23.6895 18.304 24.2095 19.776 24.2095 21.76C24.2095 23.728 23.6575 25.28 22.5535 26.416C21.4655 27.536 20.0815 28.096 18.4015 28.096ZM18.5695 16.336C17.3695 16.336 16.3695 16.856 15.5695 17.896C14.7695 18.936 14.3695 20.352 14.3695 22.144C14.3695 23.92 14.7455 25.288 15.4975 26.248C16.2655 27.192 17.2495 27.664 18.4495 27.664C19.6495 27.664 20.6495 27.144 21.4495 26.104C22.2495 25.064 22.6495 23.656 22.6495 21.88C22.6495 20.104 22.2655 18.736 21.4975 17.776C20.7455 16.816 19.7695 16.336 18.5695 16.336ZM29.6678 27.712C29.7638 27.712 29.8598 27.704 29.9558 27.688C30.7878 27.672 31.4838 27.416 32.0438 26.92C32.6038 26.408 32.8838 25.664 32.8838 24.688C32.8838 23.728 32.1318 23.032 30.6278 22.6C30.0038 22.424 29.3798 22.232 28.7558 22.024C28.1318 21.816 27.5958 21.488 27.1478 21.04C26.7158 20.592 26.4998 20.008 26.4998 19.288C26.4998 18.264 26.8918 17.448 27.6758 16.84C28.4598 16.216 29.4518 15.904 30.6518 15.904C31.5478 15.904 32.4518 16.064 33.3638 16.384L33.7958 16.552V19.312L33.3398 19.48L33.2438 17.44C32.3158 16.704 31.5398 16.336 30.9158 16.336C30.0358 16.336 29.3398 16.6 28.8278 17.128C28.3158 17.64 28.0598 18.328 28.0598 19.192C28.0598 19.688 28.2758 20.088 28.7078 20.392C29.1558 20.696 29.6918 20.936 30.3158 21.112C30.9398 21.288 31.5638 21.488 32.1878 21.712C32.8118 21.92 33.3398 22.272 33.7718 22.768C34.2198 23.248 34.4438 23.88 34.4438 24.664C34.4438 25.72 34.0438 26.56 33.2438 27.184C32.4598 27.792 31.3398 28.096 29.8838 28.096C28.4278 28.096 27.2198 27.752 26.2598 27.064V24.304L26.6918 24.136L26.8118 26.176C27.0358 26.592 27.4358 26.952 28.0118 27.256C28.6038 27.56 29.1558 27.712 29.6678 27.712ZM41.2943 27.544L42.2303 27.496L42.3023 27.736C42.2863 27.736 42.1743 27.76 41.9663 27.808C41.4863 27.92 40.9503 27.976 40.3583 27.976C39.8143 27.944 39.3183 27.856 38.8703 27.712C38.4223 27.552 38.0063 27.232 37.6223 26.752C37.2383 26.256 37.0463 25.624 37.0463 24.856V16.432H35.8223L36.0143 16.24L37.0703 16.024L37.2623 13.72L38.6063 13.6V16H41.5103V16.432H38.6063V24.448C38.6063 25.664 38.8623 26.488 39.3743 26.92C39.8863 27.336 40.5263 27.544 41.2943 27.544ZM46.6416 16.984V27.52L48.4416 27.64C48.4416 27.656 48.4336 27.776 48.4176 28L43.6176 28.024C43.6176 27.88 43.6256 27.768 43.6416 27.688L44.8896 27.52C44.9856 27.52 45.0496 27.448 45.0816 27.304V16.768C45.0496 16.656 45.0016 16.6 44.9376 16.6L43.4976 16.552L43.5216 16.216C44.3856 16.072 45.0416 16 45.4896 16C45.9376 16 46.2416 16.104 46.4016 16.312C46.5616 16.52 46.6416 16.744 46.6416 16.984ZM45.8256 12.784C45.5056 12.784 45.2576 12.688 45.0816 12.496C44.9056 12.288 44.8176 12.024 44.8176 11.704C44.8176 11.368 44.9056 11.104 45.0816 10.912C45.2736 10.704 45.5296 10.6 45.8496 10.6C46.1696 10.6 46.4256 10.704 46.6176 10.912C46.8256 11.104 46.9296 11.376 46.9296 11.728C46.9296 12.064 46.8256 12.328 46.6176 12.52C46.4096 12.696 46.1456 12.784 45.8256 12.784ZM50.2504 28.024L50.2744 27.688L51.5224 27.52C51.6344 27.504 51.7064 27.424 51.7384 27.28V10.864C51.7384 10.688 51.6904 10.6 51.5944 10.6L50.1304 10.552L50.1544 10.216C51.1624 10.072 51.8504 10 52.2184 10C52.6024 10 52.8744 10.104 53.0344 10.312C53.2104 10.52 53.2984 10.744 53.2984 10.984V27.52L55.0984 27.64C55.0984 27.656 55.0904 27.776 55.0744 28L50.2504 28.024ZM57.9458 13.648L57.9698 12.568V11.68C57.9698 11.36 57.9618 11.08 57.9458 10.84L59.0018 10.768C58.9858 11.6 58.9378 12.28 58.8578 12.808C58.7938 13.32 58.7618 13.584 58.7618 13.6L57.9458 13.648Z"
                            fill="black"
                        />
                        <path
                            d="M3.37565 38V34.028H5.15765C5.46965 34.028 5.71565 34.082 5.89565 34.19C6.07965 34.298 6.21165 34.434 6.29165 34.598C6.37165 34.758 6.41165 34.918 6.41165 35.078C6.41165 35.334 6.35765 35.532 6.24965 35.672C6.14165 35.808 6.01765 35.908 5.87765 35.972C5.98965 36.008 6.10165 36.066 6.21365 36.146C6.32965 36.222 6.42565 36.326 6.50165 36.458C6.57765 36.59 6.61565 36.756 6.61565 36.956C6.61565 37.252 6.50165 37.5 6.27365 37.7C6.04965 37.9 5.71165 38 5.25965 38H3.37565ZM3.82565 35.804H5.15765C5.29765 35.804 5.42765 35.78 5.54765 35.732C5.67165 35.684 5.77165 35.61 5.84765 35.51C5.92365 35.406 5.96165 35.274 5.96165 35.114C5.96165 35.002 5.93565 34.896 5.88365 34.796C5.83565 34.696 5.75565 34.614 5.64365 34.55C5.53565 34.486 5.38965 34.454 5.20565 34.454H3.82565V35.804ZM3.82565 37.574H5.30765C5.57965 37.574 5.78965 37.518 5.93765 37.406C6.08965 37.29 6.16565 37.128 6.16565 36.92C6.16565 36.732 6.09365 36.568 5.94965 36.428C5.80565 36.284 5.57565 36.212 5.25965 36.212H3.82565V37.574ZM8.3483 38V34.028H11.2703V34.46H8.7983V35.792H11.0063V36.23H8.7983V37.568H11.2703V38H8.3483ZM12.9987 38V34.028H14.6727C14.9087 34.028 15.1347 34.074 15.3507 34.166C15.5707 34.254 15.7667 34.384 15.9387 34.556C16.1107 34.728 16.2467 34.936 16.3467 35.18C16.4467 35.424 16.4967 35.702 16.4967 36.014C16.4967 36.326 16.4467 36.604 16.3467 36.848C16.2467 37.092 16.1107 37.3 15.9387 37.472C15.7667 37.644 15.5707 37.776 15.3507 37.868C15.1347 37.956 14.9087 38 14.6727 38H12.9987ZM13.4487 37.574H14.6547C14.9387 37.574 15.1847 37.502 15.3927 37.358C15.6007 37.214 15.7607 37.024 15.8727 36.788C15.9887 36.552 16.0467 36.294 16.0467 36.014C16.0467 35.73 15.9887 35.47 15.8727 35.234C15.7607 34.998 15.6007 34.81 15.3927 34.67C15.1847 34.526 14.9387 34.454 14.6547 34.454H13.4487V37.574ZM18.2174 38V34.028H19.8914C20.1274 34.028 20.3534 34.074 20.5694 34.166C20.7894 34.254 20.9854 34.384 21.1574 34.556C21.3294 34.728 21.4654 34.936 21.5654 35.18C21.6654 35.424 21.7154 35.702 21.7154 36.014C21.7154 36.326 21.6654 36.604 21.5654 36.848C21.4654 37.092 21.3294 37.3 21.1574 37.472C20.9854 37.644 20.7894 37.776 20.5694 37.868C20.3534 37.956 20.1274 38 19.8914 38H18.2174ZM18.6674 37.574H19.8734C20.1574 37.574 20.4034 37.502 20.6114 37.358C20.8194 37.214 20.9794 37.024 21.0914 36.788C21.2074 36.552 21.2654 36.294 21.2654 36.014C21.2654 35.73 21.2074 35.47 21.0914 35.234C20.9794 34.998 20.8194 34.81 20.6114 34.67C20.4034 34.526 20.1574 34.454 19.8734 34.454H18.6674V37.574ZM23.4362 38V34.028H23.8862V38H23.4362ZM25.86 38V34.028H26.382L28.836 37.37V34.028H29.286V38H28.764L26.31 34.646V38H25.86ZM32.9524 38.048C32.5484 38.048 32.2004 37.958 31.9084 37.778C31.6204 37.594 31.3984 37.348 31.2424 37.04C31.0864 36.732 31.0084 36.39 31.0084 36.014C31.0084 35.638 31.0884 35.296 31.2484 34.988C31.4084 34.68 31.6344 34.436 31.9264 34.256C32.2224 34.072 32.5684 33.98 32.9644 33.98C33.3924 33.98 33.7624 34.086 34.0744 34.298C34.3904 34.506 34.6224 34.776 34.7704 35.108H34.2784C34.1584 34.896 33.9904 34.728 33.7744 34.604C33.5624 34.48 33.3044 34.418 33.0004 34.418C32.6804 34.418 32.4044 34.49 32.1724 34.634C31.9404 34.774 31.7624 34.964 31.6384 35.204C31.5184 35.444 31.4584 35.714 31.4584 36.014C31.4584 36.31 31.5184 36.58 31.6384 36.824C31.7584 37.064 31.9324 37.256 32.1604 37.4C32.3924 37.54 32.6684 37.61 32.9884 37.61C33.2284 37.61 33.4544 37.558 33.6664 37.454C33.8824 37.35 34.0564 37.2 34.1884 37.004C34.3244 36.808 34.3924 36.572 34.3924 36.296H32.9404V35.888H34.8064V38H34.3924V37.298C34.3084 37.426 34.2004 37.548 34.0684 37.664C33.9364 37.776 33.7764 37.868 33.5884 37.94C33.4044 38.012 33.1924 38.048 32.9524 38.048Z"
                            fill="black"
                        />
                        <path d="M38 7.5V0.5H64.5V38.8604H38V32" stroke="black" />
                    </g>
                </svg>
            );
        case 'search':
            return (
                <svg
                    width="22"
                    height="19"
                    viewBox="0 0 22 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        y1="-0.75"
                        x2="8.70935"
                        y2="-0.75"
                        transform="matrix(0.803744 0.594976 -0.605019 0.796211 14 13.8179)"
                        stroke="#373F41"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M16.7502 8.2046C16.7502 12.2769 13.2147 15.6592 8.75011 15.6592C4.28556 15.6592 0.75 12.2769 0.75 8.2046C0.75 4.13228 4.28556 0.75 8.75011 0.75C13.2147 0.75 16.7502 4.13228 16.7502 8.2046Z"
                        stroke="#373F41"
                        strokeWidth="1.5"
                    />
                </svg>
            );
        case 'cart':
            return (
                <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.63636 5.38462C4.63636 5.38462 4.63636 1 9 1C13.3636 1 13.3636 5.38462 13.3636 5.38462M1 5.38462V20H17V5.38462H1Z"
                        stroke="#373F41"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case 'profile':
            return (
                <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 20.0002V17.7202C20 16.5108 19.4996 15.3509 18.6088 14.4958C17.718 13.6406 16.5098 13.1602 15.25 13.1602H5.75C4.49022 13.1602 3.28204 13.6406 2.39124 14.4958C1.50044 15.3509 1 16.5108 1 17.7202V20.0002"
                        stroke="#373F41"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10.5005 10.88C13.2288 10.88 15.4405 8.66829 15.4405 5.94C15.4405 3.21171 13.2288 1 10.5005 1C7.77226 1 5.56055 3.21171 5.56055 5.94C5.56055 8.66829 7.77226 10.88 10.5005 10.88Z"
                        stroke="#373F41"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
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
