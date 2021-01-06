import React, {useState} from 'react'
import { useParams, useLocation, useHistory } from 'react-router-dom'


function DetailItem(props) {

    let {slug} = useParams();
    let location = useLocation();
    let history = useHistory();

    const [label , setLabel] = useState(location.state && location.state.item.label)

    const changeLabel = (e) =>{
        setLabel(e.target.value)
     }

    const handleSubmit = (event) =>{
        event.preventDefault();
        var itemWithNewLabel = location.state.item
        itemWithNewLabel.label = label

        fetch('http://localhost:8090/bucketlist/1/items/'+itemWithNewLabel.id, {
            method: 'put',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemWithNewLabel)
          }).then(response=>response.json())
            .then(response => {
                history.push('/')
        }).catch(error => console.log("UPDATE Erreur : " + error));   
    }

    return( 
        <div>
            <h1>Item N°{slug}</h1>
            <form className="App-form" onSubmit={e => {handleSubmit(e)}}>
            <input 
                type="text" 
                onChange={changeLabel} 
                value={label}
                required/>

            <button type="submit">Modifier</button>
        </form>
        </div>
    )
}

export default DetailItem;