describe('findItemsOver' , function(){
    it('Expected to find all the items over 20' , function(){
       

        assert.deepEqual(findItemsOver([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ], 20),
        
        [{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}]);
    });

});