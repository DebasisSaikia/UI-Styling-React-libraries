import React from 'react';
import Article from './components/Article';
import Profile from './components/Profile';

const App2 = () => {
  return (
    <div>
      <header className="bg-blue-600 p-5">
        <h1 className="text-white text-lg font-bold">React Skeleton</h1>
      </header>
      <div className="content">
        <Article />
        <Profile />
      </div>
    </div>
  );
};

export default App2;
