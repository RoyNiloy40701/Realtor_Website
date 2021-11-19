import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import PlaceOrder from './Pages/Shared/PlaceOrder/PlaceOrder';
function App() {
  return (
    <div className="">
      <AuthProvider>
      <BrowserRouter>
            <Navigation/>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/explore">
              <Explore></Explore>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/placeOrder/:planId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
