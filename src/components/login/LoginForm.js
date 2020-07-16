import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { toggleModal, loginUser } from '../../actions/auth';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoginForm = ({ isAuthenticated, toggleModal, loginUser, history }) => {
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    if (isAuthenticated) {
      console.log('use effect: ', isAuthenticated);
      return history.push('/welcome');
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [isAuthenticated]);

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // toggleModal();
    console.log(formState);
    loginUser(formState);
    console.log('after login ', isAuthenticated);
  };

  const node = useRef();

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    toggleModal();
  };

  const { email, password } = formState;

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: [e.target.value] });
  };

  return (
    <div className='card' ref={node}>
      <h3>Login</h3>
      <a className='close' onClick={() => toggleModal()}></a>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' value={email} onChange={handleChange} />

        <label htmlFor='password'>Password</label>
        <input
          type='text'
          name='password'
          value={password}
          onChange={handleChange}
        />

        <button className='submit-btn btn'>Login</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

LoginForm.prototypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { toggleModal, loginUser })(
  withRouter(LoginForm)
);
