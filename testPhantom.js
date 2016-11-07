console.log('Loading a web page');
var page = require('webpage').create();
var url = 'http://127.0.0.1';
page.open(url, function (status) {
  //Page is loaded!
});

page.onLoadFinished = function() {
        console.log("page load finished");
		console.log("page.content" + page.content);
		phantom.exit();
    };