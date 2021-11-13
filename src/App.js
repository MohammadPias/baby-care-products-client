import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Login from './pages/Login/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './pages/Context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Products from './pages/Home/Products/Products';
import PlaceOrder from './pages/Order/PlaceOrder/PlaceOrder';
import EventProducts from './pages/Home/EventProduct/EventProducts';
import NotFound from '../src/pages/Home/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute path="/order/:productId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/eventProducts">
              <EventProducts></EventProducts>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
