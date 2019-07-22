import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UseCase1 from './use-case-1/index';
import UseCase2 from './use-case-2/index';
import UseCase3 from './use-case-3/index';

const App = () => {
  return (
    <div  className="container">
      <h1>Three React Router Use Cases</h1>
      <Router>
        <ul>
            <li><Link to="/usecase1">Use Case 1 - Nested routers</Link></li>
            <li><Link to="/usecase2">Use Case 2 - Multiple switch</Link></li>
            <li><Link to="/usecase3">Use Case 3 - Add sections as user progresses</Link></li>
        </ul>
        <header className="App-header">
            <Route exact path="/" component={UseCase1} />
            <Route path="/usecase1" component={UseCase1} />
            <Route path="/usecase2" component={UseCase2} />
            <Route path="/usecase3" component={UseCase3}/>
        </header>
      </Router>
    </div>
  );
}

export default App;
