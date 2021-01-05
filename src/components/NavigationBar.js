import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <ul style={{display: 'flex'}}>
            <Link to="/Categories">
                <li style={{marginLeft: 20, listStyle:'none'}}>Catégories</li>
            </Link>
            <Link to="/ItemDetail">
                <li style={{marginLeft: 20, listStyle:'none'}}>Détail item</li>
            </Link>
        </ul>
    )
}

export default Navigation;