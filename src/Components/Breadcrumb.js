import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SearchContext } from '../Context/SearchContext';

const Breadcrumb = () => {
    const [ state ] = useContext(SearchContext);
    let { url } = useLocation();
    
    return (
        <nav className="breadcrumb">
            {state.routes.map (
                route =>
                    <Link className={`breadcrumb-item ${url === route && 'active'}`} key={route.name} to={route.path}>
                        {route.name}
                    </Link>
            )}
        </nav>
      )
}

export default Breadcrumb;