$(function() {
  $(".questionaire").submit(function(event) {
    // var response1 = $("input:radio[name=interest]:checked").val();
    // var response2 = $("input:radio[name=types]:checked").val();
    // var response3 = $("input:radio[name=code]:checked").val();
    // var response4 = $("#punctuation").val();
    var favoriteColor = $("#color").val();
    var js = 0;
    var python = 0;
    var cSharp = 0;
    var responses = [];

    $(".results").hide();

    responses[0] = $("input:radio[name=interest]:checked").val();
    responses[1] = $("input:radio[name=types]:checked").val();
    responses[2] = $("input:radio[name=code]:checked").val();
    responses[3] = $("#punctuation").val();

    for(let i=0; i<responses.length; i++) {
      if(responses[i].includes("js")) {
        js++;
      }
      if(responses[i].includes("python")) {
        python++;
      }
      if(responses[i].includes("c#")) {
        cSharp++;
      }
    }

    if(python > js && python > cSharp) {
      $(".results").text("Python");
      $(".results").show();
    } else if(js > python && js > cSharp) {
      $(".results").text("JavaScript");
      $(".results").show();
    } else if(cSharp > python && cSharp > js){
      $(".results").text("C#");
      $(".results").show();
    } else {
      if(python === Math.max(python, js, cSharp)) {
        $(".results").append("Python");
      }
      if(js === Math.max(python, js, cSharp)) {
        $(".results").append("JavaScript");
      }
      if(cSharp === Math.max(python, js, cSharp)) {
        $(".results").append("C#");
      }
      $(".results").show();
    }
    console.log(favoriteColor);

    event.preventDefault();
  });
});
