const expect = require("chai").expect;

describe("Vault Tests", () => {
	describe("Reverse Array", () => {
		it("should turn the below string into an array and reverse the words", () => {
			let data = "I want this job.";

			// Code here

			expect(["job", "this", "want", "I"]).to.deep.equal(data);
		});
	});
	describe("Order Array", () => {
		it("should sort the below array", () => {
			let data = ["200", "450", "2.5", "1", "505.5", "2"];

			// Code here

			expect([1, 2, 2.5, 200, 450, 505.5]).to.deep.equal(data);
		});
	});
	describe("Get Diff Array", () => {
		it("should determine array differences", () => {
			let data1 = [1, 2, 3, 4, 5, 6, 7];
			let data2 = [2, 4, 5, 7, 8, 9, 10];

			// Code here

			expect([8, 9, 10]).to.deep.equal(data);

			// Code here

			expect([1, 3, 6]).to.deep.equal(data);
		});
	});
	describe("Get Distance", () => {
		it("should get the distance between two geo points", () => {
			let place1 = {
				lat: "41.9641684",
				lon: "-87.6859726"
			};
			let place2 = {
				lat: "42.1820210",
				lon: "-88.3429465"
			};

			// Code here

			expect(distance).to.equal("36.91");
		});
	});
	describe("Get Human Time Diff", () => {
		it("should generate a human readable time difference", () => {
			let time1 = "2016-06-05T12:00:00";
			let time2 = "2016-06-05T15:00:00";

			// Code here

			expect(timeDiff).to.equal("3 hours ago");
		});
	});
});
