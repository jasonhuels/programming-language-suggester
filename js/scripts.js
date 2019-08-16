$(function() {
  $(".questionaire").submit(function(event) {
    var responses = [];
    responses[0] = $("input:radio[name=interest]:checked").val();
    responses[1] = $("input:radio[name=types]:checked").val();
    responses[2] = $("input:radio[name=code]:checked").val();
    responses[3] = $("#punctuation").val();
    responses[4] = $("#whitespace").val();
    responses[5] = $("input:radio[name=IorC]:checked").val();

    var favoriteColor = $("#color").val();
    var js = 0;
    var python = 0;
    var cSharp = 0;
    var machine = 0;

    $(".result").fadeOut();
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
      if(responses[i].includes("machine")) {
        machine++;
      }
    }

    if(python > js && python > cSharp && python > machine) {
      $(".python").fadeIn();
      $(".results").fadeIn();
    } else if(js > python && js > cSharp && js > machine) {
      $(".javascript").fadeIn();
      $(".results").fadeIn();
    } else if(cSharp > python && cSharp > js && cSharp > machine){
      $(".c-sharp").fadeIn();
      $(".results").fadeIn();
    } else if(machine > python && machine > js && machine > cSharp){
      $(".machine").fadeIn();
      $(".results").fadeIn();
    } else {
      $(".results #plural").show();
      $(".results #results").text("");
      if(python === Math.max(python, js, cSharp, machine)) {
        $(".python").fadeIn();
      }
      if(js === Math.max(python, js, cSharp, machine)) {
        $(".javascript").fadeIn();
      }
      if(cSharp === Math.max(python, js, cSharp, machine)) {
        $(".c-sharp").fadeIn();
      }
      if(machine === Math.max(python, js, cSharp, machine)) {
        $(".machine").fadeIn();
      }
      $(".results").fadeIn();
    }

    $("body").css("border-color", favoriteColor);

    event.preventDefault();
  });
});
