(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

$redLink.on('click', function () {
	hideAll();
	$redSection.show();
	$redLink.css('border-bottom', '1px');
});

$greenLink.on('click', function () {
	hideAll();
	$greenSection.show();
	$greenLink.css('border-bottom', '1px');
});

$blueLink.on('click', function () {
	hideAll();
	$blueSection.show();
	$blueLink.css('border-bottom', '1px');
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map