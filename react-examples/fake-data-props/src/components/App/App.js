import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Entries from '../Entries/Entries.js';
import React from 'react';

/*
 * Change the number of entries below and observe the app's behavior
 */
function App() {
  return (
    <>
      <Entries number={5} />
    </>
  );
}

export default App;
