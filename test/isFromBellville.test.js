describe("isFromBellville function",function(){

    it("Should return true if starts with CY",function(){
        assert.equal(isFromBellville("CY"),true);
    })

    it("Should return false not equal 'CY'",function(){
        assert.equal(isFromBellville("") ,false)
    })
})