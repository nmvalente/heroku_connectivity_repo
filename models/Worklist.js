let mongoose = require('mongoose')
let schema = mongoose.Schema

// ## Schema

let WorklistSchema = schema({
    sample_number: {type: String},
    patient_id: {type: String},
    patient_name:{type: String},
    patient_species:{type: String},
    patient_gender:{type: String},
    patient_age:{type: String},
    tests:[
      {
        test_name: {type: String}
      }
      ],
    exam_date:{type: String},
    exam_time:{type: String}
    },
    {timestamps : true});

module.exports = mongoose.model('Worklist', WorklistSchema);
