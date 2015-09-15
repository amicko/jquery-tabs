'use strict';

var $redLink = $('#redLink');
var $greenLink = $('#greenLink');
var $blueLink = $('#blueLink');

var $redSection = $('#redSection');
var $greenSection = $('#greenSection');
var $blueSection = $('#blueSection');

function hideAll() {
	$redSection.hide();
	$greenSection.hide();
	$blueSection.hide();
}

$redLink.on('click', function() {
	hideAll();
	$redSection.show();
	$redLink.css('border-bottom', '1px');
})

$greenLink.on('click', function() {
	hideAll();
	$greenSection.show();
	$greenLink.css('border-bottom', '1px');
})

$blueLink.on('click', function() {
	hideAll();
	$blueSection.show();
	$blueLink.css('border-bottom', '1px');
})