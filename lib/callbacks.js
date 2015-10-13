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

}

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};