import React from 'react';
import './App.css';
import BucketList from './components/BucketList';
import NewItemForm from './components/NewItemForm';

const ITEMS = [
  {id: '1', category: 'Voyage', label: 'Aller à New-York', status: 'TODO'},
  {id: '2', category: 'Sport', label: 'Courir un marathon', status: 'TODO'},
  {id: '3', category: 'Voyage', label: 'Voyager en Asie', status: 'TODO'},
  {id: '4', category: 'Voyage', label: 'Visiter le Colisée', status: 'DONE'},
  {id: '5', category: 'Sport', label: 'Sauter en parachute', status: 'TODO'},
  {id: '6', category: 'Apprentissage', label: 'Parler anglais couramment', status: 'DOING'}
];

function App() {
  return (
    <div>
      <NewItemForm />
      <BucketList items={ITEMS} />

    </div>

  );
}

export default App;
