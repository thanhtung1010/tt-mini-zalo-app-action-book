import React from 'react';
import { IZaloUser } from '../interfaces';
import { parseImgSrc } from '../untils';
import { useRecoilValue } from 'recoil';
import { userState } from '../state';

export const Avatar: React.FunctionComponent = () => {
  const user = useRecoilValue<IZaloUser>(userState);
  return (
    <div className='tt-setting-avatar'>
      <div className='tt-setting-avatar-img'>
        <img src={user.avatar} alt="avatar" />
        <span className='tt-setting-avatar-online'></span>
      </div>

      <div className='tt-setting-avatar-info'>
        <p className='tt-setting-avatar-name'>{user.name}</p>
        <p className='tt-setting-avatar-id'>
          {user.id}
          <img src={parseImgSrc('copy-clipboard')} alt="copy-clipboard.svg" />
        </p>
      </div>
    </div>
  );
}