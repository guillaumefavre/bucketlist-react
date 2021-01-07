const ItemService = {
    
    updateItem: function(item, history) {
        console.log('service updateItem')

        fetch('http://localhost:8090/bucketlist/1/items/'+item.id, {
            method: 'put',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
          }).then(response=>response.json())
            .then(response => {
                history.push('/')
        }).catch(error => console.log("UPDATE Erreur : " + error));  
    }
}

export default ItemService;