describe("fromWhere function",function(){
    it("Expected CY to equal Bellville",function(){
        assert.equal(fromWhere("CY"),"Bellville")
    })

    it("Expected CJ to equal Paarl",function(){
        assert.equal(fromWhere("CJ"),"Paarl")
    })

    it("Expected CA to equal Cape Town",function(){
        assert.equal(fromWhere("CA"),"Cape Town")
    })
})