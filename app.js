let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let bodyParser = require('body-parser');
let cors = require('cors');
let mongoose = require('mongoose');

//Set up default mongoose connection
let mongoDB = 'mongodb://admin:admin@ds123799.mlab.com:23799/connectivity';
mongoose.connect(mongoDB, {})
	.then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
let db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let book = require('./routes/book');
let results = require('./routes/exams/results');
let worklist = require('./routes/exams/worklist');

let app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
//app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/book', book);
app.use('/api/results', results);
app.use('/api/worklist', worklist);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.set('view engine', 'html');

module.exports = app;
