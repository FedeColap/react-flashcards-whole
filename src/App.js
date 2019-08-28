import React from 'react';
import List from './composition/List';
import './App.css';
import './store.js';

function App(store) {
  
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-List'>
        {store.lists.map(list => (
          <List
            key={list.id}
            header={list.header}
            cards={list.cardIds.map(id => store.allCards[id])}>
          </List>
        ))}
      </div>
    </main>
  );
}

export default App;
