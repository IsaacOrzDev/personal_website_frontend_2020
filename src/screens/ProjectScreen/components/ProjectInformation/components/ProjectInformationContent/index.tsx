import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import { ThemeProps } from 'types/Props';
import TextService from 'services/textService';
import TitleText from 'components/text/TitleText';
import Words from 'components/text/Words';
import ProjectModel from 'models/ProjectModel';
import ShowcaseScreenShots from '../../../ShowcaseScreenshots';
import LinkButtonGroup from '../../../LinkButtonGroup';
import ProjectDescription from '../../../ProjectDescription';

interface Props extends ThemeProps {
  index: number;
  visible?: boolean;
  item: ProjectModel;
  breakpoint?: string;
  isFocused?: boolean;
  isLooping?: boolean;
}

const ProjectInformationContent: React.FC<Props> = props => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.num}>
        <TitleText theme={props.theme} fontSize={24}>
          <Words
            text={TextService.getNumberText(props.index + 1)}
            visible={visible}
          />
        </TitleText>
      </div>
      <ShowcaseScreenShots
        theme={props.theme}
        visible={visible}
        imgVisible={props.visible}
        list={props.item.images}
        breakpoint={props.breakpoint}
        isLooping={props.isFocused && props.isLooping}
      />
      <div className={styles.text_area}>
        <TitleText theme={props.theme} fontSize={32}>
          <Words text={props.item.title} visible={props.visible} mode="words" />
        </TitleText>
        <div className={styles.description}>
          {props.item.description.map((x, i) => (
            <ProjectDescription
              key={i}
              theme={props.theme}
              fontSize={16}
              visible={props.visible}
              text={x}
            />
          ))}
        </div>
        <LinkButtonGroup
          theme={props.theme}
          items={props.item.links}
          visible={visible}
          project={props.item.title}
          textVisible={props.visible}
          isResponsive={true}
          center={true}
        />
      </div>
    </div>
  );
};

export default ProjectInformationContent;
