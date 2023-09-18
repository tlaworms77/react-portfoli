import React from 'react';
import SideBar from '../components/SideBar';
import MainLayout from '../components/MainLayout';
import Home from '../components/Home';
import About from '../components/About';
import Resume from '../components/Resume';
import Project from '../components/Project';
import Contact from '../components/Contact';

export default function Portfolio() {
  return (
    <>
      <SideBar />
      <MainLayout>
        <Home />
        <About />
        <Resume />
        <Project />
        <Contact />
      </MainLayout>
    </>
  );
}
