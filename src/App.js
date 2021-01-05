import React, { Component } from 'react';
import './App.css';
import BucketList from './components/BucketList';
import NewItemForm from './components/NewItemForm';
import CategoriesList from './components/CategoriesList';
import ItemDetail from './components/ItemDetail';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

    fetch('http://localhost:8090/bucketlist/1/items/'+itemId, {
      method: 'delete'
    }).then(response=>response.text())
      .then(response => {
        // On retire un élément à l'index de l'item
        const index = items.indexOf(item)
        items.splice(index, 1)
        this.setState({ items: items });
      })
      .catch(error => console.log("DELETE Erreur : " + error));   
  }

  render() {
    return (
      <div>
        <Router>
          <NavigationBar />
          <Route 
            path="/" exact 
            render={(props) => (
              <BucketList {...props} 
                items={this.state.items} 
                changeStatus={this.changeStatus} 
                removeItem={this.removeItem} 
                addItem={this.addItem} />
            )}  
          />
          <Route path="/Categories" exact component={CategoriesList}/>
          <Route path="/DetailItem" exact component={ItemDetail}/>
          <Route 
            path="/NewItem" exact 
            render={(props) => (
              <NewItemForm {...props} addItem={this.addItem} />
            )}  
          />
        </Router>
      </div>
    );
  }
}

export default App;
