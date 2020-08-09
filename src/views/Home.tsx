import React from 'react';
import NavigationBar from '../components/NavigationBar';
import About from '../components/Sections/About';

const Home: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <About />
    </>
  );
};

export default Home;
