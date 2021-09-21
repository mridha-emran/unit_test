const  evenNumber = require("./isEven")
const formatDate= require("./fromDate")
test("if numbers in even", () => {
	const result = evenNumber("10");

	expect(result).toBe(true);
});


test("if date is string", () => {
	const result = formatDate("2019-1-02");

	expect(result).toBe("2/1/2019");
});

