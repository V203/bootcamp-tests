describe("countRegNumber function",function(){
    it("Assert's a variable that hold's a function",function(){
        assert.isFunction(count);
    })

        regNum="CA 223 332, CY 322 223, CL332 332, CA 778 455, CA 889 453"
    it("Should split string into a array of String  and return length of array ",function(){
        assert.equal(count("CA 223 332, CY 322 223, CL332 332, CA 778 455, CA 889 453"),5);
    })
})