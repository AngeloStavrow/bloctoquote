var tabs		= require("tabs");
var contextMenu = require("context-menu");

var menuItem = contextMenu.Item({
	label: "Create Blockquote",
	context: contextMenu.SelectionContext(),
	contentScript:	'self.on("click", function () {' +
					' var text = window.getSelection().toString();' +
					' self.postMessage(text);' +
					'});',
	onMessage: function (selectionText) {
		let clipboard = require("clipboard");
		var pageLink = tabs.activeTab.url;
		var pageTitle = tabs.activeTab.title;
		var outputText =	'{% blockquote Author ' + pageLink + ' ' + pageTitle + ' %}\r\n' +
							escape(selectionText) + '\r\n' +
							'{% endblockquote %}';
		clipboard.set(unescape(outputText));
	}
});