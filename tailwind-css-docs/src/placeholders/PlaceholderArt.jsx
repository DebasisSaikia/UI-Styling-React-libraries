import React from 'react';
import Placeholders from './Placeholders';
import './placeholder.css';
import Transition from './Transition';

const PlaceholderArt = ({theme}) => {
  const themeC = theme || 'light';
  return (
    <div className={`skeleton-wrapper pt-5 ${themeC}`}>
      <div className="skeleton-article mb-5 mt-5">
        <Placeholders type="title" />
        <Placeholders type="text" />
        <Placeholders type="text" />
        <Placeholders type="text" />
        <Transition />
      </div>
    </div>
  );
};

export default PlaceholderArt;
