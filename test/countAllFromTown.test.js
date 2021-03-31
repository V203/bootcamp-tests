describe("countAllFromTown function",function(){
    it("Should return true if sarts with CA",function(){
        assert.equal(isFromCapeTown("CA"),true);
    })

    it("Should return false if starts anything else",function(){
        assert.equal(isFromCapeTown(""),false);
    })
    
})