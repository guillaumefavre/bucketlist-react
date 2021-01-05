import React, { Component } from 'react'
import Item from './Item';
import Category from './Category';
import NewItemForm from './NewItemForm';

class BucketList extends Component {

    render() {
        const rows = [];

        // Tri des items par catégorie
        this.props.items.sort(function (a, b) {
            return a.category.id - b.category.id;
        })
    
        // Récupération des différentes catégories uniques
        const categories = this.props.items.map(item => item.category)
        const uniqueIds = [...new Set(this.props.items.map(item => item.category.id))]
        const uniqueCategories = uniqueIds.map(id => {
            return categories.find(cat => cat.id === id)
        })

        // Parcours des catégories pour afficher les items associés
        uniqueCategories.forEach((category) => {
    
            rows.push(
                <Category key={category.id} label={category.label}/>
            );
            const itemsByCategory = this.props.items.filter(element => element.category.id === category.id);
    
            itemsByCategory.forEach((element) => {
                rows.push(
                    <Item key={element.id} id={element.id} label={element.label} status={element.status} 
                        textColor="orange" changeStatus={this.props.changeStatus} removeItem={this.props.removeItem}></Item>
                );
            });
        });
    
        return <div className="App">
            <header className="App-header">
            <NewItemForm addItem={this.props.addItem}/>
            {rows}
            </header>
        </div>
    }
}

export default BucketList;