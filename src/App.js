import React, { Component } from 'react';
import './App.css';
import BucketList from './components/BucketList';
import NewItemForm from './components/NewItemForm';

const ITEMS = [
  {id: '1', category: 'Voyage', label: 'Aller à New-York', status: 'TODO'},
  {id: '2', category: 'Sport', label: 'Courir un marathon', status: 'TODO'},
  {id: '3', category: 'Voyage', label: 'Voyager en Asie', status: 'TODO'},
  {id: '4', category: 'Voyage', label: 'Visiter le Colisée', status: 'DONE'},
  {id: '5', category: 'Sport', label: 'Sauter en parachute', status: 'TODO'},
  {id: '6', category: 'Apprentissage', label: 'Parler anglais couramment', status: 'DOING'}
];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: ITEMS
    }

    this.addItem = this.addItem.bind(this);
    
  }

  addItem(newItemLabel, category) {
    const { items } = this.state
    const newItem = {id: '100', category: category, label: newItemLabel, status: 'TODO'}
    this.setState({ items: [...items, newItem] });
  }

  render() {
    return (
      <div>
        <NewItemForm addItem={this.addItem}/>
        <BucketList items={this.state.items} />
      </div>
    );
  }
}

export default App;
