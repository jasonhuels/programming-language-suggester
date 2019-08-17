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
    var java = 0;

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
      if(responses[i].includes("machine")) {
        machine++;
      }
      if(responses[i].includes("java")) {
        java++;
      }
    }

    if(python > js && python > cSharp && python > machine && python > java) {
      $(".python").fadeIn();
    } else if(js > python && js > cSharp && js > machine && js > java) {
      $(".javascript").fadeIn();
    } else if(cSharp > python && cSharp > js && cSharp > machine && cSharp > java){
      $(".c-sharp").fadeIn();
    } else if(machine > python && machine > js && machine > cSharp && machine > java){
      $(".machine").fadeIn();
    } else if(java > python && java > js && java > cSharp && java > java){
      $(".java").fadeIn();
    } else {
      $(".results #plural").show();
      if(python === Math.max(python, js, cSharp, machine, java)) {
        $(".python").fadeIn();
      }
      if(js === Math.max(python, js, cSharp, machine, java)) {
        $(".javascript").fadeIn();
      }
      if(cSharp === Math.max(python, js, cSharp, machine, java)) {
        $(".c-sharp").fadeIn();
      }
      if(machine === Math.max(python, js, cSharp, machine, java)) {
        $(".machine").fadeIn();
      }
      if(java === Math.max(python, js, cSharp, machine, java)) {
        $(".java").fadeIn();
      }
    }
    $(".results").show();
    $("body").css("border-color", favoriteColor);

    event.preventDefault();
  });
});
