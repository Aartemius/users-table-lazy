import { FC } from "react";
import { User } from "../../types/user";
import Avatar from "./Avatar";
import styles from './UserCard.module.scss';
import { renderUserDataBlock } from "./renderUserTextDataBlock";
import { textDataBlocks } from "./userCardModel";

interface UserCardProps {
  user: User;
  isMobile: boolean;
}

const UserCard: FC<UserCardProps> = ({ user, isMobile }) => {
  const blocks = textDataBlocks(user, isMobile);

  return (
    <div className={ styles.userCard }>
      <Avatar
        image={ user.picture }
        name={ user.name }
      />
      { // @ts-ignore
        blocks.map((block, index) => renderUserDataBlock(block, index)) 
      }
    </div>
  );
}

export default UserCard;