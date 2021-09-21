const  evenNumber = require("./isEven")
const formatDate= require("./fromDate")
test("if numbers in even", () => {
	const result = evenNumber("10");

	expect(result).toBe(true);
});


const dateRegex = /^\d{1,2}\-\d{1,2}\-\d{4}$/;
test("if date is string", () => {

	const result = formatDate("2019-1-02");

	expect(result).toMatch(dateRegex);
});



