import React, { Component } from 'react'
import icons from 'glyphicons'

class Item extends Component {

    constructor(props) {
        super(props);
        this.onClickCheckbox = this.onClickCheckbox.bind(this);
        this.onClickRemove = this.onClickRemove.bind(this);
    }

    onClickCheckbox() {
        this.props.changeStatus(this.props.id)
    }

    onClickRemove() {
        this.props.removeItem(this.props.id)
    }

    render() {
        var itemClass = this.props.status === 'TODO' ? 'todo' : 'done'
        return <div className="item">
            <span className="glyphicon glyphicon-ok icon" aria-hidden="true" 
                onClick={this.onClickCheckbox}>{icons.ok}</span>
            <p className={itemClass}>{this.props.label} ({this.props.status})</p>
            <span className="glyphicon glyphicon-trash icon" aria-hidden="true" 
                onClick={this.onClickRemove}>{icons.cancel}</span>
        </div>
    }

}

export default Item;