import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <div>
        <Table />
      </div>
    </PlanetProvider>

  );
}

export default App;
