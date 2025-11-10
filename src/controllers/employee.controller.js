import employeesDAOs from "../daos/employees.daos.js";

const employeesControllers = {};

employeesControllers.getAll = (req, res) => {
    //Aquí se comunica con el DAOs
    employeesDAOs.getAll()
    .then((employees)=>{
        res.status(201).json({ data : employees });
    })
    .catch((error)=>{
        res.json({
            message:'Ocurrió un error',
            error:error
        })
    });
};

employeesControllers.getOne = (req,res) =>{
    const id = req.params.id;
    employeesDAOs.getOne(id)
    .then((employee)=>{
        if(employee != null) 
            res.status(201).json({ data : employee })
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

employeesControllers.insertOne = (req,res) => {
    employeesDAOs.insert(req.body)
    .then((employeeInsert)=>{
        res.status(201).json({
            message:"Empleado insertado",
            employeeInsert
        })
    })
    .catch((error)=>{
        res.json({
            message:'Ocurrió un error',
            error:error
        })
    });
}

employeesControllers.update = (req,res) => {
    employeesDAOs.update(req.body, req.params.id)
    .then((employeeUpdate)=>{
        if(employeeUpdate) 
            res.status(201).json({ 
                message:"Empleado actualizado",
                data: employeeUpdate
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

employeesControllers.delete = (req,res) =>{
    employeesDAOs.delete(req.params.id)
    .then((employeeDelete)=>{
        res.status(201).json({
            message:"Empleado eliminado",
            employeeDelete
        })
    })
    .catch((error)=>{
        res.json({
            message:'Ocurrió un error',
            error:error
        })
    });
}

export default employeesControllers;