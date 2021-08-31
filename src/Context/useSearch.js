import { useContext, useCallback } from 'react';
import { SearchContext } from "./SearchContext";
import { formatTitle } from '../Helpers/Helpers';

const useSearch = () => {
  const [state, setState] = useContext(SearchContext);

  const filter = useCallback((url, e) => {
    let inputVal = e.target.value;
    setState({...state, inputVal});

    const filterHeroes = url === "/" ? Object.values(state.heroes) : state.heroes[url.substring(1)].nemesis
    setState({...state,
      filteredItems: filterHeroes.filter(item => {
        return formatTitle(item.name).includes(inputVal.toLowerCase());
      })
    })
  },[state, setState])

  const handleSubmit = e => e.preventDefault();

  const routes = url => {
    //TODO: set up Routes State

    // url.split('/').reduce((prev, curr, index) => {
    //     paths[index] = `${prev}/${curr}`
    //     return paths[index]
    // })
    // routes.push({
    //  name: url,
    //  path: pathname
    //})
    // setState({...state, routes})
  }

  return {
    filter,
    handleSubmit,
    routes
  }
};

export default useSearch;