const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "id": String,
        "name": String,
        "designation": String,
        "salary": String
    }
)
let employeemodel = mongoose.Model("employees", schema);
module.exports = { employeemodel }