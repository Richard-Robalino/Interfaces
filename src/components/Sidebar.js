import React from 'react';
import realmadrid from '../images/realmadrid.jpg';

function Sidebar() {
    return (
        <aside>
            <h2>Sidebar</h2>
            <p>Contenido de Sidebar</p>
            <ul class="collapse">
                <li><a href=" ">Mi Perfil </a></li>
                <li><a href="">Tareas</a></li>
                <li><a href="">Productos</a></li>
                <li><a href="">Logout</a></li>
            </ul>
        </aside>
    );
}

export default Sidebar;