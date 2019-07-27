"use strict";

function postMessage() {
  var name = $("#form-name");
  var message = $("#form-message");
  var feedback = $("#form-feedback");
  var msgbtn = $('#post-message');
  msgbtn.prop('disabled', true);
  if (name.val().trim() == "") {
    name.val("Anonymous");
  }
  if (message.val().trim() == "") {
    feedback.text("Your message should not be empty!");
    msgbtn.prop('disabled', false);
    return false;
  }
  db.ref("comments").push({
    author: name.val(),
    message: message.val()
  }, function (error) {
    if (error) {
      feedback.text("Your Messages not sent. Error: ", error);
    } else {
      feedback.text("Your Messages was sent. Thank You!");
    }
    $("#form-name, #form-message").val("");
    msgbtn.prop('disabled', false);
  });
  return true;
}

db.ref("comments").on("value", function (snap) {
  var messageContainer = $(".messages");
  var snapNum = 0;
  messageContainer.html(null);
  snap.forEach(function (childSnap) {
    var name = childSnap.child("author").val();
    var message = childSnap.child("message").val();
    messageContainer.prepend("\n      <div class=\"message-box\">\n        <span class=\"author\">" + name + "</span>\n        <span>said:</span>\n        <blockquote>" + message + "</blockquote>\n      </div>\n    ");
    snapNum++;
  });
  if (snapNum === 0) {
    messageContainer.html("<b>No one has left a message to sutan yet. Be the first!</b>");
  }
});