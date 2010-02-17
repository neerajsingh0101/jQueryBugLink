//http://github.com/jquery/jquery/commit/da966573c3f3cb083c48cd3ead88e7542937d4df
var linkify = function($) {

	var $elem = $('#commit .group .envelope .human .message pre');
	var text = $elem.text();

	if (!text) {
		return;
	}

	var matches = text.match(/#\d{4}/g);
	if (!matches) {
		return;
	}

	$.map(matches, function(bugId) {
		var url = 'http://dev.jquery.com/ticket/' + bugId;
		$elem.append($('<a />', {
			href: url,
			text: '[#' + bugId + ']',
      css: {color: 'green'}
		}));

	});

} (jQuery);

