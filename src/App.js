import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
