import { FC } from 'react';
import { UserImage, UserName } from '../../types/user';
import { useViewport } from '../../hooks/useViewport';
import styles from './Avatar.module.scss';

interface AvatarProps {
  image: UserImage;
  name: UserName;
}

const Avatar: FC<AvatarProps> = ({ image, name }) => {
  const { isMobile } = useViewport();
  const pictureUrl = isMobile ? image.thumbnail : image.medium;

  return (
    <div className={ styles.avatarWrap }>
      <img
        src={ pictureUrl }
        alt={ `${ name.first } ${ name.last }` }
      />
    </div>
  );
}

export default Avatar;