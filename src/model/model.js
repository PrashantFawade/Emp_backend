
const connection = require('../utilities/connection');

let model = {};

model.getEmployeesData = async ()=>{
    let model = await connection.getAddEmployeeConnection();
    let EmployeesData = await model.find({});
    if(EmployeesData){
        return EmployeesData;
    }else{
        return null;
    }
};

model.getDepartmentData = async ()=>{
    let model = await connection.getAddDepartmentConnection();
    let deptData = await model.find({});
    if(deptData){
        return deptData;
    }else{
        return null;
    }
};

model.GetAssignedDepartmentData = async ()=> {
    let model = await connection.getAssignDepartmentConnection();
    let assigData = await model.find({});
    if(assigData){
        return assigData;
    }else{
        return null;
    }
}

model.postEmployeeData = async (EmployeeObj)=>{
    let model = await connection.getAddEmployeeConnection();
    let insertData = await model.create(EmployeeObj);
    if(insertData){
        return EmployeeObj;
    }else{
        return null;
    }
}

model.postDepartmentData = async (DepartmentObj)=>{
    let model = await connection.getAddDepartmentConnection();
    let insertData = await model.create(DepartmentObj);
    if(insertData){
        return DepartmentObj;
    }else{
        return null;
    }
}

model.AssignDepartmentData = async (Department)=>{
    let model = await connection.getAssignDepartmentConnection();
    let insertData = await model.create(Department);
    if(insertData){
        return Department;
    }else{
        return null;
    }
}

model.updateDepartment = async (id , dept)=>{
    let model = await connection.getAssignDepartmentConnection();
    let updateDept = await model.updateOne({_id:id},{$set:{detName:dept.department}});
    if(updateDept){
        return true;
    }else{
        return null;
    }
}


model.EditEmployeesData = async (EditEmp)=>{
    let model = await connection.getAddEmployeeConnection();
    let updateEmp = await model.updateOne({_id:id},{$set:{name:EditEmp.name,dob:EditEmp.dob,mobNumber:EditEmp.mobNumber,email:EditEmp.email,address:EditEmp.address,pincode:EditEmp.pincode}});
    if(updateEmp){
        return true;
    }else{
        return null;
    }
}


model.deleteAssignedDepartment = async (Dept_id)=>{
    let model = await connection.getAssignDepartmentConnection();
    let deleteDepartment = await model.deleteOne({_id:Dept_id});
    if(deleteDepartment){
            return true;
    }else{
        return null;
    }
}

model.deleteDepartment = async (Dept_id)=>{
    let model = await connection.getAddDepartmentConnection();
    let deleteDepartment = await model.deleteOne({_id:Dept_id});
    if(deleteDepartment){
            return true;
    }else{
        return null;
    }
}

model.deleteEmployee = async (Emp_id)=>{
    let model = await connection.getAddEmployeeConnection();
    let deleteEmp = await model.deleteOne({_id:Emp_id});
    if(deleteEmp){
            return true;
    }else{
        return null;
    }
}











model.getItemsData = async ()=>{
    let model = await connection.getItemsConnection();
    let itemsData = await model.find({});
    if(itemsData){
        return itemsData;
    }else{
        return null;
    }
};

model.getRestosData = async (restoId)=>{
    let model = await connection.getItemsConnection();
    let itemsData = await model.find({id:restoId});
    if(itemsData){
        return itemsData;
    }else{
        return null;
    }
};



model.updateAddress = async (addressData)=>{
    let model = await connection.getUsersConnection();
    let insertData = await model.updateOne({password:addressData.password},{$set:{"address.state":addressData.state , "address.zip":addressData.zip , "address.city":addressData.city ,"address.area":addressData.area }});
    if(insertData){
        return true;
    }else{
        return null;
    }
}

model.newPassword = async (usersObj)=>{
    
    let model = await connection.getUsersConnection();
    let insertData = await model.updateOne({mobNo:usersObj.mobNo},{$set:{password:usersObj.password}});
    if(insertData){
        return true;
    }else{
        return null;
    }
}

module.exports=model;