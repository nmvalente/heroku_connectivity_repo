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

module.exports = router;
