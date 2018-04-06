// routes/Results.js
let express = require('express');
let router = express.Router();
let models = require('../../models/Results');
let Results = models.Results;
let Result = models.Result;

/* GET ALL RESULTS */
router.route('/')
.get(function(req, res) {
  Results.find({}, function (err, results) {
    if (err) return next(err);
    res.json(results);
  });
})
/* CREATE NEW RESULT */
.post(
  function(req, res) {
    let result = new Results();
    let connectivity_id = req.connectivity_id;
    result.sample_number = req.sample_number;
    result.test_date = req.test_date;
    result.test_time = req.test_time;
    result.patient_id = req.patient_id;
    result.patient_name = req.patient_name;
    result.patient_species = req.patient_species;
    result.patient_age = req.patient_age;
    result.patient_gender = req.patient_name;
    result.results = req.results;
    /*let text = {
      "results":[{
        "test_name":"GPT-ALT",
        "unit":1.3,
        "warnings": ["Expired Slide", "Overheat"]
      }]
    };
    let results = JSON.parse(text);*/
    result.results = results;
    result.save(function (err) {
      if (err) {
        return res.json({ status: 'failure'});
      }
      else return res.sendStatus(200);
    });
  });

/* GET RESULTS FILTER BY DATE */
router.route('/:min_date/:max_date')
.get(function(req, res) {
  console.log(req.params);
  let min_date = req.params.min_date;
  let max_date = req.params.max_date;
  console.log(max_date);
  Results.find({test_date: {$gte: new Date(min_date), $lt: new Date(max_date)}}, function (err, results) {
    if (err) {
      return res.json({status: 'failure in find'});
    }
    console.log(results);
    return res.json(results);
  })
});

module.exports = router;
