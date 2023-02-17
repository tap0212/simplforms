import { ReactNode } from 'react';

export type ButtonProps = {
  onClick: () => void;
  className?: string;
  children: string | ReactNode;
};
