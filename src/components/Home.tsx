import React from 'react';
import HeroHeader from './HeroHeader';
import Cards from './Cards';
import FreeWordsForm from './FreeWordsForm';
import Keywords from './Keywords';
import Prefectures from './Prefectures';

const Home = () => {
  return (
    <>
      <HeroHeader />
      <FreeWordsForm />
      <Keywords />
      <Prefectures />
      <Cards />
    </>
  );
};

export default Home;
