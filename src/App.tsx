import React from 'react';

import './App.css';

import NavBar from 'components/NavBar';
import HeroBanner from 'components/HeroBanner';
import PhotoGrid from 'components/PhotoGrid';

function App() {
  const photoGridItems = [
    {
      id: 1,
      name: 'Warsaw Community College',
      image: 'https://popupcity.net/wp-content/uploads/2018/05/Barcelona-rooftop-gardens-1-800x600.jpg'
    },
    {
      id: 2,
      name: 'Victory Garden California',
      image: 'https://www.springwise.com/wp-content/uploads/2016/12/FarmInABox_community-farming_Springwise.jpg'
    },
    {
      id: 3,
      name: 'Victory Garden Michigan',
      image: 'https://i.pinimg.com/originals/c2/ba/9d/c2ba9daa0daaaf0bbcbe0b5b52d2c8dc.jpg'
    }
  ];
  return (
    <div className="App">
      <NavBar />
      <HeroBanner />
      <PhotoGrid items={photoGridItems} />
    </div>
  );
}

export default App;
