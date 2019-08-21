const {parseArgs}=require("./calculator");

describe("calculator", () => {
	test("it should export a parseArgs function", () => {
		expect(typeof parseArgs).toBe("function");
	})
})