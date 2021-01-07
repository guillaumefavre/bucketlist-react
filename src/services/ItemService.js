const ItemService = {

    getAllItems: async function() {
        try {
            const response = await fetch('http://localhost:8090/bucketlist/1/items');
            return await response.json();
        } catch (error) {
            throw new Error('Erreur lors de la récupération des items');
        }        
    },

    updateItem: function(item, history) {

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
    },

    changeStatus: function(item) {
        fetch('http://localhost:8090/bucketlist/1/items/'+item.id, {
            method: 'put',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
          }).catch(error => console.log("UPDATE Erreur : " + error));  
    },

    addItem: async function(item) {
        try {        
            const response = await fetch('http://localhost:8090/bucketlist/1/items', {
                method: 'post',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
              });
              return await response.json();
        } catch (error) {
            throw new Error('Erreur lors de l\'ajout de l\'item');
        }  
    }
}

export default ItemService;