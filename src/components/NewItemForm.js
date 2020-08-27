import React, { Component } from 'react'

class NewItemForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            label: '',
            category: 'Voyage'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleChange(event) {
        this.setState({label: event.target.value});
    }

    handleChangeCategory(event) {
        this.setState({category: event.target.value});
    }

    handleAddItem(event) {
        event.preventDefault();
        event.target.reset();
        this.props.addItem(this.state.label, this.state.category)
    }

    render() {
        return (
        <form className="App-form" onSubmit={this.handleAddItem}>
            <input 
                type="text" 
                value={this.state.labelItem}
                onChange={this.handleChange}/>
            <select value={this.state.category} onChange={this.handleChangeCategory}>
                <option value="Voyage">Voyage</option>
                <option value="Sport">Sport</option>
                <option value="Apprentissage">Apprentissage</option>
            </select>
            <button type="submit">Ajouter</button>
        </form>
        )
    }
}

export default NewItemForm
