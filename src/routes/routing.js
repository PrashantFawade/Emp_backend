
const express = require('express');
const router = express.Router();

const service = require('../service/service');
const User = require('../model/user');
const Department = require('../model/department');
const AssignDet = require('../model/assignDet');

/* fetching data of all Employees */
router.get('/GetEmployeesData', async (req, res, next) => {

    try {
        let EmployeesData = await service.getEmployeesData();
        // console.log(EmployeesData);
        res.send(EmployeesData);
    } catch (error) {
        next(error);
    }
});


router.get('/GetDepartmentData', async (req, res, next) => {

    try {
        let deptData = await service.getDepartmentData();
        res.send(deptData);
    } catch (error) {
        next(error);
    }
});

router.get('/GetAssignedDepartmentData' , async (req,res,next) => {
    try {
        let assigData = await service.GetAssignedDepartmentData();
        res.send(assigData);
    } catch (error) {
        next(error);
    }
})


/* posting Employee Data in DB */
router.post('/AddEmployee', async (req, res, next) => {
    try {
        let EmployeeObj = new User(req.body);
        let user = await service.postEmployeeData(EmployeeObj);
        res.send(user);
   
    } catch (error) {
        next(error);
    }
});


/* posting Department Data in DB */
router.post('/AddDepartment', async (req, res, next) => {
    try {
        let DepartmentObj = new Department(req.body);
        let department = await service.postDepartmentData(DepartmentObj);
        res.send(department);
   
    } catch (error) {
        next(error);
    }
});

/* assigning department to employees*/

router.post('/AssignDepartment', async (req, res, next) => {
    try {
        console.log("reqBody : >> " + req.body['empName']);
        let AssignDetObj = new AssignDet(req.body);
        console.log("in routing " + AssignDetObj.empName);
        let department = await service.AssignDepartmentData(AssignDetObj);
        res.send(department);
   
    } catch (error) {
        next(error);
    }
});


router.put('/updateDepartment/:id' , async (req,res,next)=>{
    let Nid = req.params.id;
    let Ndept = req.body; 
    try {
        await service.updateDepartment(Nid , Ndept);
        res.send("Department updated successfully !!");
    } catch (error) {
        next(error);
    }
})


router.put('/EditEmployeesData' , async (req,res,next)=>{
    let EditEmp = req.body; 
    try {
        await service.EditEmployeesData(EditEmp);
        res.send(EditEmp.name + "data updated successfully !!");
    } catch (error) {
        next(error);
    }
})








/* Delete Mothods */

// Delete Department mothod

router.delete('/deleteAssignedDepartment/:id' , async (req, res ,next)=>{
    try {
        let dept_id = req.params.id;
        let deleteDept = await service.deleteAssignedDepartment(dept_id);
        res.send(deleteDept);
    } catch (error) {
        next(error);
    }
})

//  Delete Department mothod

router.delete('/deleteDepartment/:id' , async (req, res ,next)=>{
    try {
        let dept_id = req.params.id;
        let deleteDept = await service.deleteDepartment(dept_id);
        res.send(deleteDept);
    } catch (error) {
        next(error);
    }
})

// Delete Employee method

router.delete('/deleteEmployee/:id' , async (req, res ,next)=>{
    try {
        let Emp_id = req.params.id;
        let deleteEmp = await service.deleteEmployee(Emp_id);
        res.send(deleteEmp);
    } catch (error) {
        next(error);
    }
})







/* fetching data of all Items */
router.get('/items', async (req, res, next) => {

    try {
        let itemsData = await service.getItemsData();
        res.send(itemsData)
    } catch (error) {
        next(error);
    }
});

/* fetching perticular restaurent using Id */
router.get('/items/:restosId', async (req, res, next) => {

    try {
        let itemsData = await service.getRestosData(req.params.restosId);
        res.send(itemsData)
    } catch (error) {
        next(error);
    }
});



/* Updating Address Using Password Validation */
router.put('/updateAddress', async (req, res, next) => {

    try {
        let usersData = await service.updateAddress(req.body);
        res.send('Address Updated Successfully !!!');
        return true;
    } catch (error) {
        next(error);
    }
});

router.put('/newPassword', async (req, res, next) => {

    try {
        
        let user = await service.newPassword(req.body);
        res.send(user);
   
    } catch (error) {
        next(error);
    }
});


module.exports = router;
