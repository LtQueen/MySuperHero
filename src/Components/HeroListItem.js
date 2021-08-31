import { memo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import {
    replacingSpace,
    formatTitle
} from '../Helpers/Helpers';

const HeroListItem = ({props}) => {
    let { url } = useRouteMatch();

    const name = replacingSpace(props.name || "");
    const urlName = url === '/' ? name : `${url}/nemesis/${name}`

    return (
        <li>
            { props.name 
                ? <Link to={urlName}>{formatTitle(props.name)}</Link>
                : <span>{props}</span>
            }
        </li>
    )
};

export default memo(HeroListItem);