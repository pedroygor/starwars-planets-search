import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services';
import PlanetContext from './PlanetContext';

export default function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [planetsFiltered, setPlanetsFiltered] = useState([]);
  const [filterText, setFilterText] = useState('');

  const context = {
    planetsFiltered,
    setPlanetsFiltered,
    filterByName: {
      name: filterText,
      setFilterText,
    },
  };

  useEffect(() => {
    const fetchPlanets = async () => {
      const newPlanets = await getPlanets();
      setPlanets(newPlanets);
      setPlanetsFiltered(newPlanets);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    function updatePlanets() {
      setPlanetsFiltered(planets
        .filter(({ name }) => name.toLowerCase().includes(filterText.toLowerCase())));
    }
    updatePlanets();
  }, [filterText, planets]);

  return (
    <PlanetContext.Provider value={ context }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
