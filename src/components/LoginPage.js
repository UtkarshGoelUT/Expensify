import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>Keep track of all your expenses with Expensify</p>
            <button onClick={startLogin} className="button">Login with Google</button>
        </div>

    </div>
);

const mapDispathToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispathToProps)(LoginPage);