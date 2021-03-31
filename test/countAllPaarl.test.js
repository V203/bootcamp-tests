describe("countAllPaarl",function(){
    it("Should count all those from paarl",function(){
        assert.equal(countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"),3)
    })

    
        it("Should return true if starts with 'CJ' ",function(){
            assert.equal(countAllPaarl("CJ"),true)
        })
        
    
    
})