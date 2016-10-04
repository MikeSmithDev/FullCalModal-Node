var express = require("express"),
  compression = require('compression'),
	path = require("path"),
	index = require('./app/controllers/index.js'),
  calendars = require('./app/controllers/calendar.js'),
  favicon = require('express-favicon'),
	env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('port', process.env.PORT || 5250);
app.set('views', __dirname + '/app/views');
app.engine("def", require("dot-emc").init({app:app, options:{templateSettings:{cache:env === 'development' ? false : true}}}).__express);
app.set('view engine', 'def');

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(compression());

//ERROR HANDLING
app.use(function(err, req, res, next){  
  var template = 'error';
  var data = {error: err, title: err.message || 'You broke it... you really broke it.' };

  if (err.status === 403) {
    res.status(403);
    template = '403';
  } else if (err.status === 401) {
    res.status(401);
    template = '401';
  }
  else {
    res.status(err.status || 500);
  }

  if (req.accepts('html')) {
    res.render(template, data);
  }  else {
    res.send(data);
  }
});

app.get('/', index.home);
app.get('/bootstrap/', calendars.bootstrap);
app.get('/jquery/', calendars.jquery);
app.get('/gcal/', calendars.gcal);
app.get('/calendarJSON/', calendars.calendarJSON);



app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url, title: '404: This page doesn\'t exist' });
    return;
  }
});

var port = process.env.PORT || 5250;
app.listen(port);

console.log("Running at Port " + port);