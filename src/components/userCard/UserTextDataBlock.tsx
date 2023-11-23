import { FC } from "react";
import SubtitleText from "../typography/SubtitleText";
import TitleText from "../typography/TitleText";
import styles from './UserTextDataBlock.module.scss';

export interface UserTextDataBlockProps {
  blockName: string;
  blockValue: string;
  titleWeight?: number;
  style?: React.CSSProperties;
  withBottomDivider?: boolean;
}

const UserTextDataBlock: FC<UserTextDataBlockProps> = ({
  blockName,
  blockValue,
  titleWeight,
  style,
  withBottomDivider
}) => {

  return (
    <>
      <div
        style={ style }
        className={ styles.userTextDataBlock }
      >
        <TitleText
          textValue={ blockValue }
          fontWeight={ titleWeight ?? undefined }
        />
        <SubtitleText textValue={ blockName } />
      </div>
      { withBottomDivider &&
        <div className={ styles.divider }></div>
      }
    </>
  );
}

export default UserTextDataBlock;