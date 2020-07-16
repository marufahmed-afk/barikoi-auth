import React, { Fragment } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/auth';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const Login = ({ auth: { openModal }, toggleModal }) => {
  return (
    <Fragment>
      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className='backdrop'
          >
            <LoginForm />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className='btn open-btn'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => toggleModal()}
      >
        Open Form
      </motion.button>
    </Fragment>
  );
};

Login.prototypes = {
  login: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { toggleModal })(Login);
