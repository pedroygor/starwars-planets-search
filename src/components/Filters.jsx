import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

const columnFilter = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

export default function Filters() {
  const [itemsColumn, setItemsColumn] = useState(columnFilter);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const { filterByNumericValues, setFilterByNumericValues } = useContext(PlanetContext);

  const handleFilter = () => {
    setFilterByNumericValues([...filterByNumericValues,
      { column, comparison, valueFilter }]);
    setItemsColumn(itemsColumn.filter((item) => item !== column));
    setColumn(itemsColumn[0]);
  };

  return (
    <div>
      <span>Coluna</span>
      <select
        name="coluna"
        id="coluna"
        data-testid="column-filter"
        value={ column }
        onChange={ (e) => setColumn(e.target.value) }
      >
        {itemsColumn.map((item) => (
          <option key={ item } value={ item }>{item}</option>
        ))}
      </select>

      <span>comparação</span>
      <select
        name="comparacao"
        id="comparacao"
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <label htmlFor="value-filter">
        Valor:
        <input
          type="number"
          name="valueFilter"
          id="value-filter"
          data-testid="value-filter"
          value={ valueFilter }
          onChange={ (e) => setValueFilter(e.target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilter }
      >
        Filtrar

      </button>
    </div>

  );
}
