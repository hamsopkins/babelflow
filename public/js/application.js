$(document).ready(function() {
  addQuestionHandler();
});

var addQuestionHandler = function() {
  $("#question-post-form").on("submit", function(event) {
    event.preventDefault();
    var form = $("#question-post-form");
    // console.log(form);
    var listToAppend = $("#question-list");
    var data = form.serializeArray();
    $.ajax({
      url: '/questions',
      type: 'POST',
      // dataType: 'json',
      data: data
    })
    .done(function(response) {
      console.log(response);
      listToAppend.append(response);
    })
    .fail(function() {
      alert("Post failed. Did you supply a title and body?");
    });
  });
};
