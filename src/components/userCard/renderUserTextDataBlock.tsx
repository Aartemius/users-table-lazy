import UserTextDataBlock, { UserTextDataBlockProps } from "./UserTextDataBlock";

export const renderUserDataBlock = ({
  blockName,
  blockValue,
  titleWeight,
  withBottomDivider,
  style
}: UserTextDataBlockProps, 
index: number) => {
  return (
    <UserTextDataBlock
      key={ index }
      blockName={ blockName }
      blockValue={ blockValue }
      titleWeight={ titleWeight ?? undefined }
      style={ style ?? undefined }
      withBottomDivider={ withBottomDivider }
    />
  );
}