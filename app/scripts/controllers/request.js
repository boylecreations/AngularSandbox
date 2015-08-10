'use strict';

/**
 * @ngdoc function
 * @name SandboxApp.controller:RequestCtrl
 * @description
 * # MainCtrl
 * Controller of the SandboxApp
 */
angular.module('SandboxApp')
  .controller('RequestCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
  
    $scope.handle = '';
    $scope.lowercasehandle = function() {
    	return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 7;

    // Watcher example
    $scope.$watch('handle', function(newValue, oldValue) {

        console.info('Changed');
        console.log('Old:' + oldValue);
        console.log('New:' + newValue);

    });

    $scope.rules = [
      
      { rulename: "Must be 7 Characters" },
      { rulename: "Must not already be in use" },
      { rulename: "Must not contain numbers" }

    ];

    console.log($scope.rules);

    //Regular XMLHTTPREQUEST

    /*

    Broken Code!

    var rulesrequest = new XMLHttpRequest();
    rulesrequest.onreadystatechange = function() {
        
        $scope.$apply(function() {
            if (rulesrequest.readyState = 4 && rulesrequest.status == 200) {
            $scope.rules = JSON.parse(rulesrequest.responseText);
            }
        });
    }
    
    rulesrequest.open("GET", "http://locahost:9000")
    rulesrequest.send();
    
    

    //Angular XMLHttpRequest 

    $http.get('/api').success(function(result){

            console.log("data retreival was a success");
            $scople.rules = result;

        }).error(function (data, status){

            console.log("there was an error");
    })

    $scope.newRule = '';
    $scope.addRule = function () {

        $http.post('/api', { newRule: $scope.newRule })
            .success(function (result) {
                $scope.rules = result;
                $scope.newRule = '';
            })
            .error(function(data, status){
                console.log(data);
            });
    };
    
    */

    // Don't code outside the Angular Context
    setTimeout(function() {
        //Applys function to the digest loop
        $scope.$apply(function() {
        $scope.handle = 'boylecreations';
        console.log('Scope Changed!');
        })
    }, 3000);

    
  }]);
