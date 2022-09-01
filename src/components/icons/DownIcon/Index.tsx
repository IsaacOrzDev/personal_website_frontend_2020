import React from 'react';
import styles from './style.module.scss';
import { ThemeProps } from 'types/Props';

interface Props extends ThemeProps {}

const DownIcon: React.FC<Props> = props => {
  return (
    <div className={styles.container}>
      <svg x="0px" y="0px" viewBox="0 0 490.688 490.688">
        <path
          className={`${styles.path} ${styles[props.theme]}`}
          d="M245.213,469.415c-2.831,0.005-5.548-1.115-7.552-3.115L2.994,231.633c-4.093-4.237-3.975-10.99,0.262-15.083
	c4.134-3.992,10.687-3.992,14.82,0l227.136,227.115l227.115-227.136c4.237-4.093,10.99-3.975,15.083,0.262
	c3.993,4.134,3.993,10.687,0,14.821L252.744,466.279C250.748,468.28,248.04,469.408,245.213,469.415z"
        />
        <path
          className={`${styles.path} ${styles[props.theme]}`}
          d="M245.213,277.415c-2.831,0.005-5.548-1.115-7.552-3.115L2.994,39.633c-4.093-4.237-3.975-10.99,0.262-15.083
	c4.134-3.992,10.687-3.992,14.821,0l227.136,227.115L472.328,24.529c4.093-4.237,10.845-4.354,15.083-0.262
	s4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262L252.744,274.279C250.748,276.28,248.04,277.408,245.213,277.415z"
        />
      </svg>
    </div>
  );
};

export default DownIcon;
