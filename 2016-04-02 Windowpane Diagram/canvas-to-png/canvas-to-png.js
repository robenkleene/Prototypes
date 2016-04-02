window.onload = function() {
  var canvas = document.getElementById("input");
  var context = canvas.getContext("2d");

  var gridSize = {
    width: 6,
    height: 3
  };

  var cellSize = {
    width: canvas.width / gridSize.width,
    height: canvas.height / gridSize.height
  };

  // Background
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);



  // Grid Lines
  for (var i = 0; i < gridSize.width; i++) {
    // context.rect(x, y, cellSize.width, cellSize.height);
    // context.stroke();
    for (var j = 0; j < gridSize.height; j++) {
      var x = i * cellSize.width;
      var y = j * cellSize.height;
      context.rect(x, y, cellSize.width, cellSize.height);
      context.stroke();
    }
  }



  var img = new Image(canvas.width, canvas.height);


  var dataURL = canvas.toDataURL("image/jpeg");
  img.src = dataURL;
  document.getElementById('output').appendChild(img);

  // document.getElementById('output').src = dataURL;
};
