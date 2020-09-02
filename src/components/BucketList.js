import React, { Component } from 'react'
import Item from './Item';
import Category from './Category';

class BucketList extends Component {

    render() {
        const rows = [];
    
        // Récupération des différentes catégories
        const uniqueCategories = [...new Set(this.props.items.map(item => item.category))];
    
        // Parcours des catégories pour afficher les items associés
        uniqueCategories.forEach((category) => {
    
            rows.push(
                <Category key={category} label={category}/>
            );
            const itemsByCategory = this.props.items.filter(element => element.category === category);
    
            itemsByCategory.forEach((element) => {
                rows.push(
                    <Item key={element.id} id={element.id} label={element.label} status={element.status} 
                        textColor="orange" changeStatus={this.props.changeStatus}></Item>
                );
            });
        });
    
        return <div className="App">
            <header className="App-header">
            {rows}
            </header>
        </div>
    }


}

export default BucketList;