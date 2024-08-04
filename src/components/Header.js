import React from "react";
import realmadrid from '../images/realmadrid.jpg';
function Header(){
    return(
        <header>
            <img 
            src={realmadrid}
            className='realmadrid-epn'
            alt="realmadrid"
            width="200px"
            height="100px"
            />
            <p>Aplicacion de Tareas</p>
            <h1>Richard Robalino</h1>
        </header>
    );
}

export default Header