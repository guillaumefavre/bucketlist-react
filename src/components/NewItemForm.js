import React, { Component } from 'react'

class NewItemForm extends Component {

    constructor(props) {
        super(props);
        this.state = {label: ''}
    }

    handleChange(event) {
        console.log('handleChange');
    }

    handleAddItem(event) {
        console.log('handleAddItem');
        event.preventDefault();
    }

    render() {
        return (
        <form onSubmit={this.handleAddItem}>
            <input 
                type="text" 
                value={this.state.labelItem}
                onChange={this.handleChange}/>
            <button type="submit">Ajouter</button>
        </form>
        )
    }
}

export default NewItemForm
