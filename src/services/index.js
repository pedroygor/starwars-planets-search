const URL_PLANETS = 'https://swapi.dev/api/planets';

async function getPlanets() {
  const response = await fetch(URL_PLANETS);
  const { results } = await response.json();
  const planets = results.reduce((acc, current) => {
    delete current.residents;
    acc.push(current);
    return acc;
  }, []);

  return planets;
}

export default getPlanets;
