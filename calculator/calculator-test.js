///-from stack overflow
Number.prototype.countDecimals = function () {
    if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
    return this.toString().split(".")[1].length || 0; 
};

it('should calculate the monthly rate correctly', function () {
	///- based on value calculated at https://www.bankrate.com/calculators/mortgages/mortgage-calculator.aspx
	expect(calculateMonthlyPayment({amount:80000,years:10,rate:3})).toBeCloseTo(772.00,0);///-their result rounds to whole dollar
});

it("should return a result with 2 decimal places", function() {
	expect(Number(calculateMonthlyPayment({amount:80000,years:10,rate:3})).countDecimals()).toEqual(2);
});

/// etc
