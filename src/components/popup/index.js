import React from 'react';
import { connect } from 'react-redux';

const Popup = props => {
  const { message } = props;
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps)(Popup);
