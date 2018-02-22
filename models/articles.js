const mongoose = require('mongoose');

module.exports = mongoose.model('Article',{
source: {
   type :String,
   required: true,
    },
topic: {
   type : String,
   required : true
    },
description: {
    type : String
},
imageURL : {
    type : String 
},
newsURL :{
    type : String
}
});
//schema---------------------------------------------------------------------------------------------------
// const articleSchema = mongoose.Schema({
// source: {
//    type :String,
//    required: true,
//     },
// topic: {
//    type : String,
//    required : true
//     },
// description: {
//     type : String
// },
// imageURL : {
//     type : String 
// },
// newsURL :{
//     type : String
// }
// });



