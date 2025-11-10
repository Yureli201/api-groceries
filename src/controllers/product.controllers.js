import productsDAOs from "../daos/products.daos.js";

const productsControllers = {};

productsControllers.getAll = (req, res) => {
    //Aquí se comunica con el DAOs
    productsDAOs.getAll()
    .then((products)=>{
        res.json({ data : products });
    })
    .catch((error)=>{
        res.json({
            message:'Ocurrió un error',
            error:error
        })
    });
};

productsControllers.getOne = (req,res) =>{
    const barcode = req.params.barcode;
    //Aquí se comunica con el DAOs
    productsDAOs.getOne(barcode)
    .then((product)=>{
        if(product != null) 
            res.json({ data : product });
        else
            res.status(404).json({ message:"Producto no encontrado"});
    })
    .catch((error)=>{
        res.json({
            message:'Ocurrió un error',
            error:error
        })
    });
}

productsControllers.insertOne = (req,res) => {
    productsDAOs.insert(req.body)
    .then((productInsert)=>{
        res.status(201).json({
            message:"Producto insertado",
            productInsert
        })
    })
    .catch((error)=>{
        res.json({
            message:'Ocurrió un error',
            error:error
        })
    });
}

productsControllers.update = (req,res) => {
    productsDAOs.update(req.body, req.params.barcode)
    .then((productUpdate)=>{
        if(productUpdate) 
            res.json({ 
                message:"Producto actualizado",
                data: productUpdate
            });
        else
            res.status(404).json({ message:"Producto no encontrado"});
    })
    .catch((error)=>{
        res.json({
            message:'Ocurrió un error',
            error:error
        })
    });
}

productsControllers.delete = (req,res) =>{
    productsDAOs.delete(req.params.barcode)
    .then((productDelete)=>{
        res.status(201).json({
            message:"Producto eliminado",
            productDelete
        })
    })
    .catch((error)=>{
        res.json({
            message:'Ocurrió un error',
            error:error
        })
    });
}

export default productsControllers;