describe("isWeekday function",function(){
	it("The function should true for all weekdays",function(){
		assert.equal(isWeekday("Monday"),true)
	})

	it("The function should false for weekend",function(){
		assert.equal(isWeekday("S"),false)
	})
})