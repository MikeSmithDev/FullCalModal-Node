var moment = require('moment');

exports.bootstrap = function(req, res){
  res.render('bootstrap', { 
    title: 'FullCalendar with Bootstrap Event Modals',
    metadesc: 'A node.js example using FullCalendar, gCal.js, and modal windows to display more information about an event.',
    metakeywords: 'doT, doT-emc, bootstrap, node, npm, fullcalendar, gcal.js, modal'
  });
};

exports.jquery = function(req, res){
  res.render('jquery', { 
    title: 'FullCalendar with jQuery UI Event Modals',
    metadesc: 'A node.js example using FullCalendar, gCal.js, and modal windows to display more information about an event.',
    metakeywords: 'doT, doT-emc, bootstrap, node, npm, fullcalendar, gcal.js, modal'
  });
};


exports.gcal = function(req, res){
  res.render('gcal', { 
    title: 'FullCalendar with Event Modals using gCal.js',
    metadesc: 'A node.js example using FullCalendar, gCal.js, and modal windows to display more information about an event.',
    metakeywords: 'doT, doT-emc, bootstrap, node, npm, fullcalendar, gcal.js, modal'
  });
};


/* Randomize some events for the JSON feed */
exports.calendarJSON = function(req, res){ 
	var e1 = ['Hackathon','Pizza Break','Coder Meeting','Staff Meeting','Poker Night','Beer Garden','Gaming Tourney','MMORPG Fest','Staff Meeting','Poker Night','Hackathon','Beta Testing','Pub Crawl'];
	var e2 = ['ASP.NET Meetup','Perl Meetup','Node.js Meetup','Javascript Meetup','HTML Meetup','CSS Meetup','ASP.NET Meetup']
	var events = [];

    for (x=1;x<12;x++){
        var i = x % 4 === 0 ? x-15 : 
            x%9 === 0 ? 15 : x;
        var r = moment(new Date()).add(i, 'd');
        var e = x % 3 === 0 ? moment(new Date()).add(i, 'd').add(2, 'd') : moment(new Date()).add(i, 'd').add(1, 'h');
 
        events.push({
            "title":e1[x],
            "allday":"false",
            "borderColor":"#5173DA",
            "color":"#99ABEA",
            "textColor":"#000000",
            "description":"<p>This is just a fake description for the " + e1[x] +".</p><p>Nothing to see!</p>",
            "start": r.format(),
            "end": e.format(),
            "url":"http://www.mikesmithdev.com/blog/coding-without-music-vs-coding-with-music/"
        });
    }

    /* More random events! */
    for (x=1;x<6;x++){
        var i = x % 4 === 0 ? x-7 : x;
        var r = moment(new Date()).add(i, 'd');
        var e = x % 3 === 0 ? moment(new Date()).add(i, 'd').add(1, 'd') : moment(new Date()).add(i, 'd').add(3, 'h');
        events.push({
            "title": e2[x],
            "allday":"false",
            "borderColor":"#820F20",
            "color":"#A6113C",
            "textColor":"#ffffff",
            "description":"<p>This is just a fake description for the " + e2[x] +".</p><p>Nothing to see!</p>",
            "start": r.format(),
            "end": e.format(),
            "url":"http://www.mikesmithdev.com/blog/worst-job-titles-in-internet-and-info-tech/"
        });
    }
	res.json(events);

};