var NotificationHelper = require('./NotificationHelper.js');
var HTMLUtils = require('./HTMLUtils.js');

var notificationHelper = new NotificationHelper();
var htmlUtils = new HTMLUtils();

var intervalSeconds = 2;
var intervalTime = intervalSeconds * 1000;

console.log(htmlUtils.getHTMLFromURL('jquery.com'));

setInterval(function() {
    notificationHelper.notify('New Support Tickets', "There are new support tickets that require attention");
}, intervalTime);
