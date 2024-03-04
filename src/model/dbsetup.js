
const collection = require('../utilities/connection');
const Items = require('./department');
// const db = require('../../db.json');



  const employee = [ {
    "name": "sai yenkure",
    "dob" : "04/02/2000",
    "mobNumber": 901010101,
    "email" : "Saiyenkure2000@gmail.com",
    "address": "At.Post.BOROLLLL",
    "pincode": 400001
  }]

  const department = [ {
    "deptname": "MFGADM Department",
    "deptCode": 1001,
    "unit": "DISC_0002",
    "contact": 9090909090,
    "location": "PUNEE"
  }]

  exports.setupDb = async ()=>{
    // let itemsModel = await collection.getItemsConnection();
    // await itemsModel.deleteMany();
    //  let itemObj = new Items(items)
    // let insertItoms = await itemsModel.insertMany(itemObj);
   
    let usersModel = await collection.getAddEmployeeConnection();
    await usersModel.deleteMany();
    let insertUsers = await usersModel.insertMany(employee);


    // let dept = await collection.getAddDepartmentConnection();
    // await dept.deleteMany();
    // let insertDepartment = await dept.insertMany(department);

    // let statesModel = await connection.getStatesConnection();
    // await statesModel.deleteMany();
    // let insertStates = await statesModel.insertMany(states);

    if( insertUsers ){
        return 'Insertion successful !!!'
    }else{
        let err = new Error("Insertion failed");
        err.status = 400;
        throw err;
    }


  }; 