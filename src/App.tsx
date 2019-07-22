import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UseCase1 from './use-case-1/index';
import UseCase2 from './use-case-2/index';
import UseCase3 from './use-case-3/index';

const App = () => {
  return (
    <>
      <h1>Three React Router Use Cases</h1>
      <Router>
        <div className="App">
          <ul>
            <li><Link to="/UseCase1">Use Case 1</Link></li>
            <li><Link to="/UseCase2">Use Case 2</Link></li>
            <li><Link to="/UseCase3">Use Case 3</Link></li>
          </ul>
          <header className="App-header">
            <Route exact path="/UseCase1" component={UseCase1} />
            <Route path="/UseCase2" component={UseCase2} />
            <Route path="/UseCase3" component={UseCase3} />
          </header>
        </div>
      </Router>
    </>
  );
}

export default App;
