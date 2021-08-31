import { useContext } from 'react';
import { SearchContext } from '../Context/SearchContext'
import { useRouteMatch } from 'react-router-dom';
import useSearch from '../Context/useSearch';

const SearchBar = () => {
    let { url } = useRouteMatch();
    const [state] = useContext(SearchContext);
    const { filter, handleSubmit } = useSearch();

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Start search</label>
            <input
                id="search"
                className="form-control form-control-lg"
                placeholder="Search your super hero..."
                data-testid="search"
                type="search"
                value={state.inputVal}
                onChange={e => filter(url,e)}
            />
        </form>
    )
};

export default SearchBar;