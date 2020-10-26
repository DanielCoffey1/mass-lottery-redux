import React from 'react';
import DrawList from './DrawList';
import DrawDetail from './DrawDetail';
import SearchBar from './SearchBar';

const App = () => {
  return (
    <div>
      <DrawDetail />
      <SearchBar />
      <DrawList />
    </div>
  );
};

export default App;
