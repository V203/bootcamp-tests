describe("fromWhere function",function(){
    it("Expected CY to equal Bellville",function(){
        assert.equal(fromWhere("CY 000 343"),"Bellville")
    })

    it("Expected from where to be a function and nothing else",function(){
        assert.isFunction(fromWhere,"Paarl")
    })

    it("Expected CA to equal Cape Town",function(){
        assert.isString("CA 757 987","Cape Town")
    })
})