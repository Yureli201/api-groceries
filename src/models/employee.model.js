import { model, Schema } from "mongoose";

const employeeSchema = new Schema ({
    employee_id:{
        type:Number,
        required: true,
        unique:true
    },
    name:String,
    lastName:String,
    address:{
        street:String,
        number:Number,
        city:String,
        state:String
    },
    age:Number,
    salary:Number
},
{
    versionKey:false,
    timestamps:true
});

export default model('employee', employeeSchema);