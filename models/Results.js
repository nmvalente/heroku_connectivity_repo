let mongoose = require('mongoose')
let schema = mongoose.Schema

// ## Schema

let ResultSchema = schema({
  test_name: {type: String},
  test_equal: {type: String},
  test_unit: {type: String},
  test_result: {type: String},
  test_ref_lower:  {type: String},
  test_ref_upper:  {type: String},
  test_warnings: [{type:String}],
  test_slide_lot:  {type: String},
  test_slide_expire:  {type: String}
});

let ResultsSchema = schema({
    connectivity_id: {type: String},
    sample_number: {type: String},
    test_date: {type: Date},
    test_time: {type: Date},
    test_condition: {type: String},
    test_operator: {type: String},
    sample_position: {type: String},
    patient_id: {type: schema.Types.ObjectId},
    patient_name:{type: String},
    patient_species:{type: String},
    patient_age:{type: String},
    patient_gender:{type: String},
    results:[ResultSchema]}
  ,
  {timestamps : true});

let Results = mongoose.model('Results', ResultsSchema)
let Result = mongoose.model('Result', ResultSchema)

module.exports = {
  Results: Results,
  Result: Result
};
