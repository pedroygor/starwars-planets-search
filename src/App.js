import React from 'react';
import './App.css';
import Filters from './components/Filters';
import InputFilterText from './components/InputFilterText';
import Table from './components/Table';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <div>
        <h1>Projeto Starwars</h1>
        <InputFilterText />
        <Filters />
        <Table />
      </div>
    </PlanetProvider>

  );
}

export default App;
