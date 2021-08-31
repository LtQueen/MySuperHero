import {
    useContext
} from 'react';
import {
    useParams, useRouteMatch
} from 'react-router-dom';
import { formatTitle } from '../Helpers/Helpers';
import { SearchContext } from '../Context/SearchContext';

const HeroPage = () => {
    let { nemesisname } = useParams();
    let { url } = useRouteMatch();
    const [state] = useContext(SearchContext);
    const p = state.heroes[url.split('/')[1]].nemesis;
    
    return (
        <div className = "pageContainer">
            <div className = "container-fluid">
                <h1>{formatTitle(nemesisname)}</h1>
                <section>
                    {p.bio}
                </section>
                <section>
                    {p.first_appearance}
                </section>
            </div>
        </div>
    )
};

export default HeroPage;
