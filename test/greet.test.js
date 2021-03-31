describe('The greet function', function(){
                
    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andrew', greet('Andrew'));
    });
    
    var name ;
    it('Should greet based on taking in from variable', function(){
        assert.equal(greet(name),"Hello, "+name)
    });
});
