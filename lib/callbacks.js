function wait(seconds, callback) {
  var n = seconds * 1000;
  setTimeout(callback, n);
}
console.log('wait 3 started');

wait(3, function() {
  console.log('wait 3 done');
});



function repeat (times, callback) {
  var n = [times];
  for (var i = 0; i < times; i++) {
    callback(n);
  }
}

function User () {

}

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};