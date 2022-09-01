import React from 'react';
import styles from './style.module.scss';
import { ThemeProps } from 'types/Props';

interface Props extends ThemeProps {
  isInvert?: boolean;
}

const AndroidIcon: React.FC<Props> = props => {
  let containerClassName = `${styles.container}`;
  if (props.isInvert) {
    containerClassName += ` ${styles.invert}`;
  }

  return (
    <div className={containerClassName}>
      <svg x="0px" y="0px" viewBox="0 0 512.12 512.12">
        <g>
          <path
            className={`${styles.body} ${styles[props.theme]}`}
            d="M74.727,170.787c-17.673,0-32,14.327-32,32V352.12c0,17.673,14.327,32,32,32s32-14.327,32-32
		V202.787C106.727,185.114,92.4,170.787,74.727,170.787z"
          />
          <path
            className={`${styles.body} ${styles[props.theme]}`}
            d="M437.393,170.787c-17.673,0-32,14.327-32,32V352.12c0,17.673,14.327,32,32,32s32-14.327,32-32
		V202.787C469.393,185.114,455.067,170.787,437.393,170.787z"
          />
          <path
            className={`${styles.body} ${styles[props.theme]}`}
            d="M373.393,170.787H138.727c-5.891,0-10.667,4.776-10.667,10.667V352.12
		c-0.005,25.348,17.831,47.197,42.667,52.267v75.733c0,17.673,14.327,32,32,32s32-14.327,32-32v-74.667h42.667v74.667
		c0,17.673,14.327,32,32,32s32-14.327,32-32v-75.733c24.836-5.07,42.672-26.919,42.667-52.267V181.454
		C384.06,175.563,379.284,170.787,373.393,170.787z"
          />
          <path
            className={`${styles.body} ${styles[props.theme]}`}
            d="M333.607,44.323l26.005-25.984c4.237-4.093,4.354-10.845,0.262-15.083
		c-4.093-4.237-10.845-4.354-15.083-0.262c-0.089,0.086-0.176,0.173-0.262,0.262L314.236,33.55
		c-37.102-16.117-79.229-16.117-116.331,0L167.612,3.235c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82
		l25.984,26.005c-31.677,20.96-50.649,56.481-50.453,94.464c0,5.891,4.776,10.667,10.667,10.667h234.667
		c5.891,0,10.667-4.776,10.667-10.667C384.256,100.804,365.284,65.283,333.607,44.323z"
          />
        </g>
        <g>
          <circle
            className={`${styles.eye} ${styles[props.theme]}`}
            cx="202.727"
            cy="96.12"
            r="10.667"
          />
          <circle
            className={`${styles.eye} ${styles[props.theme]}`}
            cx="309.393"
            cy="96.12"
            r="10.667"
          />
        </g>
      </svg>
    </div>
  );
};

export default AndroidIcon;
