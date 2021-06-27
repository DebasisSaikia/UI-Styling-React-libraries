import React from 'react';
import Placeholders from './Placeholders';

const PlaceholderPro = ({theme}) => {
  const themeC = theme || 'light';

  return (
    <div className={`skeleton-wrapper ${themeC}`}>
      <div className="skeleton-profile">
        <div>
          <Placeholders type="avatar" />
        </div>
        <div>
          <Placeholders type="title" />
          <Placeholders type="text" />
          <Placeholders type="text" />
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPro;
