import { Link, useRouteMatch } from 'react-router-dom';
import {
    replacingSpace,
    formatTitle
} from '../Helpers/Helpers';

const HeroListItem = ({props}) => {
    let { url } = useRouteMatch();

    const urlName = replacingSpace(props.name || "");
    const toUrl = url !== "/" ? `${url}/nemesis/${urlName}` : urlName;
 
    return (
        <li>
            { props.name 
                ? <Link to={toUrl}>{formatTitle(props.name)}</Link>
                : <span>{props}</span>
            }
        </li>
    )
};

export default HeroListItem;