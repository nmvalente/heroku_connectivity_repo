let mongoose = require('mongoose')
let schema = mongoose.Schema

// ## Schema

let ResultSchema = schema({
    test_name: {type: String},
    unit: {type: String},
    value: {type: String},
    ref_lower:  {type: String},
    ref_upper:  {type: String},
    warnings: [{type:String}]
});

let ResultsSchema = schema({
    sample_number: {type: String},
    test_date: {type: Date},
    test_time: {type: Date},
    patient_id: {type: schema.Types.ObjectId},
    patient_name:{type: String},
    patient_species:{type: String},
    results:[ResultSchema]}
    ,
    {timestamps : true});

let Results = mongoose.model('Results', ResultsSchema)
let Result = mongoose.model('Result', ResultSchema)

module.exports = {
    Results: Results,
    Result: Result
};