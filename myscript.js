$(function() {

	var $elem = $('#commit .group .envelope .human .message pre'),
	text = $elem.text(),
	matches = [],
	outerHtml,
	regex = /#(\d+)/g;

	if (!text) {
		return;
	}

	while ((match = regex.exec(text)) !== null) {
		matches.push(match[1]);
	}

	if (!matches.length) {
		return;
	}

	$.map(matches, function(bugId) {
		var $bugLink = $('<a />', {
			href: 'http://dev.jquery.com/ticket/' + bugId,
			text: '#' + bugId,
			css: {
				color: '#4183C4'
			}
		});
		outerHtml = $('<div>').append($bugLink.clone()).html();
		$elem.html($elem.html().replace('#' + bugId, outerHtml));
	});

});

