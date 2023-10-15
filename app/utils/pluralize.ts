export const pluralize = (numeral: number, variants: [string, string, string]): string => {
	const caseDivisionByHundred = 2;
	const casesDivisionByTen = [2, 0, 1, 1, 1, 2];
	return variants[
		(numeral % 100 > 10 && numeral % 100 < 20) ? caseDivisionByHundred : casesDivisionByTen[(numeral % 10 < 5) ? numeral % 10 : 5]
	];
};
