const parseArgs=(argv=[]) => {	
	const r=argv.slice(2, 5);
	if (r[1] && !['+', '-', '*', '/'].includes(r[1]))
		throw new Error("Operator not valid")
	return r;
};

module.exports={
	parseArgs
}