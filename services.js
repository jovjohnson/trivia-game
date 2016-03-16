'use strict';

var app = angular.module('triviaApp');

app.service('triviaService', function ($http) {

  this.remove = function (quote) {
    return $http.delete(`/quotes/${quote.id}`);
  };

  this.edit = function (quote) {
    return $http.put(`/quotes/${quote.id}`, quote);
  };

  this.get = function () {
  	return $http.get('/quotes');
  }
});
