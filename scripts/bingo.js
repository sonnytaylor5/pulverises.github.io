var res;
var activeTeam;
var socket;

function addBorders(teamNumber){  
    activeTeam = teamNumber;
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
    socket = io("https://sonnerrs-bot.herokuapp.com");

    socket.on('update', function(socketRes){
        console.log(socketRes);
        //update global store
        for(var i = 0; i < res.teams.length; i++){
            if(res.teams[i].teamNumber == socketRes.teamNumber){
                res.teams[i] = socketRes;
            }
        }

        if(activeTeam == socketRes.teamNumber){
            addBorders(socketRes.teamNumber);
        }

        $('.counter').remove();
        for(var i = 0; i < res.teams.length; i++){
            $('#team' + res.teams[i].teamNumber).append("<span class='counter'>" + res.teams[i].completedTiles.length +"/25</span>");
        }
    });
    $.ajax({url: "https://sonnerrs-bot.herokuapp.com/team/", success: function(result){
        res = result;

        for(var i = 0; i < res.teams.length; i++){
            $('#team' + res.teams[i].teamNumber).append("<span class='counter'>" + res.teams[i].completedTiles.length +"/25</span>");
        }
        
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

    $('#team6').click(function(){
        addBorders(6);
        $("#team6").addClass("active");
    });

    $('#team7').click(function(){
        addBorders(7);
        $("#team7").addClass("active");
    });

    $('#team8').click(function(){
        addBorders(8);
        $("#team8").addClass("active");
    });

    $('#team9').click(function(){
        addBorders(9);
        $("#team9").addClass("active");
    });
    
});