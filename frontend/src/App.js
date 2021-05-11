import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Helmet} from "react-helmet";
import Layout from "./components/UI/Layout/Layout";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Home from "./containers/Home/Home";
import {useSelector} from "react-redux";

const ProtectedRoute = ({isAllowed, redirectTo, ...props}) => {
  return isAllowed ?
    <Route {...props} /> :
    <Redirect to={redirectTo}/>;
};

const App = () => {
  const user = useSelector(state => state.users.user);

  return (
    <Layout>
      <Helmet
        titleTemplate="%s - Web Chat"
        default="Web Chat"
      />
      <Switch>
        <ProtectedRoute
          exact path="/"
          component={Home}
          isAllowed={user}
          redirectTo="/login"
        />
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </Layout>
  );
};

export default App;
