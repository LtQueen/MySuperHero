import { 
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import HeroList from './HeroList';  
import { useContext } from 'react';
import { SearchContext } from '../Context/SearchContext';
import HeroBlade from './HeroBlade';
import { replacingSpace } from '../Helpers/Helpers';
import SearchBar from './SearchBar';
import Breadcrumb from './Breadcrumb';

const HeroRouter = () => {
    const [state] = useContext(SearchContext);

    return (
        <Router>
            <Breadcrumb {...state}/>
            <Switch>

                <Route exact path="/">
                    <SearchBar />
                    <HeroList props={state.filteredItems}/>
                </Route>
                {Object.keys(state.heroes).map(
                    (hero, i) => 
                        <Route 
                            key={i} 
                            path={`/${replacingSpace(hero)}`}
                        >
                            <SearchBar />
                            <HeroBlade {...state.heroes[hero]}/>
                        </Route>
                )}
            </Switch>
        </Router>
    )
}

export default HeroRouter;