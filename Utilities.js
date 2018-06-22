const Utilities = {};

// =============================================
// Reverse Array
// =============================================

// The reversed array has no punctuation so I remove the period
// Then split the string into an array on each space
// Then reverse the array
// return the result
Utilities.reverseArray = str => str.replace(".", "").split(" ").reverse();

// =============================================
//  Order Array
// =============================================

// the easiest way is using built in javascript
// arr.sort() returns a sorted Array and is pretty fast
// .map returns an array but with Number() called on each el in that array
Utilities.sortArray = arr => arr.map(Number).sort();

// =============================================
//  Get Diff Array
// =============================================

// another fancy one line function :)
// array filter returns a new array only when a callback funtion returns a bool
// so we pass in two arrays as parameters and .filter iterates the first array (a1)
// and checks if each element (el) in a1 is contained in a2
// it does this because a2.indexOf(el) returns the index where el is in a2
// but if el is not in a2 it returns -1
// so to find the array difference we just return a bool for when we get -1
Utilities.arrDif = (a1, a2) => a1.filter(el => a2.indexOf(el) === -1);

// =============================================
//  Get Distance
// =============================================

// fancy trigonometry
// https://en.wikipedia.org/wiki/Haversine_formula
// https://www.movable-type.co.uk/scripts/latlong.html

// a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
// c = 2 ⋅ atan2( √a, √(1−a) )
// d = R ⋅ c
// φ is latitude, λ is longitude, R is earth’s radius (mean radius = 6,371km);

Utilities.haversine = (placeObj1, placeObj2) => {
	// radius of the earth miles
	const R = 3959;

	// declare lattitude and longitude variables
	const lat1 = placeObj1.lat;
	const lon1 = placeObj1.lon;
	const lat2 = placeObj2.lat;
	const lon2 = placeObj2.lon;

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
	// Note that the trigonometric functions (sin(), cos(), tan(), asin(), acos(), atan(), atan2())
	// expect or return angles in radians. To convert radians to degrees, divide by (Math.PI / 180),
	// and multiply by this to convert the other way.
	const toRad = num => num * (Math.PI / 180);

	// variables to make formula less verbose
	const rLat1 = toRad(lat1);
	const rLat2 = toRad(lat2);
	const ΔLat = toRad(lat1 - lat2);
	const ΔLon = toRad(lon1 - lon2);

	// formula
	const a =
		Math.sin(ΔLat / 2) * Math.sin(ΔLat / 2) +
		Math.cos(rLat1) * Math.cos(rLat2) * Math.sin(ΔLon / 2) * Math.sin(ΔLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	let d = R * c;

	// => 36.90582656545613
	// round to the nearest two decimals
	d = Math.round((d + 0.00001) * 100) / 100;
	// needs to be a string
	d = d.toString();

	return d;
};

// =============================================
//  Get Human Time Diff
// =============================================

// I didnt bother calculating days weeks years etc. but that would be easy
// with a series of conditionals that check if each value > 0
// then add to the returnedString but being careful to subtract to lesser
// time amounts from the greater ones
Utilities.humanTimeDiff = (date1, date2) => {
	// change date strings to milliseconds since 1970 to do math
	const date1Milis = Date.parse(date1);
	const date2Milis = Date.parse(date2);
	const difference = date2Milis - date1Milis;

	// initialize a returned string to build values into
	let returnedString = "";

	// calculate how man milis in one hour
	let hours = difference / 1000 / 60 / 60;

	// build string
	returnedString = hours + " hours ago";
	return returnedString;
};

module.exports = Utilities;
