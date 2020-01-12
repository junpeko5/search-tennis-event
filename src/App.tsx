import React from 'react';
import { CssBaseline } from '@material-ui/core';

import Appbar from './components/Appbar';
import AppFooter from './components/AppFooter';
import HeroHeader from './components/HeroHeader';
import Cards from './components/Cards';
import FreeWordsForm from './components/FreeWordsForm';
import Keywords from './components/Keywords';
import Prefectures from './components/Prefectures';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Appbar />
      <main>
        <HeroHeader />
        <FreeWordsForm />
        <Keywords />
        <Prefectures />
        <Cards />
      </main>
      <AppFooter />
    </>
  );
};

export default App;
