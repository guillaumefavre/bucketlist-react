import React from 'react'
import icons from 'glyphicons'

function Item(props) {

    let itemClass = props.status === 'TODO' ? 'todo' : 'done'

    return(
        <div className="item">
            <span className="glyphicon glyphicon-ok icon" aria-hidden="true" 
                onClick={() => props.changeStatus(props.id)}>
                {icons.ok}
            </span>
            <span className={itemClass} >
                {props.label} ({props.status})
            </span>
            <span className="glyphicon glyphicon-trash icon" aria-hidden="true" 
                onClick={() => props.removeItem(props.id)}>
                {icons.cancel}
            </span>
        </div>
    )
}

export default Item;