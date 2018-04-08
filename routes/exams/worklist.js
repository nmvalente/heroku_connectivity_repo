// routes/Worklist.js
let express = require('express');
let router = express.Router();
let Worklist = require('../../models/Worklist');
let Results = require('../../models/Results');

router.route('/')
  .post(function(req, res){

      let worklist = new Worklist();
      for (prop in req.body) {
        worklist[prop] = req.body[prop];
      }
      worklist.save(function (err) {
        if (err) {
          return res.json({ status: 'failure'});
        }
        else return res.json({status : 'success', object: worklist});
      });
    }
  )
  .get(function(req, res){
      Worklist.find({},function(err, worklist) {
        if (err) {
          return res.json({ status: 'failure in find'});
        }
        return res.send(worklist);
      })
    }
  );

router.route('/:id')
  .delete(function(req, res){
    Worklist.findByIdAndRemove(req.params.id,function(err, worklist) {
      if (err) {
        return res.json({ status: 'failure in find'});
      }
      return res.json({status : 'success'});
    })
  });

/* GET WORKLIST FILTER BY DATE */
router.route('/:min_date/:max_date')
.get(function(req, res) {
  let min_date = req.params.min_date;
  let max_date = req.params.max_date;
  Results.find({connectivity_id: req.body.connectivity_id, test_date: {$gte: new Date(min_date), $lt: new Date(max_date)}}, function (err, results) {
    if (err) {
      return res.json({status: 'failure in find'});
    }
    else return res.json(results);
  })
});

module.exports = router;
