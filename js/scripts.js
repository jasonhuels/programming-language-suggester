$(function() {
  $(".questionaire").submit(function(event) {
    var responses = [];
    responses[0] = $("input:radio[name=interest]:checked").val();
    responses[1] = $("input:radio[name=types]:checked").val();
    responses[2] = $("input:radio[name=code]:checked").val();
    responses[3] = $("#punctuation").val();

    var favoriteColor = $("#color").val();
    var js = 0;
    var python = 0;
    var cSharp = 0;

    $(".result").hide();
    $("#plural").hide();

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
      $(".python").show();
      $(".results").show();
    } else if(js > python && js > cSharp) {
      $(".javascript").show();
      $(".results").show();
    } else if(cSharp > python && cSharp > js){
      $(".c-sharp").show();
      $(".results").show();
    } else {
      $(".results #plural").show();
      $(".results #results").text("");
      if(python === Math.max(python, js, cSharp)) {
        $(".python").show();
      }
      if(js === Math.max(python, js, cSharp)) {
        $(".javascript").show();
      }
      if(cSharp === Math.max(python, js, cSharp)) {
        $(".c-sharp").show();
      }
      $(".results").show();
    }

    $("body").css("border-color", favoriteColor);

    event.preventDefault();
  });
});
