const openBrowser = require('openbrowser');

function compilerDone(url) {
	this.url = url;
}

compilerDone.prototype.apply = function(compiler) {
	const This = this;
	compiler.plugin('done', function(stats) {
		setTimeout(function() {
			openBrowser(This.url);
		}, 200)
	})
}

module.exports = compilerDone;