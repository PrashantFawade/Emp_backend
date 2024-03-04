
const model = require('../model/model');

let service = {};

service.getEmployeesData = async ()=>{
    let EmployeesData = await model.getEmployeesData();
    if(EmployeesData){
        return EmployeesData;
    }else{
        let err = new Error('Error occured in service /');
        throw err;
    }
};

service.getDepartmentData = async ()=>{
    let deptData = await model.getDepartmentData();
    if(deptData){
        return deptData;
    }else{
        let err = new Error('Error occured in service /');
        throw err;
    }
};

service.GetAssignedDepartmentData = async ()=> {
    let assigData = await model.GetAssignedDepartmentData();
    if(assigData){
        return assigData;
    } else{
        let err = new Error('Error occured in service /');
        throw err;
    }
}

service.postEmployeeData = async (EmployeeObj)=>{
    let userData = await model.postEmployeeData(EmployeeObj);
    if(userData){
        return userData;
    }else{
        let err = new Error('Error occured in service /');
        throw err;
    }
}

service.postDepartmentData = async (DepartmentObj)=>{
    let departmentData = await model.postDepartmentData(DepartmentObj);
    if(departmentData){
        return departmentData;
    }else{
        let err = new Error('Error occured in service /');
        throw err;
    }
}


service.AssignDepartmentData = async (Department)=>{
    let departmentData = await model.AssignDepartmentData(Department);
    if(departmentData){
        return departmentData;
    }else{
        let err = new Error('Error occured in service /');
        throw err;
    }
}


service.updateDepartment = async (id , dept)=>{
    await model.updateDepartment(id , dept);
    return true;
}


service.EditEmployeesData = async (EditEmp)=>{
    await model.EditEmployeesData(EditEmp);
    return true;
}




service.deleteAssignedDepartment = async (Dept_id)=>{
    await model.deleteAssignedDepartment(Dept_id);
    return true;
}

service.deleteDepartment = async (Dept_id)=>{
    await model.deleteDepartment(Dept_id);
    return true;
}

service.deleteEmployee = async (Emp_id)=>{
    await model.deleteEmployee(Emp_id);
    return true;
}










service.getItemsData = async ()=>{
    let itemsData = await model.getItemsData();
    if(itemsData){
        return itemsData;
    }else{
        let err = new Error('Error occured in service /');
        throw err;
    }
};

service.getRestosData = async (restoId)=>{
    let itemsData = await model.getRestosData(restoId);
    if(itemsData){
        return itemsData;
    }else{
        let err = new Error('Error occured in service /');
        throw err;
    }
};



service.updateAddress = async (addressData)=>{
    let userData = await model.updateAddress(addressData);
    if(userData){
        return true;
    }else{
        let err = new Error('Error occured in service /');
        throw err;
    }
}

service.newPassword = async (usersObj)=>{
    
    let userData = await model.newPassword(usersObj);
    if(userData){
        return true;
    }else{
        let err = new Error('Error occured in service /');
        throw err;
    }
}

module.exports=service;