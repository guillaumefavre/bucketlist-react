import React from 'react'
import icons from 'glyphicons'
//import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Item(props) {

    let itemClass = props.status === 'TODO' ? 'todo' : 'done'
    //let history = useHistory();

    return(
        <div className="item">
            <span className="glyphicon glyphicon-ok icon" aria-hidden="true" 
                onClick={() => props.changeStatus(props.id)}>
                {icons.ok}
            </span>
            {/**
            <span className={itemClass} 
                onClick={() => history.push({
                    pathname: '/DetailItem/'+props.id,
                    state: {
                        id: props.id,
                        label: props.label,
                        status: props.status
                    }
                })}>
                {props.label} ({props.status})
            </span>
             */}
            <Link className={itemClass} 
                to={{
                    pathname: "/DetailItem/"+props.id,
                    state: {
                        id: props.id,
                        label: props.label,
                        status: props.status
                    }
                }}
            >
                {props.label} ({props.status})
            </Link>           
            <span className="glyphicon glyphicon-trash icon" aria-hidden="true" 
                onClick={() => props.removeItem(props.id)}>
                {icons.cancel}
            </span>
        </div>
    )
}

export default Item;