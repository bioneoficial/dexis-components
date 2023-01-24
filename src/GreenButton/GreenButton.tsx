import React, { FC } from 'react';
import * as Styles from './GreenButton.styles';

interface Props {
  onClick: () => void;
  title: string;
  id?: string;
}

const GreenButton: FC<Props> = ({ onClick, title, id }: Props) => (
  <Styles.Button id={id} onClick={onClick}>
    {title}
  </Styles.Button>
);

export default GreenButton;
