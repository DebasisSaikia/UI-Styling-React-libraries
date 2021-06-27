import React from 'react';
import './placeholder.css';

const Placeholders = ({type}) => {
  const classes = `skeleton ${type}`;
  return <div className={classes} />;
};

export default Placeholders;
