var notifier = require('node-notifier');

var NotificationHelper = function() {
};

NotificationHelper.prototype.notify = function(title, message) {
    var notifier = require('node-notifier');
    notifier.notify({
        title: title,
        message: message,
        sound: true,
        wait: true
    }, function(error, response) {
    });
};

module.exports = NotificationHelper;


