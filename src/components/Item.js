import React, { Component } from 'react'
import icons from 'glyphicons'

class Item extends Component {


    onClickCheckbox() {
        console.log('checkbox')
    }

    render() {

        return <div className="item">
            <span className="glyphicon glyphicon-ok icon" aria-hidden="true" 
                onClick={this.onClickCheckbox}>{icons.ok}</span>
            <p style={{ color: this.props.textColor}}>{this.props.label}</p>
        </div>
    }

}

export default Item;