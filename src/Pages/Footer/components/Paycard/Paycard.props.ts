import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';

export interface PaycardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  children?: JSX.Element | JSX.Element[];
}