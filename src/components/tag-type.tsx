import React, { ReactNode } from 'react';
import { Icon } from '.';

interface ITagTypeProps {
  children: ReactNode;
  suffix: string;
  onClick(): void;
  iconWidth: string;
}

export const TagType: React.FunctionComponent<ITagTypeProps> = ({children, suffix, onClick, iconWidth}) => {

  const onClickTag = () => {
    onClick();
  };

  return (
    <button className='tt-shoping-types-item' onClick={() => onClickTag()}>
      {suffix ? (<Icon icon={suffix} width={iconWidth}></Icon>) : null}
      <span>{children}</span>
    </button>
  );
};