import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { planets } = useContext(PlanetContext);
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
        {planets.map((planet) => (
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
