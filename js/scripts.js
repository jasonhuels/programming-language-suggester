$(function() {
  $(".questionaire").submit(function(event) {
    var response1 = $("input:radio[name=types]:checked").val();
    var response2 = $("input:radio[name=interest]:checked").val();
    var response3 = $("input:radio[name=code]:checked").val();
    var response4 = $("#punctuation").val();
    var favoriteColor = $("#color").val();

    console.log(response1 + " " + response2 + " " + response3 + " " + response4 + favoriteColor);

    event.preventDefault();
  });
});
