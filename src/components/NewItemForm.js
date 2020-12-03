import React, { Component } from 'react'

const CATEGORIES = [
    {id: '1', label: 'Sport'},
    {id: '2', label: 'Voyage'},
    {id: '3', label: 'Carrière'},
    {id: '4', label: 'Apprentissage'}
  ];
  
class NewItemForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            label: '',
            category: '1',
            allCategories: CATEGORIES
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    componentDidMount() {
        console.log('CATEGORIES : ', CATEGORIES)
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
        let categoryNewItem = CATEGORIES.find(categ => categ.id === this.state.category)
        this.props.addItem(this.state.label, categoryNewItem)
    }

    render() {

        let optionItems = this.state.allCategories.map(category => 
            <option key={category.id} value={category.id}>{category.label}</option>
        );

        return (
        <form className="App-form" onSubmit={this.handleAddItem}>
            <input 
                type="text" 
                value={this.state.labelItem}
                onChange={this.handleChange}
                required/>
            <select value={this.state.category} onChange={this.handleChangeCategory}>
                {optionItems}
            </select>
            <button type="submit">Ajouter</button>
        </form>
        )
    }
}

export default NewItemForm
