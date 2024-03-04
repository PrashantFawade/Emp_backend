const mongoose = require("mongoose")
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/EmployeeHub_DB";

const AddEmployeeSchema = Schema({
    name : { type:String },
    dob : { type:String},
    mobNumber : {type:Number},
    email : {type:String},
    address : {type:String},
    pincode : {type:Number},

}, { collection: "AddEmployee", timestamps: true });

const AddDepartmentSchema = Schema({
    deptname : { type:String },
    deptCode : { type:Number},
    unit : {type:String},
    contact : {type:Number},
    location : {type:String},

}, { collection: "AddDepartment", timestamps: true });

const AssignDepartmentSchema = Schema({
    empName : { type:String },
    detName : { type:String}

}, { collection: "AssignDepartment", timestamps: true });

let connection = {};

connection.getAddEmployeeConnection = async () => {
    try {
        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        let model = await mongoose.model('AddEmployee', AddEmployeeSchema);
        return model;
    } catch (err) {
        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    }
}

connection.getAddDepartmentConnection = async () => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        let model = await mongoose.model('AddDepartment', AddDepartmentSchema);
        return model;
    } catch (err) {
        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    }
}

connection.getAssignDepartmentConnection = async () => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        let model = await mongoose.model('AssignDepartment', AssignDepartmentSchema);
        return model;
    } catch (err) {
        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    }
}

module.exports = connection;