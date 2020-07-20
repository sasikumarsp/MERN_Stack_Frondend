import React, { Component } from 'react'
import Register from './auth/register'
import Login from './auth/login'
import Home from './job/home'
import JForm from './job/add'
import ProtectedRouter from './prodector/prodected'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <ProtectedRouter exact path="/home" component={Home} />
                <ProtectedRouter exact path="/add" component={JForm} />
            </Switch>
            <ToastContainer />
        </div>
    )
}

export default App;
