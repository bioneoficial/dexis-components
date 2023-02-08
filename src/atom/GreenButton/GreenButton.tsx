import * as React from 'react';
// import * as Styles from './GreenButton.styles';

type Props = {
  onClick: () => void;
  title: string;
  id: string;
};

const GreenButton: React.FC<Props> = ({ onClick, title, id }: Props) => {
  return (
    <button id={id} onClick={onClick}>
      {title}
    </button>
  );
};

export default GreenButton;
