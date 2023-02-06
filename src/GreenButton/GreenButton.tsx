import * as React from 'react';
import * as Styles from './GreenButton.styles';

type Props = {
  onClick: () => void;
  title: string;
  id: string;
};

const GreenButton: React.FC<Props> = ({ onClick, title, id }: Props) => (
  <Styles.Button id={id} onClick={onClick}>
    {title}
  </Styles.Button>
);

export default GreenButton;
