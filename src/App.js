import React from 'react';
import './App.css';
import InputFilterText from './components/InputFilterText';
import Table from './components/Table';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <div>
        <h1>Projeto Starwars</h1>
        <InputFilterText />
        <Table />
      </div>
    </PlanetProvider>

  );
}

export default App;
