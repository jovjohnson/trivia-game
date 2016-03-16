'use strict';

var app = angular.module('triviaApp');

app.controller('triviaCtrl', function ($scope, triviaService) {

  var quotesToDisplay;

  triviaService.get()
  .then(function(res) {
    console.log(res.data);
    quotesToDisplay = res.data;
  }, function (err) {
    console.log(err);
  });

  $scope.updateQuotes = function () {
    triviaService.edit($scope.updatedQuote)
    .then(function (res) {
      console.log("changed");
    }, function (err) {
      console.error(err);
    });
  }

  $scope.deleteQuotes = function () {
    triviaService.remove($scope.deletedQuote)
    .then(function (res) {
      console.log("deleted");
    }, function (err) {
      console.error(err);
    });
  }

 

});
