import React from 'react';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import styled from 'styled-components';

const AppStyle = styled.div`
  padding: 10px;

  nav{
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    span{
      display: flex; 
      justify-content: space-between;
      width: 40%;
    }
  }
`

function App(props) {
  const onLogout = () => {
    localStorage.clear();
    
    props.history.replace('/');
  };

  return (
    <AppStyle>
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
    </AppStyle>
  );
}




function withAthCheck(Component, props) {
  if (localStorage.getItem('token')) {
    return <Component {...props} />
  }
  return <Redirect to='/' />;
}

export default withRouter(App);

