import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const {
    planets,
    filterByName: { name },
    filterByNumericValues,
  } = useContext(PlanetContext);

  let filteredByName = name.length > 0 ? planets
    .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()))
    : planets;

  if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach((planet) => {
      if (planet.comparison === 'maior que') {
        filteredByName = filteredByName
          .filter((item) => Number(item[planet.column]) > Number(planet.valueFilter));
      } else if (planet.comparison === 'menor que') {
        filteredByName = filteredByName
          .filter((item) => Number(item[planet.column]) < Number(planet.valueFilter));
      } else {
        filteredByName = filteredByName
          .filter((item) => Number(item[planet.column]) === Number(planet.valueFilter));
      }
    });
  }

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation period</th>
          <th>orbital period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        { filteredByName.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>
              {planet.films.map((item) => (
                <p key={ item }>{item}</p>
              ))}

            </td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}

      </tbody>

    </table>
  );
}

export default Table;
