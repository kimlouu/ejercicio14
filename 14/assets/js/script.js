$(document).ready(function(){
  $('#myform').on('submit', function(crear){
    var text = $("#mytext").val();
    event.preventDefault();
    $('#board').append(
      '<div class="twittcard">'
      +'<div class="input">'
      +'<div class="avatar col-lg-1">'
          +'</div>'
      +'<div class="col-lg-11">'
      +'<h1>Juana Doe </h1><h2>@ jdoe . 3m</h2><span id="removecard" class="glyphicon glyphicon-remove" aria-hidden="true"></span>'
      +'<p>' + text + '</p>'
      +'<div class="postimg">'
          +'</div>'
      +'<span id="like" class="far fa-heart"><p class="counterlike">0</p></span>'
          +'</div>'
          +'</div>'
          +'</div>')
    $("#mytext").val('');
    $("#mytext").focus();
  });
  $('#board').on('click', '#removecard', function(event){
    event.stopPropagation();
    $(this).parent().parent().parent().fadeOut(900);
  });
  $('#board').on('click', '#like', function(likes){
    likes.stopPropagation();
    $(this).removeClass('far').addClass('fas')

    var likemas = 1 + Number($(this).val());
    $(this).children().text(likemas);

  })
})
