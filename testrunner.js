console.log('Loading a web page');
var page = require('webpage').create();
var url = 'http://127.0.0.1:4080/testsql.php';

page.open(url, function (status) {
  console.log('Status: ' + status);
  console.log('Page is loaded!');
});

page.onLoadFinished = function() {
        console.log("page load finished");
		console.log("page.content" + page.content);
		phantom.exit();
    };

phantom.onError = function(msg, trace) {
  var msgStack = ['PHANTOM ERROR: ' + msg];
  if (trace && trace.length) {
    msgStack.push('TRACE:');
    trace.forEach(function(t) {
      msgStack.push(' -> ' + (t.file || t.sourceURL) + ': ' + t.line + (t.function ? ' (in function ' + t.function +')' : ''));
    });
  }
  console.error(msgStack.join('\n'));
  phantom.exit(1);
};

	