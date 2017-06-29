/*
  Use the 'reduce' helper to find the sum of all the distances traveled.
  Assign the result to the variable 'totalDistance'

  var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

  var totalDistance;
*/
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance= trips.reduce((previews, trip)=>{
    console.log(previews);
  return previews + trip.distance;
},0);

/*
Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.
The object returned should have the form '{ sitting: 3, standing: 2 }'.
The initial value has been provided to you.
Hint: Don't forget to return the accumulator object (the first argument to the iterator function)
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function() {

}, { sitting: 0, standing: 0 });
*/
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(previews,desk) {
    if(desk.type==='sitting')  previews.sitting += 1
    if(desk.type==='standing') previews.standing += 1
    return previews;
}, { sitting: 0, standing: 0 });

/*
Another really hard one!  Write a function called 'unique'
that will remove all the duplicate values from an array.

For example, given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
Your function should return
[1, 2, 3, 4]
Hint: Use the 'reduce' and 'find' helpers.

function unique(array) {

}
*/

var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
    return array.reduce((previews,element)=>{
      const compare= previews.find((preview)=>{
        return preview=== element;
      });
    if(!compare)previews.push(element);

      return previews;
    },[]);
}

var arryReduced=unique(numbers);
