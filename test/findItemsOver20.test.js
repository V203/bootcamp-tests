describe('finditemsOver20 function', function(){
    it('Finds item objects that are over 20' , function(){
        

        assert.deepEqual(
        [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ])
    ,

        [
            {"name":"bananas","qty":27}
        ]
    });

});
