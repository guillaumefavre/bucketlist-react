import React, { Component } from 'react'

class NewItemForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            label: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleChange(event) {
        this.setState({label: event.target.value});
    }

    handleAddItem(event) {
        event.preventDefault();
        event.target.reset();
        this.props.addItem(this.state.label)
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
