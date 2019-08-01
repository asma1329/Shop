const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        prenom: {
            type: String,
            required: true
        },
        nom: {
            type: String,
            required: true
        },
        surnom: {
            type: String,
            required: true
        },
        
        email: {
            type: String,
            required: true,
            unique:true
        },

        password: {
            type: String,
            required: true
        },
        role:{
          type : String,
          required: true
        },
        etat : {
            type : Boolean,
            required:true,
            default:false
        }

    }
);


const User=mongoose.model('user',UserSchema); 

module.exports={User};