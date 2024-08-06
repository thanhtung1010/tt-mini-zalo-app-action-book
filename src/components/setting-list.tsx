import React, { ReactNode } from 'react';

interface ISettingListProps {
  children: ReactNode;
}

export const SettingList: React.FunctionComponent<ISettingListProps> = ({children}) => {
  return (
    <ul className='tt-setting-list'>{children}</ul>
  );
};