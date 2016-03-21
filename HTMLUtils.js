var http = require('http');

var HTMLUtils = function() {
};

HTMLUtils.prototype.getHTMLFromURL = function(url) {
    var html = '';
    var options = {
        host: url,
        port: 80,
        path: '/'
    };

    http.get(options, function(res) {
        res.on('data', function(data) {
            html += data;
        }).on('end', function() {
            return html;
        });

    });
};

module.exports = HTMLUtils;


