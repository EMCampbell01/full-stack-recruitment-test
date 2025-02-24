import React from 'react';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import Flights from '../Flights/flights'

import Header from '../Header';

import STYLES from './App.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      <Flights></Flights>
    </main>
  </div>
);

export default App;
