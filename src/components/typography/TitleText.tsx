import { FC } from "react";
import styles from './TitleText.module.scss';

interface TitleTextProps {
  textValue: string;
  fontWeight?: number;
}

const TitleText: FC<TitleTextProps> = ({textValue, fontWeight}) => (
  <p
    className={ styles.titleText }
    style={{ fontWeight: fontWeight ?? 500 }}
  >{textValue}</p>
);

export default TitleText;