import {
    useContext,
    useMemo
} from 'react';
import {
    useParams
} from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import { formatTitle } from '../Helpers/Helpers';
import { HeroesContext } from '../App';

const HeroPage = () => {
    let { name } = useParams();
    const heroes = useContext(HeroesContext);
    const hero = heroes.filter(hero => formatTitle(hero.name) === formatTitle(name));
    const heroBio = Object.assign({}, ...hero);

    return useMemo(() => {
        return (
            <div className = "pageContainer">
                <div className = "container-fluid">
                    <Breadcrumb />
                    <h1>{formatTitle(heroBio.name)}</h1>
                    <section>
                        {heroBio.bio}
                    </section>
                    <section>
                        {heroBio.first_appearance}
                    </section>
                </div>
            </div>
        )}, [heroBio]
    )
};

export default HeroPage; 