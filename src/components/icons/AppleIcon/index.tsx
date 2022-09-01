import React from 'react';
import styles from './style.module.scss';
import { ThemeProps } from 'types/Props';

interface Props extends ThemeProps {
  isInvert?: boolean;
}

const AppleIcon: React.FC<Props> = props => {
  let containerClassName = `${styles.container}`;
  if (props.isInvert) {
    containerClassName += ` ${styles.invert}`;
  }
  return (
    <div className={containerClassName}>
      <svg x="0px" y="0px" viewBox="0 0 512 512">
        <g>
          <path
            className={`${styles.path} ${styles[props.theme]}`}
            d="M185.255,512c-76.201-0.439-139.233-155.991-139.233-235.21c0-129.404,97.075-157.734,134.487-157.734c16.86,0,34.863,6.621,50.742,12.48c11.104,4.087,22.588,8.306,28.975,8.306c3.823,0,12.832-3.589,20.786-6.738   c16.963-6.753,38.071-15.146,62.651-15.146c0.044,0,0.103,0,0.146,0c18.354,0,74.004,4.028,107.461,54.272l7.837,11.777   l-11.279,8.511c-16.113,12.158-45.513,34.336-45.513,78.267c0,52.031,33.296,72.041,49.292,81.665   c7.061,4.248,14.37,8.628,14.37,18.208c0,6.255-49.922,140.566-122.417,140.566c-17.739,0-30.278-5.332-41.338-10.034   c-11.191-4.761-20.845-8.862-36.797-8.862c-8.086,0-18.311,3.823-29.136,7.881C221.496,505.73,204.752,512,185.753,512H185.255z"
          />
          <path
            className={`${styles.path} ${styles[props.theme]}`}
            d="M351.343,0c1.888,68.076-46.797,115.304-95.425,112.342C247.905,58.015,304.54,0,351.343,0z"
          />
        </g>
      </svg>
    </div>
  );
};

export default AppleIcon;
