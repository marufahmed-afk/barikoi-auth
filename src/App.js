import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// component imports
import Login from './components/login/Login';
import Welcome from './components/Welcome';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='app'>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/welcome' component={Welcome} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
