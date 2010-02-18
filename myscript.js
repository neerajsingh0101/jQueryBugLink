//http://github.com/jquery/jquery/commit/da966573c3f3cb083c48cd3ead88e7542937d4df
$(function() {

	var $elem = $('#commit .group .envelope .human .message pre');
	var text = $elem.text();

	if (!text) {
		return;
	}

	var matches = [],
	regex = /#(\d+)/g;

	while ((match = regex.exec(text)) !== null) {
		matches.push(match[1]);
	}

	if (!matches.length) {
		return;
	}

	$.map(matches, function(bugId) {
		var url = 'http://dev.jquery.com/ticket/' + bugId;
		$elem.append($('<a />', {
			href: url,
			text: '[#' + bugId + ']',
			css: {
				color: 'green'
			}
		}));

	});

} ());

