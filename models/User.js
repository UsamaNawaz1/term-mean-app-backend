const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let User = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   password: {
    type: String
    },
    user_type: {
      type: String
      },
  
}, {
   collection: 'user'
})
module.exports = mongoose.model('User', User)