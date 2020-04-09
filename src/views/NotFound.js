import React, { Fragment } from 'react';
import { useLocation} from 'react-router-dom';

const NotFound = () => {
    const location = useLocation();

    return (
        <Fragment>
            <h1>Error 404</h1>
            <h2>No existe la dirección {location.pathname} en el sitio</h2>
        </Fragment>
    );
}
 
export default NotFound;