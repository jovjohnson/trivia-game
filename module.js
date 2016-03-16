'use strict';

var app = angular.module('triviaApp', ['ui.router']);


app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {url: '/', templateUrl: '/html/home.html', controller: 'homeCtrl'})
		.state('settings' {url: '/', templateUrl: '/html/settings.html', contoller: 'settingsCtrl'})
		.state('play', {url: '/', templateUrl: '/html/play.html', controller: 'playCtrl'})

		$urlRouterProvider.otherwise('/');

})

app.run(function(triviaService) {});