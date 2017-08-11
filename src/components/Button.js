import React from 'react';
import '../assets/style/button.css';

const Button = ({onClick, children, isActive, icon, customStyle}) => {

  let stateClass;

  if (!isActive ) {
    stateClass = 'btn--inactive';
    onClick = null;
  }
  
  let iconElement;

  if (icon) {
    iconElement = <img className="btn__icon" src={icon}/>;
  }


  return (
    <button className={`btn ${stateClass}`} style={customStyle} onClick={onClick}>
      {children}
      {iconElement}
    </button>
  );

};

Button.defaultProps = {
  isActive: true
};

export default Button;