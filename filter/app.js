/*
Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.
Assign this new array to a variable called 'filteredNumbers'.Don't forget to use the 'return' keyword in the function!
/*
	var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

	var filteredNumbers;
*/

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers;

filteredNumbers=numbers.filter(function (number) {
	return number>50;
});

/*
Filter the array of users, only returning users who have admin level access.
Assign the result to the variable 'filteredUsers'.
Don't forget to use the 'return' keyword in the function!

var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers;

*/
var userChose={id:1,adm:true};
var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers;
function choseAdminLvl(userChose,users) {
	return users.filter(function(user){
		return user.admin === userChose.adm;
	});
}

filteredUsers = choseAdminLvl(userChose,users);

/*
This is a hard one!  Create a function called 'reject'.  
Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  
Hint: you can reuse filter.


*/
var numbers = [10, 20, 30];
var lessThanFifteen;

/*
filteredAdmin = (function (array, iteratorFunction) {
  return array.filter(iteratorFunction);
})(users,function (user) {return user.admin !== userChose.adm });

*/
function reject(array, iteratorFunction) {
  return array.filter(iteratorFunction);
}


lessThanFifteen= reject(numbers,function(number){return number !== 10;});