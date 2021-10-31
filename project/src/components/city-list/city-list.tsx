type CityListProps = {
  cityList: string[],
  selectedCity: string,
  setSelectedCity: (city: string) => void,
}

function CityList({ cityList, selectedCity, setSelectedCity }: CityListProps): JSX.Element {

  const activeCityClassList = 'locations__item-link tabs__item tabs__item--active';
  const cityClassList = 'locations__item-link tabs__item';

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className='locations__list tabs__list'>
            {cityList.map((city) => (
              <li className='locations__item' key={city}>
                <a
                  className={city.toLowerCase() === selectedCity.toLowerCase() ? activeCityClassList : cityClassList}
                  onClick={() => setSelectedCity(city)}
                  href='#city'
                >
                  <span>{city}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default CityList;
