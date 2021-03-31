describe("Years ago function",function(){
	it("the exesice should equal 2000",function(){
		assert.equal(yearsAgo(2000),21)
	})

	it("expected to equal 21",function(){
		assert.equal(yearsAgo(21),2000)
	})
})
