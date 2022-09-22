import React, { useState, useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';

const columnFilter = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

export default function Filters() {
  const [itemsColumn, setItemsColumn] = useState(columnFilter);
  const [column, setColumn] = useState(itemsColumn[0]);
  const [comparison, setComparison] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const { filterByNumericValues, setFilterByNumericValues } = useContext(PlanetContext);

  const removeFilters = (coluna) => {
    setFilterByNumericValues(filterByNumericValues
      .filter((filter) => filter.column !== coluna));
    setItemsColumn([...itemsColumn, coluna]);
  };

  const handleFilter = () => {
    setFilterByNumericValues([...filterByNumericValues,
      { column, comparison, valueFilter }]);
    setItemsColumn(itemsColumn.filter((item) => item !== column));
  };

  useEffect(() => {
    const changeColumn = () => {
      setColumn(itemsColumn[0]);
    };
    changeColumn();
  }, [itemsColumn]);

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
      <div>
        {
          filterByNumericValues.length > 0
        && filterByNumericValues.map((filter) => (
          <div key={ filter.column } data-testid="filter">
            <span>{filter.column}</span>
            <span>{filter.comparison}</span>
            <span>{filter.valueFilter}</span>
            <button
              type="button"
              onClick={ () => removeFilters(filter.column) }
            >
              X

            </button>
          </div>
        ))
        }
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ () => setFilterByNumericValues([]) }
        >
          Remover Todos os filtro

        </button>
      </div>
    </div>

  );
}
