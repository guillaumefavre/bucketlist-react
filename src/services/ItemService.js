const ItemService = {

    async getAllItems() {
        try {
            const response = await fetch('http://localhost:8090/bucketlist/1/items');
            return await response.json();
        } catch (error) {
            throw new Error('Erreur lors de la récupération des items');
        }        
    },

    updateItem(item, history) {

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

    changeStatus(item) {
        fetch('http://localhost:8090/bucketlist/1/items/'+item.id, {
            method: 'put',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
          }).catch(error => console.log("UPDATE Erreur : " + error));  
    },

    async addItem(item) {
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
    },

    async removeItem(item) {
        fetch('http://localhost:8090/bucketlist/1/items/'+item.id, {
            method: 'delete'
          }).then(response=>response.text())
            .catch(error => {
                console.log("DELETE Erreur : " + error)
                throw new Error('Erreur lors de la suppression de l\'item ', item.id);
            });  
    }
}

export default ItemService;