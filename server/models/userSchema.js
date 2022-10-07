import mongoose from 'mongoose'
const user = new mongoose.Schema({
    name:{type:String,required:true},
    rollNo:{type:Number,required:true,unique:true},
    password:{type:String,required:true},
    // quote:{type:String}//same like created at
},
    {collection: 'userData'}
)

// const model = mongoose.model('user-data',user)//access user by user-data

// module.exports =model;
export const User = mongoose.model('userSchema', user)