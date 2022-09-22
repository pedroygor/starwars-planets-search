import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services';
import PlanetContext from './PlanetContext';

export default function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const newPlanets = await getPlanets();
      setPlanets(newPlanets);
    };
    fetchPlanets();
  }, []);

  const context = {
    planets,
    setPlanets,
    filterByName: {
      name: filterText,
      setFilterText,
    },
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <PlanetContext.Provider value={ context }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
