import clsx from 'clsx';
import React, { ReactNode } from 'react';
import SVG from 'react-inlinesvg';

import { ICON_TYPES } from '@/icons/icons';

interface IconProps {
  iconType: keyof typeof ICON_TYPES;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  right?: ReactNode;
  left?: ReactNode;
  wrapperClassName?: string;
}

export const Icon = ({ iconType, className, onClick, style, left, right, wrapperClassName }: IconProps) => {
  return (
    <div className={clsx('flex gap-1.5 rounded-md bg-blue-300 p-1', wrapperClassName)}>
      {left}
      <SVG
        className={clsx('h-6 min-h-6 w-6 min-w-6', className)}
        onClick={onClick}
        src={ICON_TYPES[iconType]}
        style={style}
      />
      {right}
    </div>
  );
};
