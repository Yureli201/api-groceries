import Employee from "../models/employee.model.js";

const employeesDAOs = {};

employeesDAOs.getAll = async () => {
  const employees = await Employee.find();
  return employees;
}

employeesDAOs.getOne = async(id) => {
  const employee = await Employee.findOne({employee_id:id});
  return employee;
}

employeesDAOs.insert = async(employee) => {
  const employeeInsert = await Employee.create(employee);
  return employeeInsert;
}

employeesDAOs.update = async(employee, id) => {
  const employeeUpdate = await Employee.findOneAndUpdate({employee_id:id},employee);
  return employeeUpdate;
}

employeesDAOs.delete = async(id) => {
  const employeeDelete = await Employee.findOneAndDelete({employee_id:id});
  return employeeDelete;
}

export default employeesDAOs;