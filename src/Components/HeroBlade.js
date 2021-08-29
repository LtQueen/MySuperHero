import HeroList from './HeroList';
import { formatTitle } from '../Helpers/Helpers';
import {
    useParams, Route, useRouteMatch
} from 'react-router-dom';
import { useContext, useMemo } from 'react';
import { HeroesContext } from '../App';
import HeroPage from './HeroPage';

const HeroBlade = () => {
    let { heroname } = useParams();
    let { url } = useRouteMatch();
    const heroes = useContext(HeroesContext);
    const hero = heroes.filter(hero => formatTitle(hero.name) === formatTitle(heroname));
    const displayedHero = Object.assign({},...hero);

    return useMemo(() => {
        return (
            <>
                <h2>{formatTitle(displayedHero.name)}</h2>
                <section>
                    <h3>Real name</h3>
                    {displayedHero.real_name}
                </section>
                <section>
                    <h3>Hobby:</h3>
                    {displayedHero.hobby}
                </section>
                <HeroesContext.Provider value={displayedHero.power}>
                    <section>
                        <h3>Power:</h3>
                        <HeroList />
                    </section>
                </HeroesContext.Provider>
                <HeroesContext.Provider value={displayedHero.nemesis}>
                    <section>
                        <h3>Nemesis:</h3>
                        <HeroList />
                        <Route path={`${url}/nemesis/:name`} children={<HeroPage />} />
                    </section>
                </HeroesContext.Provider>
            </>
        )
    }, [displayedHero, url])
};

export default HeroBlade;