import React from 'react';
import NavigationBar from '../components/NavigationBar';
import About from '../components/Sections/About';
import Project from '../components/Sections/Project';

const Home: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <About />
      <Project />
    </>
  );
};

export default Home;
