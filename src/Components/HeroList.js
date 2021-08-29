import HeroListItem from './HeroListItem';
import { useContext } from 'react';
import { HeroesContext } from '../App';

const HeroList = () => {
    const heroes = useContext(HeroesContext);
    
    return (
        <ul>
            {heroes.map((hero, i)=> <HeroListItem key={i} props={hero} /> )}
        </ul>
    );
}

export default HeroList;