
function init(app){

  var express = require('express');

  var path = require('path');

  console.log("Initialising Router");

  // uncomment after placing your favicon in /public
  // app.use(favicon(path.join(__dirname, '/../public', 'favicon.ico')));

  // set up static folder directory
  app.use(express.static(path.join(__dirname, '/../../public')));

  //
  var routes = require('./routes');

  // referencing route index module
  app.use('/',routes);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
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

}

module.exports = init;
