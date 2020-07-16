import React from 'react';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <h1>hello</h1>
      </div>
    </Provider>
  );
}

export default App;
