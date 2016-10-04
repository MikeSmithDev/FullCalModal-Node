exports.home = function(req, res){
  res.render('home', { 
    title: 'FullCalendar with Event Modals',
    metadesc: 'A node.js example using FullCalendar, gCal.js, and modal windows to display more information about an event.',
    metakeywords: 'doT, doT-emc, bootstrap, node, npm, fullcalendar, gcal.js, modal'
  });
};