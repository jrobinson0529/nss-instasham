import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
import { signInUser } from '../helpers/auth';

function LoginPage({ user }) {
  const history = useHistory();
  const handleClick = () => {
    signInUser();
  };
  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, []);
  return (
    <div className='mx-auto w-50'>
    <h1>You must log in to view the site.</h1>
    <ButtonGroup>
      <Button color='primary' onClick={handleClick}>Login</Button>
    </ButtonGroup>
    </div>
  );
}
LoginPage.propTypes = {
  user: PropTypes.any,
};
export default LoginPage;
