import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function InputFilterText() {
  const { filterByName: { name, setFilterText } } = useContext(PlanetContext);

  const handleChange = ({ target: { value } }) => {
    setFilterText(value);
  };

  return (
    <label htmlFor="filter-text">
      <input
        type="text"
        name="filterText"
        id="filter-text"
        data-testid="name-filter"
        value={ name }
        onChange={ handleChange }
      />
    </label>
  );
}
