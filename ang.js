'use strict';

var app = angular.module('monopolyApp', []);

app.controller('monopolyCtrl', ['$scope','Board', function($scope, Board) {
  $scope.spaces = Board.spaces;
}]);

app.factory('Board', function() {
  var board = {};
  board.spaces = [
    {type:"corner", name:"Go"},
    {type:"property", name:"mediterranean Avenue", color: "#771C93", price:60 },
    {type:"chest", name:"Chest1" },
    {type:"property", name:"baltic Avenue", color: "#771C93", price:60 },
    {type:"tax", name:"Income Tax" },
    {type:"railroad", name:"reading railroad", color: "#444", price:200 },
    {type:"property", name:"oriental Avenue", color: "#C1D9F3", price:100 },
    {type:"chance", name:"Chance1" },
    {type:"property", name:"vermont Avenue", color: "#C1D9F3", price:100 },
    {type:"property", name:"connecticut Avenue", color: "#C1D9F3", price:120 },

    {type:"corner", name:"Just Visiting" },
    {type:"property", name:"St. Charles Place", color: "#CB0290", price:140 },
    {type:"utility", name:"Electric Company", price:150 },
    {type:"property", name:"States Avenue", color: "#CB0290", price:140 },
    {type:"property", name:"Virginia Avenue", color: "#CB0290", price:160 },
    {type:"railroad", name:"reading railroad", color: "#444", price:200 },
    {type:"property", name:"St. James Place", color: "#FAB819", price:180 },
    {type:"chest", name:"Chest2" },
    {type:"property", name:"Tennessee Avenue", color: "#FAB819", price:180 },
    {type:"property", name:"New York Avenue", color: "#FAB819", price:200 },

    {type:"corner", name:"Free Parking" },
    {type:"property", name:"Kentucky Avenue", color: "#FE3E19", price:220 },
    {type:"chance", name:"Chance2" },
    {type:"property", name:"Indiana Avenue", color: "#FE3E19", price:220 },
    {type:"property", name:"Illinois Avenue", color: "#FE3E19", price:240 },
    {type:"railroad", name:"reading railroad", color: "#444", price:200 },
    {type:"property", name:"Atlantic Avenue", color: "#FEFE00", price:260 },
    {type:"property", name:"Ventnor Avenue", color: "#FEFE00", price:260 },
    {type:"utility", name:"Water Works", price:150 },
    {type:"property", name:"Marvin Gardens", color: "#FEFE00", price:280 },

    {type:"corner", name:"Go to Jail" },
    {type:"property", name:"Pacific Avenue", color: "#3FC322", price:300 },
    {type:"property", name:"North Carolina Avenue", color: "#3FC322", price:300 },
    {type:"chest", name:"Chest3" },
    {type:"property", name:"Pennsylvania Avenue", color: "#3FC322", price:320 },
    {type:"railroad", name:"Shortline", color: "#444", price:200 },
    {type:"chance", name:"Chance3" },
    {type:"property", name:"Park Place", color: "#6578BC", price:350 },
    {type:"tax", name:"Luxury Tax" },
    {type:"property", name:"Boardwalk", color: "#6578BC", price:400 }
  ];

  return board;
});



app.filter('nfcurrency', [ '$filter', '$locale', function ($filter, $locale) {
        var currency = $filter('currency'), formats = $locale.NUMBER_FORMATS;
        return function (amount, symbol) {
            var value = currency(amount, symbol);
            return value.replace(new RegExp('\\' + formats.DECIMAL_SEP + '\\d{2}'), '')
        }
    }])
