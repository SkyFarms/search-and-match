import React from 'react';

import './App.css';

import NavBar from 'components/NavBar';
import HeroBanner from 'components/HeroBanner';
import Grid from 'components/Grid';

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

  const textGridItems = [
    {
      title: 'FIND, start',
      description: 'join, share, local farming projects'
    },
    {
      title: 'CONNECT',
      description: `with community of information volunteers, experts, empty space product's ideas`
    },
    {
      title: 'GROW food',
      description: 'security in your area ith access to sustainable agriculture'
    }
  ];

  return (
    <div className="App">
      <NavBar />
      <HeroBanner />
      <Grid type="photo" title="Check out where we are growing" items={photoGridItems} />
      <Grid
        type="text"
        title="Growing Food, Feeding People, and Saving the Planet is as easy as 1, 2, 3."
        items={textGridItems}
      />
    </div>
  );
}

export default App;
