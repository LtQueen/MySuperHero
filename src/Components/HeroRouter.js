import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import HeroList from './HeroList';  
import HeroBlade from './HeroBlade';

const HeroRouter = () => {
    return (
        <Router>
            <HeroList />
            <Switch>
                <Route path="/:heroname" children={<HeroBlade />} />
            </Switch>
        </Router>
    )
}

export default HeroRouter;