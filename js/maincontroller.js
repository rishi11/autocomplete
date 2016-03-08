/**
 * Created by Rishi on 3/5/16.
 */

'use strict';
(function (){
    angular
        .module("AutoCompleteApp")
        .controller("MainController", MainController);



    function MainController($scope,FruitService){

        $scope.matchedFruits = [];
        $scope.getMatchedFruits = getMatchedFruits;
        $scope.updateRanking = updateRanking;
        
        function getMatchedFruits(){
                if($scope.searchInput.length > 2){
                    var text = $scope.searchInput;
                    FruitService.matchFruit(text, function(response){ $scope.matchedFruits = response});
                }
                else {
                    $scope.matchedFruits = [];
                }
            //console.log($scope.matchedFruits);
        }

        function updateRanking(){
            if($scope.searchInput.length > 0){
                var newFruit = $scope.searchInput;
                FruitService.updateRank(newFruit);
            }
        }

    }
})();