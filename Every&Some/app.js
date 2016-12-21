//Given an array of users, return 'true' if every user has submitted a request form.  
//Assign the result to the variable 'hasSumbmitted'.

/*
	var users = [
	  { id: 21, hasSubmitted: true },
	  { id: 62, hasSubmitted: false },
	  { id: 4, hasSubmitted: true }
	];

	var hasSubmitted;
*/

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted;
hasSummitted = users.every(function(user){
    return user.hasSummitted === true;
});

//Given an array of network objects representing network requests, 
//assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.

/*
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress;
*/

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress;

inProgress= requests.some(function(request){
    return request.status === 'pending';
});


