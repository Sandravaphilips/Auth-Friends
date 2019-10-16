import React from 'react';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

function App(props) {
  const onLogout = () => {
    localStorage.clear();
    
    props.history.replace('/');
  };

  return (
    <div>
      <nav>
        <span>
          <NavLink exact to='/'>Login</NavLink>
          <NavLink to='/friends'>List of Friends</NavLink>
        </span>

        <button onClick={onLogout}>Logout</button>
      </nav>

      <main>
        <Route
          exact
          path='/'
          component={Login}
        />

        <Route
          exact
          path='/friends'
          render={props => withAthCheck(FriendsList, props)}
        />
      </main>
    </div>
  );
}




function withAthCheck(Component, props) {
  if (localStorage.getItem('token')) {
    return <Component {...props} />
  }
  return <Redirect to='/' />;
}

export default withRouter(App);

