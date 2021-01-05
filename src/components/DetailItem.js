import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

function DetailItem(props) {

    let {slug} = useParams();
    let location = useLocation();

    return( 
        <div>
            <h1>DetailItem {slug} : {props.label} {props.age}</h1>
            <span>{location.state && location.state.label}</span>
        </div>
    )
}

export default DetailItem;