import {useState} from 'react';
import {SortType} from '../../const';

type SortProps = {
  currentSort: string;
  setCurrentSort: ((sort: string) => void);
}

function Sort(props: SortProps):JSX.Element {
  const {currentSort, setCurrentSort} = props;

  const [isClicked, setClicked] = useState<boolean>(false);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}
        onClick={() => {
          setClicked(!isClicked);
        }}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isClicked ? 'places__options--opened' : ''}`}>
        {Object.values(SortType).map((sort) => (
          <li key={sort} className={`places__option ${currentSort === sort ? 'places__option--active' : ''}`} tabIndex={0}
            onClick={() => {
              setCurrentSort(sort);
            }}
          >{sort}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;

