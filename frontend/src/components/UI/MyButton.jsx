import React from 'react';

const MyButton = ({className, children, onClick}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
