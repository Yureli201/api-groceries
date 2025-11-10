import Customer from '../models/customer.model.js';

const customersDAOs = {};

customersDAOs.getAll = async () => {
  const customers = await Customer.find();
  return customers;
}

customersDAOs.getOne = async(id) =>{
  const customer = await Customer.findOne({customer_id:id});
  return customer;
}

customersDAOs.insert = async(customer) => {
  const customerInsert = await Customer.create(customer);
  return customerInsert;
}

customersDAOs.update = async(customer, id) => {
  const customerUpdate = await Customer.findOneAndUpdate({customer_id:id},customer);
  return customerUpdate;
}

customersDAOs.delete = async(id) => {
  const customerDelete = await Customer.findOneAndDelete({customer_id:id});
  return customerDelete;
}


export default customersDAOs;