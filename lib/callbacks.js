function wait(seconds, callback) {
  var n = seconds * 1000;
  setTimeout(callback, n);
}
// console.log('wait 3 started');

wait(3, function() {
  console.log('wait 3 done');
});



function repeat (times, callback) {
  for (var i = 0; i < times; i++) {
    callback(i);
  }
}

// repeat(10, function(iteration) {
//   console.log(100 + iteration);

// });

wait(4, function() {
  repeat(2, function(iteration) {

    console.log('repeating for i' + iteration);

    wait(iteration * 3, function() {
      repeat(3, function(iterationB) {
        console.log('i ' + iteration + ' j ' + iterationB);
      });
    });
  });
});

// wait(4, repeat(2, function(iteration) {
//   console.log('repeating for i' + iteration);
//   wait(iteration * 3, repeat(3, function(iterationB) {
//   console.log('i ' + iteration + ' j ' + iterationB);
//   }))
// }));

var datastore = require('./datastore.js');


function User () {
  // datastore.call(this, find);
}

// User.prototype.find = function(query, callback) {
//   callback(datastore[key]){

//   }
// }
// datastore.extend(User);
User.find = function(query, callback){

  //store array from matches
  var goodUser = [];

  // loop through User array
  for (var i = 0; i < datastore.User.length; i++){
  //search through query for specific key
  for (var key in query) {

    //check conditions where keys do not match
    if (!datastore.User[i].hasOwnProperty(key)){
      return callback(new RangeError('key does not match'), []);
    }
    // console.log(typeof(query[key]));
    // console.log(typeof(datastore.User[i][key]));

    //check conditions where keys are not of the same type
    if (typeof(query[key]) !== typeof(datastore.User[i][key])) {
      return callback(new TypeError('keys are not of same type'), []);
    }
  }

  // // loop through User array
  // for (var i = 0; i < datastore.User.length; i++){
    var flag = false;
    for (var key in query) {


      if (datastore.User[i][key] !== query[key]) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      goodUser.push(datastore.User[i]);
    }
  }
  return callback(null, goodUser);
}

User.find({id : 2}, function(error, users) {
  if (error !== null) {
    throw error;
  }
  console.log('users' + users);
})

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};