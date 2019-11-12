import React from 'react';
import Logo from '../../public/static/logo.png';

const Loader = (...props) => {
    return(
        <div className="Loader">
            <img src={Logo} alt="Horizon's Logo"/>
            {
                props.text ? 
                    (<p className="Loader-text">{props.text}</p>) : null
            }
        </div>
    )
}

export default Loader;