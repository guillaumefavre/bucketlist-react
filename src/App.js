import React, { Component } from 'react';
import './App.css';
import BucketList from './components/BucketList';
import NewItemForm from './components/NewItemForm';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {

    fetch('http://localhost:8090/bucketlist/1/items')
      .then(response => response.json())
      .then(response => {
        this.setState({ items: response });
      })
      .catch(error => console.log("Erreur : " + error));

  }

  addItem(newItemLabel, category) {

    const { items } = this.state
    const newItem = { category: category, label: newItemLabel, status: 'TODO'}

    fetch('http://localhost:8090/bucketlist/1/items', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    }).then(response=>response.json())
      .then(response => {
        this.setState({ items: [...items, response] });
      });

  }

  changeStatus(itemId) {
    const { items } = this.state
    var item = items.find(element => element.id === itemId)
    item.status = item.status === 'TODO' ? 'DONE' : 'TODO'

    fetch('http://localhost:8090/bucketlist/1/items/'+itemId, {
      method: 'put',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then(response=>response.json())
      .then(response => {
        this.setState({ items: items });
      });
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
