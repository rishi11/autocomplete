/**
 * Created by Rishi on 3/7/16.
 */
(function(){

    angular
        .module("AutoCompleteApp")
        .controller("Test", Test);

        var result;
        function Test($scope, FruitService){

            QUnit.test( "hello test", function( assert ) {
                assert.ok( 1 == "1", "Passed!" );
            });

            QUnit.test( "Test for matching Fruits on the basis of input - ang", function( assert ) {
                FruitService.matchFruit('ang',callbackReturn);
                var expectedResult = [{fruit: "Orange", rank: 1}, {fruit: "Mango", rank: 1}, {fruit: "Tangerine", rank: 1}];
                assert.ok( JSON.stringify(result) == JSON.stringify(expectedResult), "Passed!" );
            });

            QUnit.test( "Test for matching Fruits on the basis of input - ANG (Search is case insensitive)", function( assert ) {
                FruitService.matchFruit('ang',callbackReturn);
                var expectedResult = [{fruit: "Orange", rank: 1}, {fruit: "Mango", rank: 1}, {fruit: "Tangerine", rank: 1}];
                assert.ok( JSON.stringify(result) == JSON.stringify(expectedResult), "Passed!" );
            });

            QUnit.test( "Test for matching Fruits on the basis of input - aNg (Search is case insensitive)", function( assert ) {
                FruitService.matchFruit('ang',callbackReturn);
                var expectedResult = [{fruit: "Orange", rank: 1}, {fruit: "Mango", rank: 1}, {fruit: "Tangerine", rank: 1}];
                assert.ok( JSON.stringify(result) == JSON.stringify(expectedResult), "Passed!" );
            });

            QUnit.test( "Test for matching Fruits on the basis of input - erry", function( assert ) {
                FruitService.matchFruit('erry',callbackReturn);
                var expectedResult = [{fruit: "Blueberry", rank: 1}, {fruit: "Blackberry", rank: 1}, {fruit: "Raspberry", rank: 1}, {fruit: "Cranberry", rank: 1}, {fruit: "Boysenberry", rank: 1}, {fruit: "Cherry", rank: 1}];
                assert.ok( JSON.stringify(result) == JSON.stringify(expectedResult), "Passed!" );
            });

            QUnit.test( "Test for matching Fruits on the basis of input - abc", function( assert ) {
                FruitService.matchFruit('abc',callbackReturn);
                var expectedResult = [];
                assert.ok( JSON.stringify(result) == JSON.stringify(expectedResult), "Passed!" );
            });

            QUnit.test( "Test for Adding the new fruit - Coconut", function( assert ) {
                FruitService.updateRank('Coconut');
                FruitService.matchFruit('Coconut',callbackReturn);
                var expectedResult = [{fruit: "Coconut", rank: 1}];
                assert.ok( JSON.stringify(result) == JSON.stringify(expectedResult), "Passed!" );
            });

            QUnit.test( "Updating Rank for the fruit - Cherry from 1 to 2", function( assert ) {
                FruitService.updateRank('Cherry');
                FruitService.matchFruit('Cherry',callbackReturn);
                var expectedResult = [{fruit: "Cherry", rank: 2}];
                assert.ok( JSON.stringify(result) == JSON.stringify(expectedResult), "Passed!" );
            });

            QUnit.test( "Updating Rank for the fruit - Mango from 1 to 2", function( assert ) {
                FruitService.updateRank('Mango');
                FruitService.matchFruit('Mango',callbackReturn);
                var expectedResult = [{fruit: "Mango", rank: 2}];
                assert.ok( JSON.stringify(result) == JSON.stringify(expectedResult), "Passed!" );
            });

        }

    function callbackReturn(response){
        result =  response;
    }
})();