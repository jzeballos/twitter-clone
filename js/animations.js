  // Use jQuery to add the following features:
// DONE- Initially, the Tweet button and the character count button should be hidden (CSS).
// DONE- When the user clicks on the textarea, the textarea should double in size and the character count and Tweet buttons should be revealed.
// DONE- As the user types, the character count should decrease.
// DONE- When there are 10 or less characters, the character counter should turn red.
// DONE- If the user puts in more than 140 characters, the tweet button should be disabled (and re-enabled when there are <= 140 chars).
// - When the user successfully inputs characters and clicks the “Tweet” button, a new tweet should be created and added to the tweet stream in the main column, using the user’s fake profile image in the top left and username/fullname.

$(document).ready(function() {
  $('#tweet-controls').hide();
  $('#tweet-submit').prop("disabled", true);

  $('.tweet-compose').click(function() {
    $('#tweet-controls').show();
    $('.tweet-compose').css("height","5em");
  });

  $('.tweet-compose').keyup( function() {
      var value = $(this).val();
      var maxlength = 140;
      var compare = maxlength - value.length;
      $("#char-count").html(compare);
      if (compare <= 10) {
        $("#char-count").css('color', 'red');
      } else {
        $("#char-count").css('color', '#999');
      }
      if (compare < 0 || compare >= maxlength) {
        $('#tweet-submit').prop("disabled", true);
      } else {
        $('#tweet-submit').prop("disabled", false);
      }
  });



  $('#tweet-submit').click( function() {
    function getFormattedDate() {
        var date = new Date();
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        function getTime() {
          var hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
          var hora = hours[date.getHours()];
          var horaFinal;
          var ampm;
          if (date.getHours() > 12) {
            ampm = ' PM';
          } else {
            ampm = ' AM';
          }
          if (date.getMinutes() < 10) {
            minutes = '0' + date.getMinutes();
          } else {
            minutes = date.getMinutes();
          }
          horaFinal = hora + ':' + minutes + ampm;
          return horaFinal;
        }
        var agno = date.getFullYear().toString();
        var str = getTime() + ' - ' + date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + agno.substr(agno.length - 2);
        return str;
    }

      var value = $('.tweet-compose').val();
      var blocks = '<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" /><strong class="fullname">Jorge Zeballos&nbsp</strong><span class="username">@jorge-zeballos</span><div class="icon2 action-retweet2" style="display: none;">&nbsp</div><div class="icon2 action-favorite2" style="display: none;"></div><p class="tweet-text">' + value + '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply&nbsp</li><li><span class="icon action-retweet"></span> Retweet&nbsp</li><li><span class="icon action-favorite"></span> Favorite&nbsp</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats" style="display: none;"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/funwatercat.jpg" /><img src="img/vklimenko.jpg" /></div></div><div class="time">' + getFormattedDate() + '</div></div><div class="reply" style="display: none;><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @jorge-zeballos"/></textarea></div></div></div>';

      // console.log(i);
      var d = new Date();
      var temp = d.getTime();
      localStorage.setItem("item" + temp, blocks);


    $('#stream').prepend(blocks);
    $('.tweet-compose').val('');
    $("#char-count").html(140);

    // hide and show the tweet actions
    $('.tweet-actions').hide();
    $('.content').hover( function() {
      $(this).children('.tweet-actions').show();
    }, function() {
      $(this).children('.tweet-actions').hide();
    });




  });

  $('.action-retweet2, .action-favorite2').hide();

  // hide and show the tweet actions
  $('.tweet-actions').hide();
  $('.content').hover( function() {
    $(this).children('.tweet-actions').show();
  }, function() {
    $(this).children('.tweet-actions').hide();
  });

  $('.content').children('.stats, .reply').hide();

  //implement the icons if they are clicked
  // $('.action-retweet').click( function() {
  //   $(this).parents().parents().parents().parents().children('.action-retweet2').show();
  // });

});

$(document).on("click", ".content", function() {
  if ($(this).children('.stats, .reply').css('display') === 'none' ){
    $(this).children('.stats, .reply').show("fast");
  } else {
    $(this).children('.stats, .reply').hide("fast");
  }
});


//implement the icons if they are clicked
$(document).on("click", ".action-retweet", function() {
  $(this).parents().parents().parents().parents().children('.action-retweet2').show();
});

$(document).on("click", ".action-favorite", function() {
  $(this).parents().parents().parents().parents().children('.action-favorite2').show();
});
