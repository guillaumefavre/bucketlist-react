import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <ul style={{display: 'flex'}}>
            <Link to="/">
                <li style={{marginLeft: 20, listStyle:'none'}}>BucketList</li>
            </Link>
            <Link to="/Categories">
                <li style={{marginLeft: 20, listStyle:'none'}}>Catégories</li>
            </Link>
            <Link to="/DetailItem">
                <li style={{marginLeft: 20, listStyle:'none'}}>Détail item</li>
            </Link>
            <Link to="/NewItem">
                <li style={{marginLeft: 20, listStyle:'none'}}>Nouvel item</li>
            </Link>
        </ul>
    )
}

export default Navigation;