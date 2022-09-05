import React, { useCallback, useEffect, useMemo } from 'react';
import styles from './style.module.scss';
import { ThemeProps } from 'types/Props';
import ProjectModel from 'models/ProjectModel';
import ProjectInformation from './components/ProjectInformation';
import { forceCheck } from 'react-lazyload';
import ParallaxBar from './components/ParallaxBar';

interface Props extends ThemeProps {
  index: number;
  list: ProjectModel[];
  title: string;
  years: string[];
  visible?: boolean;
  isResponsive?: boolean;
  isHidden?: boolean;
  breakpoint?: string;
  shouldShowMenu?: boolean;
  windowOffsetTop: number;
  windowOffsetBottom: number;
  onSelectIndex: (index: number) => void;
}

const ResponsiveProjectScreen: React.FC<Props> = (props) => {
  const _setCurrentIndex = useCallback((index: number) => {
    props.onSelectIndex && props.onSelectIndex(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const palette = useMemo(() => props.list[props.index].palette, []);

  useEffect(() => {
    forceCheck();
  }, []);

  return (
    <div
      className={styles.scrolling_list}
      style={!props.isResponsive ? { display: 'none' } : {}}
    >
      {props.list.map((x, i) => (
        <ProjectInformation
          theme={props.theme}
          key={i}
          item={x}
          index={i}
          breakpoint={props.breakpoint}
          windowOffsetTop={props.windowOffsetTop}
          windowOffsetBottom={props.windowOffsetBottom}
          isFocused={props.index === i}
          isLooping={!props.isHidden && props.isResponsive}
          onFocus={_setCurrentIndex}
        />
      ))}
      <ParallaxBar
        theme={props.theme}
        yBottom={props.windowOffsetBottom}
        visible={props.visible && !props.shouldShowMenu}
        // color={palette[props.theme]}
      />
    </div>
  );
};

export default ResponsiveProjectScreen;
