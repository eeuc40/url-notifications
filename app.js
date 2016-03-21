var NotificationHelper = require('./NotificationHelper.js');
var notificationHelper = new NotificationHelper();

var intervalSeconds = 2;
var intervalTime = intervalSeconds * 1000;

setInterval(function() {
    notificationHelper.notify('New Support Tickets', "There are new support tickets that require attention");
}, intervalTime);
