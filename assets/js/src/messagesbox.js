function postMessage() {
  let name = $("#form-name");
  let message = $("#form-message");
  let feedback = $("#form-feedback");
  let msgbtn = $('#post-message');
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
    author : name.val(),
    message : message.val()
  }, (error) => {
    if (error) {
      feedback.text("Your Messages not sent. Error: ", error);
    }else{
      feedback.text("Your Messages was sent. Thank You!");
    }
    $("#form-name, #form-message").val("");
    msgbtn.prop('disabled', false);
  });
  return true;
}

db.ref("comments").on("value", (snap) => {
  let messageContainer = $(".messages");
  let snapNum = 0;
  messageContainer.html(null);
  snap.forEach((childSnap) => {
    let name = childSnap.child("author").val();
    let message = childSnap.child("message").val();
    messageContainer.prepend(`
      <div class="message-box">
        <span class="author">${name}</span>
        <span>said:</span>
        <blockquote>${message}</blockquote>
      </div>
    `);
    snapNum++;
  });
  if (snapNum === 0) {
    messageContainer.html("<b>No one has left a message to sutan yet. Be the first!</b>");
  }
});
