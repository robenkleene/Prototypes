window.onload = function() {
  var canvas = document.getElementById("output");
  var context = canvas.getContext("2d");
  context.fillStyle = "green";
  context.fillRect(50, 50, 100, 100);
  // no argument defaults to image/png; image/jpeg, etc also work on some
  // implementations -- image/png is the only one that must be supported per spec.
  // window.location = canvas.toDataURL("image/png");
}
