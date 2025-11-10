import customersDAOs from "../daos/customers.daos.js";

const customersControllers = {};

customersControllers.getAll = (req, res) => {
    //Aquí se comunica con el DAOs
    customersDAOs.getAll()
    .then((customers)=>{
        res.status(201).json({ data : customers });
    })
    .catch((error)=>{
        res.json({
            message:'Ocurrió un error',
            error:error
        })
    });
};

customersControllers.getOne = (req,res) =>{
    const id = req.params.id;
    customersDAOs.getOne(id)
    .then((customer)=>{
        if(customer != null) 
            res.status(201).json({ data : customer })
        else
            res.status(404).json({ message:"Empleado no encontrado"});
    })
    .catch((error)=>{
        res.json({
            message:'Ocurrió un error',
            error:error
        })
    });
}

customersControllers.insertOne = (req,res) => {
    customersDAOs.insert(req.body)
    .then((customerInsert)=>{
        res.status(201).json({
            message:"Empleado insertado",
            customerInsert
        })
    })
    .catch((error)=>{
        res.json({
            message:'Ocurrió un error',
            error:error
        })
    });
}

customersControllers.update = (req,res) => {
    customersDAOs.update(req.body, req.params.id)
    .then((customerUpdate)=>{
        if(customerUpdate) 
            res.status(201).json({ 
                message:"Empleado actualizado",
                data: customerUpdate
            });
        else
            res.status(404).json({ message:"Empleado no encontrado"});
    })
    .catch((error)=>{
        res.json({
            message:'Ocurrió un error',
            error:error
        })
    });
}

customersControllers.delete = (req,res) =>{
    customersDAOs.delete(req.params.id)
    .then((customerDelete)=>{
        res.status(201).json({
            message:"Empleado eliminado",
            customerDelete
        })
    })
    .catch((error)=>{
        res.json({
            message:'Ocurrió un error',
            error:error
        })
    });
}

export default customersControllers;