import { FC } from "react";
import styles from './SubtitleText.module.scss';

interface SubtitleTextProps {
  textValue: string;
}

const SubtitleText: FC<SubtitleTextProps> = ({ textValue }) => (<p className={ styles.subtitleText }>{textValue}</p>);

export default SubtitleText;