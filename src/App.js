import React from 'react';
import './App.css';
import BucketList from './components/BucketList';

const ITEMS = [
  {id: '1', category: 'Voyage', label: 'Aller à New-York', status: 'TODO'},
  {id: '2', category: 'Voyage', label: 'Voyager en Asie', status: 'TODO'},
  {id: '3', category: 'Sport', label: 'Courir un marathon', status: 'TODO'},
  {id: '4', category: 'Voyage', label: 'Aller à Rome', status: 'DONE'}
];

function App() {
  return (
    <BucketList items={ITEMS} />
  );
}

export default App;
