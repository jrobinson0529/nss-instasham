import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import PostDetailsCard from '../components/instasham-design-system/PostDetailsCard';
import POSTJSON from '../sample_json/posts.json';
import UserList from '../components/instasham-design-system/UsersList';
import LoginPage from '../views/LoginPage';
import PrivateRoute from './PrivateRoute';
import Feed from '../views/Feed';

function Routes({ user }) {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={() => <LoginPage user={user}/>} />
        <PrivateRoute exact path="/" component={() => <Feed />} user={user}/>
        <PrivateRoute exact path="/browse" component={() => <UserList user={user}/>} user={user}/>
        <PrivateRoute exact path="/create" component={() => <h1>FORM HERE</h1>} user={user}/>
        <PrivateRoute exact path="/hearts" component={() => <PostDetailsCard postInfo={Object.values(POSTJSON)[0]}/>} user={user}/>
        <PrivateRoute exact path='/edit/:postId' component={() => <h1>PREPOP FORM</h1>} user={user}/>
      </Switch>
    </>
  );
}
Routes.propTypes = {
  user: PropTypes.any
};

export default Routes;
