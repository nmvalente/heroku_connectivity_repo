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
      let results = new Results();
      results.sample_number = "123";
      results.test_date = new Date();
      results.test_time = "22:45:10";
      results.patient_id = "1";
      results.patient_name = "AS";
      results.patient_species = "human";
      results.patient_age = "23";
      results.patient_gender = "male";
      results.save();
      return res.json({message: "ok"});
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
