const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/auth.config');
const db = require("../models");

const User = db.user;

module.exports.signin = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({message: "User not found"});
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordIsValid) {
            return res.status(401).send({message: "Invalid Password"});
        }

        var token = jwt.sign({id: user.id, email: user.email}, config.secret, {expiresIn: 86400}); //24 horas
        res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            accessToken: token
        });
    }).catch(err => {
        res.status(500).send({message: "error"});
    });
};