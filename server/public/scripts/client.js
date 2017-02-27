$(document).ready(function() {
  console.log('jquery loaded');




  $.ajax({
        type: 'GET',
        url: '/jokes',
        success: function( response ){
          console.log( 'back from ajax with:', response );
for (var i = 0; i < response.length; i++) {
  console.log("response",response);
  $("#jokesOnPage").append('<p>'+ response[i].whoseJoke +'<br>'+
  response[i].jokeQuestion+'<br>'+ response[i].punchLine+'</p>');
  console.log(response[i].jokeQuestion);
  console.log(response[i].punchLine);
}



          $(".jokesOnPage").html(response[0].whoseJoke);
}
});  //ajax GET



//
$("#jokeInputButton").on('click', function(){
    var jokeObject = {};
    console.log($("#name").val());
    jokeObject.whoseJoke = $("#name").val();
    jokeObject.jokeQuestion = $("#punchLine").val();
    jokeObject.punchLine = $("#jokeQuestion").val();

    $.ajax({
      type: 'POST',
      url: '/new/joke',
      data: jokeObject,
      success: function(response){
        var lastResponse = response.length-1;

        $('#newJokes').append('<p>'+ response[lastResponse].whoseJoke +'<br>'+
        response[lastResponse].jokeQuestion+'<br>'+ response[lastResponse].punchLine+'</p>');


    } //closes success
}); // ajax
}); // closes button

}); //closes doc ready
