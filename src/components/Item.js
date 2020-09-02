import React, { Component } from 'react'
import icons from 'glyphicons'

class Item extends Component {

    constructor(props) {
        super(props);
        this.onClickCheckbox = this.onClickCheckbox.bind(this);
    }

    onClickCheckbox() {
        console.log('checkbox : ', this.props.id, this.props.label)
        this.props.changeStatus(this.props.id)
        //this.props.changeStatus('tototototo')
    }

    render() {
        var itemClass = this.props.status === 'TODO' ? 'todo' : 'done'
        return <div className="item">
            <span className="glyphicon glyphicon-ok icon" aria-hidden="true" 
                onClick={this.onClickCheckbox}>{icons.ok}</span>
            <p className={itemClass}>{this.props.label} ({this.props.status})</p>
        </div>
    }

}

export default Item;