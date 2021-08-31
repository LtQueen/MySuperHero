import Heroes from '../Content.json';
import { createContext, useState } from 'react';
import { replacingSpace } from '../Helpers/Helpers';

const SearchContext = createContext([{}, () => {}]);

const SearchContextProvider = props => {
    const [state, setState] = useState({
        // eslint-disable-next-line no-sequences
        heroes: Heroes.reduce((obj, item) => ((obj[[replacingSpace(item['name'])]] = item), obj), {}),
        filteredItems: Heroes,
        routes:[
            {
                name: "Home",
                path: "/"
            }
        ],
    });

    return (
        <SearchContext.Provider value={[state, setState]}>
            {props.children}
        </SearchContext.Provider>
    );
}

export { SearchContext, SearchContextProvider };