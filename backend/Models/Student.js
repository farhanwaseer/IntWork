const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
     email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    fathername: {
        type: String,
        required: true
    },
    fathercontact: {
        type: Number,
        required: true
    },
    emergencycontact: {
        type: Number,
        required: true
    },
    guarantorname: {
        type: String,
        required: true
    },
    guarantorcontact: {
        type: Number,
        required: true
    },
    nic: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    } 
}
  )

module.exports = mongoose.model('Student', studentSchema)