import React from 'react';
import { parseImgSrc } from '../untils';

interface IIconProps {
  icon: string;
  height?: string;
  width?: string;
}

export const Icon: React.FunctionComponent<IIconProps> = ({icon, height, width}) => {
  const src = parseImgSrc(icon);
  return (
    <img src={src} alt={icon + '.svg'} height={height} width={width} />
  );
}