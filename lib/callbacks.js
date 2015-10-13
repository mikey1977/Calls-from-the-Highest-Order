function wait(seconds, callback) {
  var n = seconds * 1000;
  setTimeout(callback, n);
}
console.log('wait 3 started');

wait(3, function() {
  console.log('wait 3 done');
});



function repeat (times, callback) {
  for (var i = 0; i < times; i++) {
    callback(i);
  }
}
repeat(10, function(iteration) {
  console.log(100 + iteration);
});

function User () {

}

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};