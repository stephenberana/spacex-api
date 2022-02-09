import React from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import ContentCard from './components/ContentCard/ContentCard'

function App() {
  return <div className="App">
    <SearchBox placeholder="Search..." handleChange={(e) => console.log(e.target.value)}/>
    <ContentCard/>
  </div>;
}

export default App;
