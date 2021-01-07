import React, { Component } from 'react';
import './App.css';
import BucketList from './components/BucketList';
import NewItemForm from './components/NewItemForm';
import CategoriesList from './components/CategoriesList';
import DetailItem from './components/DetailItem';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import itemService from './services/ItemService'

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

  async componentDidMount() {
    try {
      this.setState({ items: await itemService.getAllItems() });
    } catch(e) {
      this.setState({ error: e });
    }
  }


  async addItem(newItemLabel, category) {

    const { items } = this.state
    const newItem = { category: category, label: newItemLabel, status: 'TODO'}

    try {
      var retour = await itemService.addItem(newItem);
      this.setState({ items: [...items, retour] });
    } catch(e) {
      this.setState({ error: e });
    }
  }

  changeStatus(itemId) {
    const { items } = this.state
    var item = items.find(element => element.id === itemId)
    item.status = item.status === 'TODO' ? 'DONE' : 'TODO'

    itemService.changeStatus(item);

    this.setState({ items: items });
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
    const { error } = this.state
    if(error) {
      return <p>{error.message}</p>;
    }
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
                addItem={this.addItem} 
                />
            )}  
          />
          <Route path="/Categories" exact component={CategoriesList}/>
          <Route path="/DetailItem" exact component={DetailItem}/>
          <Route path="/DetailItem/:slug" exact component={DetailItem}/>
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
