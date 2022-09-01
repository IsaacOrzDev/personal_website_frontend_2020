import React from 'react';
import { SkillIconProps, ThemeProps } from 'types/Props';
import styles from './style.module.scss';

interface Props extends SkillIconProps, ThemeProps {}

const UnityIcon: React.FC<Props> = props => {
  return (
    <div
      className={`skill_icon ${props.size} ${styles.container} ${
        styles[props.theme]
      }`}
    >
      <svg viewBox="0 0 256 263" preserveAspectRatio="xMinYMin meet">
        <path
          className={styles.path}
          d="M166.872 131.237l45.91-79.275 22.184 79.275-22.185 79.256-45.909-79.256zm-22.376 12.874l45.916 79.262-79.966-20.486-57.77-58.776h91.82zm45.906-105.033l-45.906 79.275h-91.82l57.77-58.78 79.956-20.495zm65.539 65.18L227.933.06l-104.54 27.925-15.475 27.207-31.401-.225L0 131.244l76.517 76.259h.003l31.388-.232 15.497 27.207 104.528 27.92L255.94 158.22l-15.906-26.982 15.906-26.978z"
        />
      </svg>
    </div>
  );
};

UnityIcon.defaultProps = {
  size: 'normal',
};

export default UnityIcon;
