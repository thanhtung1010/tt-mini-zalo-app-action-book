import React, { ReactNode } from 'react';

interface IProductItemProps {
  children: ReactNode | string;
  suffix: ReactNode;
}

export const SettingListItem: React.FunctionComponent<IProductItemProps> = ({children, suffix}) => {
  return (
    <li className='tt-setting-list-item'>
      <div className='tt-setting-list-item-right'>
        <div className='tt-setting-list-item-content'>{children}</div>
        <div className='tt-setting-list-item-suffix'>{suffix}</div>
      </div>
    </li>
  );
}