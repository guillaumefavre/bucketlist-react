import React, { Component } from 'react';
import './App.css';
import BucketList from './components/BucketList';
import NewItemForm from './components/NewItemForm';
import { v4 as uuidv4 } from 'uuid';

const ITEMS = [
  {id: '1', category: 'Voyage', label: 'Aller à New-York', status: 'TODO'},
  {id: '2', category: 'Sport', label: 'Courir un marathon', status: 'TODO'},
  {id: '3', category: 'Voyage', label: 'Voyager en Asie', status: 'TODO'},
  {id: '4', category: 'Voyage', label: 'Visiter le Colisée', status: 'DONE'},
  {id: '5', category: 'Sport', label: 'Sauter en parachute', status: 'TODO'},
  {id: '6', category: 'Apprentissage', label: 'Apprendre une langue d\'un autre alphabet', status: 'TODO'}
];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: ITEMS
    }

    this.addItem = this.addItem.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {

    fetch('http://localhost:8090/bucketlist/1/items')
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response)))
      .catch(error => console.log("Erreur : " + error));

  }

  addItem(newItemLabel, category) {
    const { items } = this.state
    const newItem = {id: uuidv4(), category: category, label: newItemLabel, status: 'TODO'}
    this.setState({ items: [...items, newItem] });
  }

  changeStatus(itemId) {
    const { items } = this.state
    var item = items.find(element => element.id === itemId)
    item.status = item.status === 'TODO' ? 'DONE' : 'TODO'
    this.setState({ items: items });
  }

  removeItem(itemId) {
    const { items } = this.state
    var item = items.find(element => element.id === itemId)

    // On retire un élément à l'index de l'item
    const index = items.indexOf(item)
    items.splice(index, 1)

    this.setState({ items: items});
  }

  render() {
    return (
      <div>
        <NewItemForm addItem={this.addItem}/>
        <BucketList items={this.state.items} changeStatus={this.changeStatus} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default App;
