//Using map, create a new array that contains the 'height' 
//property of each object.  Assign this new array to the variable 'heights'.  
//Don't forget to use the 'return' keyword in the function!
/*
	var images = [
	  { height: '34px', width: '39px' },
	  { height: '54px', width: '19px' },
	  { height: '83px', width: '75px' },
	];

	var heights;
*/

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights;

heights= images.map(function (image) {
	return image.height;
});
console.log(heights);



/*
 Using map, create a new array that contains the distance / time value from each trip.
   In other words, the new array should contain the (distance / time) value.  
   Assign the result to the variable 'speeds'.
	
	var trips = [
	  { distance: 34, time: 10 },
	  { distance: 90, time: 50 },
	  { distance: 59, time: 25 }
	];

	var speeds;

*/

var trips = [
	  { distance: 34, time: 10 },
	  { distance: 90, time: 50 },
	  { distance: 59, time: 25 }
	];

	var speeds;

	speeds= trips.map(function (trip) {
		return trip.distance / trip.time;
	});

	console.log(speeds);

	/*

	This is a hard one!
	Implement a 'pluck' function.  Pluck should accept an array and 
	a string representing a property name and return an  array containing that property from each object. 

	Example: 

	var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
	pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];

	Hint:

	Remember that you can access a property on an object by using square bracket notation. For example...

	var person = { name: 'Bill' };
	person['name'] // returns 'Bill'

	Bases:

	function pluck(array, property) {
    
	}

	*/
function pluck(array, property) {
    

 return array.map(function (arr) {
   		return arr[property];
   });
}
var person =[
	{name:'mike',city:'GDL'},
	{name:'Omar',city:'La Paz'},
	{name:'Jorge',city:'Acapulco'},
	{name:'Daniel', city:'Guzman'}
];
console.log(pluck(person,'name'));
console.log(pluck(person,'city'));