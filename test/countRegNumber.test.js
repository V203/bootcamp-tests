describe("countRegNumber function",function(){
    it("Should return the numbers of all reg numbers",function(){
        assert.equal(countRegNumber("C"),true);
    })

        //regNum="hfg, jh, hdhdh, gfhfg, jjdgd"
    it("Should split string into a array of String  and return length of array ",function(){
        assert.equal(countRegNumber("hfg, jh, hdhdh, gfhfg, jjdgd"),5);
    })
})