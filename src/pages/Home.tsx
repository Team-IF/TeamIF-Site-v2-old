import React from 'react';
import NavigationBar from '../components/NavigationBar';
import About from '../components/Sections/About';
import Project from '../components/Sections/Project';
import Member from '../components/Sections/Member';

const Home: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <About />
      <Project />
      <Member />
    </>
  );
};

export default Home;
