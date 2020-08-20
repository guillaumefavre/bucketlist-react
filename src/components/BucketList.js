import React from 'react'
import Item from './Item';


const BucketList = ({items: itemsData}) => {
    const itemsComponents = [];

    itemsData.forEach((element) => {
        itemsComponents.push(
            <Item key={element.id} label={element.label} textColor="orange"></Item>
        );
    });

    return <div className="App">
      <header className="App-header">
        <h1>Bucketlist</h1>
        {itemsComponents}
      </header>
    </div>
}

export default BucketList;