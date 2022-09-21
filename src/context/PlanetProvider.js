import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services';
import PlanetContext from './PlanetContext';

export default function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    const fetchPlanets = async () => {
      const newPlanets = await getPlanets();
      setPlanets(newPlanets);
    };
    fetchPlanets();
  });

  return (
    <PlanetContext.Provider value={ { planets, setPlanets } }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
