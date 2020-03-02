const express = require('express'),
    AuthRoute = express.Router();

const route = () => {

    AuthRoute.post('/signin', (req, res) => {
        res.status(200).json({
            message : "Sign in Successful",
            status : 200
        })
    });

    AuthRoute.post('/signup', (req, res) => {
        res.status(200).json({
            message : "Sign up Successful",
            status : 200
        })
    });

    return AuthRoute;

}

module.exports = route;