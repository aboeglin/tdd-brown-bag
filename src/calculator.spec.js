const {parseArgs}=require("./calculator");

describe("calculator", () => {
	test("it should export a parseArgs function", () => {
		expect(typeof parseArgs).toBe("function");
	})

	test('it should return the identity', () => {
		expect(parseArgs(['node', 'calculator.js', '1', '+', '3'])).toEqual(['1', '+', '3'])
	})

	test('it should return the identity', () => {
		expect(parseArgs(['node', 'calculator.js', '2', '+', '1'])).toEqual(['2', '+', '1'])
	})

	test('it should return an empty array on empty input', () => {
		expect(parseArgs()).toEqual([])
	})

	test('it should ignore arguments if there more than 5', () => {
		expect(parseArgs(['node', 'calculator.js', '2', '+', '1', 'banana'])).toEqual(['2', '+', '1'])
	})

	test('it should return the identity if there is only one input', () => {
		expect(parseArgs(['node', 'calculator.js', '2'])).toEqual(['2'])
	})

	test('it should return the identity if there is no second operand', () => {
		expect(parseArgs(['node', 'calculator.js', '2', '+'])).toEqual(['2', '+'])
	})
	
	test('it should throw if the operator is not valid', () => {
		expect(() => parseArgs(['node', 'calculator.js', '2', 'a'])).toThrow();
	})

	
	for (let i=0; i<10; i += 1){
		let inavlidOperator = Math.random().toString(36).substring(7);
		
		test('it should throw if the operator is not valid', () => {
			expect(() => parseArgs(['node', 'calculator.js', '2', inavlidOperator])).toThrow();
		})
	}

	const validOperators=['+', '-', '*', '/'];
	validOperators.forEach(validOperator => {
		test('it should throw if the operator is not valid', () => {
			expect(() => parseArgs(['node', 'calculator.js', '2', validOperator])).not.toThrow();
		})
	})
})