const express = require('express');
const bodyParser = require('body-parser'); 
const { mongoose } = require('../db/config'); 
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');


const { User } = require('../models/user');

let userWs = express();
userWs.use(bodyParser.json());

userWs.get("/", (req, res) => {  
    res.send('welcome to user controller');

});

userWs.post("/inscription", (req, res) => {
    //récupération de code et insertion ds la base
    let data = req.body;
    let privateKey = 10;
    let hashedPassword = bcrypt.hashSync(data._password, privateKey);
    let user = new User({
        
        prenom: data._prenom,
        nom: data._nom,
        surnom: data._surnom,
        email: data._email,
        password: hashedPassword,  
        role: "user"
    });

    user.save().then((x) => {
        res.status(200).send({ message: "user insereted !" })
    }).catch((e) => {
        res.status(400).send({ message: e })
    });

});

userWs.post("/connexion", (req, res) => {
    
    let email = req.body._email;
    let password= req.body._password;
console.log({email,password});


   
    User.findOne({ email }).then((user) => {
    
        if (!user) {
            res.status(404).send({ message: "email incorrect" })
        }
    
        let valid = bcrypt.compareSync(password, user.password);
    
        if (!valid) {
            res.status(404).send({ message: "mot de passe incorrect" })
        }

        let token = jwt.sign({ _id: user._id, _role: user.role }, "chaineperso").toString();
    
        res.status(200).send({ token });
    
    }).catch((erreur) => {
       res.status(400).send({ message: erreur });
    });

});

module.exports = userWs;