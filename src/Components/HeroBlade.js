import { formatTitle } from '../Helpers/Helpers';
import {
    Route, useLocation, 
} from 'react-router-dom';
import {SearchContext} from '../Context/SearchContext';
import {useContext} from 'react';
import BioSection from './BioSection';
import HeroPage from './HeroPage';

const HeroBlade = (props) => {
    let url = useLocation();
    const [state] = useContext(SearchContext);

    const {
        name,
        real_name,
        hobby,
        power,
        nemesis,
        bio,
        first_appearance
    } = props;

    return (
        <>
            { name && <h2>{formatTitle(name)}</h2> }
            { real_name && <BioSection sectionName={"Real Name"} value={real_name} />}
            { hobby && <BioSection sectionName={"Hobby"} value={hobby} />}
            { power && <BioSection sectionName={"Power"} value={power} />}
            { bio && <BioSection sectionName={"Bio"} value={bio} />}
            { first_appearance && <BioSection sectionName={"First Appearance"} value={first_appearance} />}
            { nemesis && <BioSection sectionName={"Nemesis"} value={state.filteredItems} />}
            <Route path={`${url}/nemesis/:nemesisname`} children={<HeroPage />} />
        </>
    )
};

export default HeroBlade;