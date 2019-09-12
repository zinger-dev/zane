$(document).ready(function() {
  var isTouchDevice = "ontouchstart" in document.documentElement;

  $("#touchSensitive").mousedown(function(event) {
    if (isTouchDevice == false) {
      pushed();
    }
  });
  $("#touchSensitive").mouseup(function(event) {
    if (isTouchDevice == false) {
      released();
    }
  });
  $("#touchSensitive").on("touchstart", function() {
    if (isTouchDevice) {
      pushed();
    }
  });
  $("#touchSensitive").on("touchend", function() {
    if (isTouchDevice) {
      released();
    }
  });
});

function pushed() {
  $("#tiger").attr(
    "src",
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/an-angry-tiger-roars-fiercely-derrick-neill.jpg"
  );
  $("#tgrbutttxt").text("I warned you...");
}

function released() {
  $("#tiger").attr("src", "https://i.redd.it/tk5y8me2eef11.jpg");
  $("#tgrbutttxt").text("Don't Click the Tiger!!");
}
