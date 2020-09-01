import React from 'react'
import Item from './Item';
import Category from './Category';


const BucketList = ({items}) => {
    const rows = [];

    // Récupération des différentes catégories
    const uniqueCategories = [...new Set(items.map(item => item.category))];

    // Parcours des catégories pour afficher les items associés
    uniqueCategories.forEach((category) => {

        rows.push(
            <Category key={category} label={category}/>
        );
        const itemsByCategory = items.filter(element => element.category === category);

        itemsByCategory.forEach((element) => {
            rows.push(
                <Item key={element.id} id={element.id} label={element.label} status={element.status} textColor="orange"></Item>
            );
        });
    });

    return <div className="App">
      <header className="App-header">
        {rows}
      </header>
    </div>
}

export default BucketList;