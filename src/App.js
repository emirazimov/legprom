import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Adminka from './components/Adminka/Adminka';
import Main from './components/Main/Main';
// import Login from './components/Login/Login'
import { AuthProvider } from './auth';
import { Switch, Route, NavLink, Link, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import PrivateRoute from './PrivateRout';
import Recovering from './Recovering.PNG'
import './App.css'

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <AuthProvider>
          <Switch>

            <Route path="/main" component={Main} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/admin" component={Adminka} />
            <Redirect to="/main/newsin" />
          </Switch>
        </AuthProvider>
      </BrowserRouter> */}
      <img src={Recovering} className="Recovering" />
    </>
  );
}

export default App;
