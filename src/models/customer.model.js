import {model, Schema} from 'mongoose';

const customerSchema = new Schema({
    customer_id:{
        type:String,
        required:true,
        unique:true
    },
    name:String,
    lastName:String,
    
    address:{
        street:String,
        city:String,
        state:String
    },
    phone:String,
    birthDate:String,
},
{
    versionKey:false,
    timestamps:true
});

export default model('customer',customerSchema);