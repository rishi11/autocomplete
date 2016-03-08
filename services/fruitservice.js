/**
 * Created by Rishi on 3/5/16.
 */
'use strict';
(function() {
    angular
        .module("AutoCompleteApp")
        .factory("FruitService", FruitService);


    function FruitService() {
        var fruits = [
            {"fruit" : "Apple" , "rank" : 1},
            {"fruit" : "Orange" , "rank" : 1},
            {"fruit" : "Banana" , "rank" : 1},
            {"fruit" : "Pineapple" , "rank" : 1},
            {"fruit" : "Blueberry" , "rank" : 1},
            {"fruit" : "Blackberry" , "rank" : 1},
            {"fruit" : "Raspberry" , "rank" : 1},
            {"fruit" : "Cranberry" , "rank" : 1},
            {"fruit" : "Clementine" , "rank" : 1},
            {"fruit" : "Mango" , "rank" : 1},
            {"fruit" : "Papaya" , "rank" : 1},
            {"fruit" : "Peach" , "rank" : 1},
            {"fruit" : "Tangerine" , "rank" : 1},
            {"fruit" : "Pear" , "rank" : 1},
            {"fruit" : "Plum" , "rank" : 1},
            {"fruit" : "Grapes" , "rank" : 1},
            {"fruit" : "Boysenberry" , "rank" : 1},
            {"fruit" : "Lychee" , "rank" : 1},
            {"fruit" : "Pomegranate" , "rank" : 1},
            {"fruit" : "Watermelon" , "rank" : 1},
            {"fruit" : "Honey Dew Melon" , "rank" : 1},
            {"fruit" : "Fig" , "rank" : 1},
            {"fruit" : "Cherry" , "rank" : 1},
            {"fruit" : "Grapefruit" , "rank" : 1}

        ];

        var service = {
            updateRank : updateRank,
            matchFruit : matchFruit
        };

        return service;

        function updateRank(fruit){
            var fruitToUpdate = fruitByName(fruit);
            if(fruitToUpdate != null){
                var currentRank = fruitToUpdate.rank;
                var updatedRank = currentRank + 1;
                fruitToUpdate.rank = updatedRank;
            } else {
                addFruit(fruit);
            }
        }

        function addFruit(fruit){
            var fruitPresent = false;
            var newFruit = {
                "fruit" : fruit,
                "rank" : 1
            }
            var fruitIsThere = fruitByName(fruit);
            if(fruitIsThere == null){
                fruitPresent = true;
            }
            if(fruitPresent){
                fruits.push(newFruit);
            }
        }

        function fruitByName(fruit){
            for(var index in fruits){
                var f = fruits[index];
                if(f.fruit.toLowerCase() == fruit.toLowerCase()){
                    return f;
                }
            }
            return null;
        }

        function matchFruit(inputText, callback){
            var matchedFruits = [];
            for(var index in fruits){
                var f = fruits[index];
                if(f.fruit.toLowerCase().indexOf(inputText.toLowerCase()) > -1){
                    matchedFruits.push(f);
                }
            }
            callback(matchedFruits.sort(predicatBy("rank")));
        }

        function predicatBy(prop){
            return function(a,b){
                if( a[prop] > b[prop]){
                    return -1;
                }else if( a[prop] < b[prop] ){
                    return 1;
                }
                return 0;
            }
        }
    }

})();