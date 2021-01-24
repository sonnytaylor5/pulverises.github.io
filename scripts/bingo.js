var res;

function addBorders(teamNumber){  
    $('.tile').removeClass("achieved");
    for(var i = 0; i < res.teams.length; i++){
        if(res.teams[i].teamNumber == teamNumber){
            for(var j = 0; j < res.teams[i].completedTiles.length; j++){
                $('#' + res.teams[i].completedTiles[j]).addClass("achieved");
            }
        }
    }
}
$(document).ready(function(){
    $.ajax({url: "https://sonnerrs-bot.herokuapp.com/team/", success: function(result){
        res = result;
      }});

    $('#team1').click(function(){
        addBorders(1);
    });

    $('#team2').click(function(){
        addBorders(2);
    });

    $('#team3').click(function(){
        addBorders(3);
    });

    $('#team4').click(function(){
        addBorders(4);
    });

    $('#team5').click(function(){
        addBorders(5);
    });
});