var counter = 0;
var countPlayer = 0;
$(document).ready(function () {


  $('.players').click(function() {
    var $input = $('#players').val();
    var $firstPlayer = $('#player1').text();
    if(countPlayer == 0 ) {
        $('#player1').text($input);
        countPlayer++;
    }
    else if (countPlayer == 1) {
        $('#player2').text($input)
        countPlayer++;
        $('#turn').text($firstPlayer);
    } else {
      swal('Only 2 players can play!');
    }

    $('#players').val('');

  });


  $('.box').click(function (event) {
    var $player1 = $('#player1').text();
    var $player2 = $('#player2').text();

    if (countPlayer == 0) {
      swal('Please enter names');
      return false;

    }

    if (counter % 2 == 0) {
        $(this).addClass('circle animated bounceIn').append('<img src="http://i.imgur.com/0u0pAmE.png">');

        counter++;

        $('#turn').text($player2);

    }
    else{
        $(this).addClass('x animated bounceIn').append('<img src="http://i.imgur.com/IX04cXu.png">');
        counter++;
        $('#turn').text($player1);
    }

    if( counter == 9) {

      $('#board').addClass('blue animated zoomIn').html('<img src="http://nintendoenthusiast.com/wp-content/uploads/2013/07/Game-over-widescreen-wallpaper-picture-photo-960x540.jpg">');
    }

  winning();

  }); // end click event

  $('.resetGame').click(function() {
      location.reload();
  }); // end reset button


  });

function winning() {
    var winning = [
        [".box1", ".box2", ".box3"],
        [".box4", ".box5", ".box6"],
        [".box7", ".box8", ".box9"],
        [".box1", ".box5", ".box9"],
        [".box7", ".box5", ".box3"],
        [".box1", ".box4", ".box7"],
        [".box2", ".box5", ".box8"],
        [".box3", ".box6", ".box9"]
    ];





      for(var i = 0; i <winning.length; i++) {
        var circle = $('.circle');
        var x = $('.x');
        var circleWinCount = 0;
        var xWinCount = 0;

        for(var j = 0; j<winning[i].length; j++){

          if (circle.is(winning[i][j])) {
            circleWinCount++;

        }
          else if (x.is(winning[i][j])) {
            xWinCount++;
          }

          if (circleWinCount === 3) {
              alert('Player 1 Won!');

          }

          if (xWinCount === 3) {
              alert('Player 2 Won!');
          }

        }
      }
    }; //end of winning function
