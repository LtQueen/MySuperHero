import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { formatTitle } from '../Helpers/Helpers';

const Breadcrumb = () => {
    let paths = [];
    let { pathname } = useLocation();
    pathname.split('/').reduce((prev, curr, index) => {
        paths[index] = `${prev}/${curr}`
        return paths[index]
    })
    //TODO: should not be hardcoded.
    paths.splice(2,1);

    return (
        <nav className="breadcrumb">
            <Link className="breadcrumb-item" to="/">Go back to search</Link>
            {
                paths.map(p => {
                    const linkName = formatTitle(p.split("/").pop());
                    const active = <span key={p} className="breadcrumb-item active">{linkName}</span>;
                    const breadcrumbsItem = <Link key={p} className="breadcrumb-item" to={p || ""}>{linkName}</Link>
                    return p === pathname ? active : breadcrumbsItem;
                })
            }
        </nav>
      )
}

export default Breadcrumb;