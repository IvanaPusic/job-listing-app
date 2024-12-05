import React from 'react';
import { Navbar, Hero, Cards, JobListings, ViewAllJobs } from './components';
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default App;
