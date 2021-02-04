var res;

function addBorders(teamNumber){  
    $('.tile').removeClass("achieved");
    $('.team').removeClass("active");
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
        /*
        var medalString = '<i class="fas fa-medal" aria-hidden="true"></i>';
        var completedTilesLead = 0;
        for(var i = 0; i < res.teams.length; i++)
        {
            if(res.teams[i].completedTiles.length && res.teams[i].completedTiles.length > completedTilesLead){
                completedTilesLead = res.teams[i].completedTiles.length;
            }
        }

        for(var i = 0; i < res.teams.length; i++){
            if(res.teams[i].completedTiles.length == completedTilesLead){
                $('#team' + res.teams[i].teamNumber).append(medalString);
            }
        }
        */
      },error:function(result){
        if(result.status == 429){
            $('#subtitle').text("Too many requests. Try again in a minute.");
            $('#subtitle').css({"color" : "red"});
        }
      }});

    $('#team1').click(function(){
        addBorders(1);
        $("#team1").addClass("active");
    });

    $('#team2').click(function(){
        addBorders(2);
        $("#team2").addClass("active");
    });

    $('#team3').click(function(){
        addBorders(3);
        $("#team3").addClass("active");
    });

    $('#team4').click(function(){
        addBorders(4);
        $("#team4").addClass("active");
    });

    $('#team5').click(function(){
        addBorders(5);
        $("#team5").addClass("active");
    });
});