var res;
var activeTeam;
var socket;

var pointArr = [0, 150,150,150,150,150, 150,150,200,100,100, 175,175,100,25,250 ,100,125,150,175,125 ,150,150,50,225,200, 250,250,200,250,175, 175,200,125,250,175, 25,150,225,200,125,  175,150,100,125,225, 100,50,75,100];
var total = pointArr.reduce((partialSum, a) => partialSum + a, 0);

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
        $('#myModal').css({ "display": "none" });
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
        $('#team' + activeTeam).addClass("active");

        for(var i = 0; i < res.teams.length; i++){
            var points = 0;
            for(var j = 0; j < res.teams[i].completedTiles.length; j++)
            {
                points += pointArr[res.teams[i].completedTiles[j]];
            }
            res.teams[i].points = points;
        }

        $('.counter').remove();
        for(var i = 0; i < res.teams.length; i++){
            $('#team' + res.teams[i].teamNumber).append("<span class='counter'>" + res.teams[i].points +"/7500</span>");
        }
    });

    $.ajax({
        type: 'GET',
        url: 'https://sonnerrs-bot.herokuapp.com/prizepool/',
        processData: false,
        contentType: false,
        cache: false
    })
    .done(function(data){
        $('#prizepool').text(`PRIZE POOL: ${data}`);
    });

    $.ajax({url: "https://sonnerrs-bot.herokuapp.com/team/", success: function(result){
        res = result;
        for(var i = 0; i < res.teams.length; i++){
            var points = 0;
            for(var j = 0; j < res.teams[i].completedTiles.length; j++)
            {
                points += pointArr[res.teams[i].completedTiles[j]];
            }
            res.teams[i].points = points;
        }

        for(var i = 0; i < res.teams.length; i++){
            $('#team' + res.teams[i].teamNumber).append("<span class='counter'>" + res.teams[i].points +"/7500</span>");
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
    
    $('#team10').click(function(){
        addBorders(10);
        $("#team10").addClass("active");
    });

    $('#team11').click(function(){
        addBorders(11);
        $("#team11").addClass("active");
    });

    $('#team12').click(function(){
        addBorders(12);
        $("#team12").addClass("active");
    });

    $('#team13').click(function(){
        addBorders(13);
        $("#team13").addClass("active");
    });

    $('#team14').click(function(){
        addBorders(14);
        $("#team14").addClass("active");
    });

    $('#team15').click(function(){
        addBorders(15);
        $("#team15").addClass("active");
    });

    $('#team16').click(function(){
        addBorders(16);
        $("#team16").addClass("active");
    });

    $('#team17').click(function(){
        addBorders(17);
        $("#team17").addClass("active");
    });

    $('#team18').click(function(){
        addBorders(18);
        $("#team18").addClass("active");
    });

    $('#team19').click(function(){
        addBorders(19);
        $("#team19").addClass("active");
    });
    
    $('#team20').click(function(){
        addBorders(20);
        $("#team20").addClass("active");
    });

    $('#team21').click(function(){
        addBorders(21);
        $("#team21").addClass("active");
    });

    $('#team22').click(function(){
        addBorders(22);
        $("#team22").addClass("active");
    });

    $('#team23').click(function(){
        addBorders(23);
        $("#team23").addClass("active");
    });

    $('#team24').click(function(){
        addBorders(24);
        $("#team24").addClass("active");
    });

    $('#team25').click(function(){
        addBorders(25);
        $("#team25").addClass("active");
    });

    $('#team26').click(function(){
        addBorders(26);
        $("#team26").addClass("active");
    });

    $('#team27').click(function(){
        addBorders(27);
        $("#team27").addClass("active");
    });

    $('#team28').click(function(){
        addBorders(28);
        $("#team28").addClass("active");
    });

    $('#team29').click(function(){
        addBorders(29);
        $("#team29").addClass("active");
    });
    
    $('#team30').click(function(){
        addBorders(30);
        $("#team30").addClass("active");
    });
});

var novSet = false;
var pulvSet = false;
var mutantSet = false;
var sarachnisSet = false;
var bergSet = false;
var stryhnsSet = false;
var slepewithnanSet = false;
var flompleSet = false;

function novIsDetected() {
    if(novSet){
        return;
    }
    novSet = true;
    $('#nov').css({"display" : "block"});
    setTimeout(function () {
        $("#nov").animate({ left: "100%", bottom: "100%" }, 10000, function(){
            $('#nov').css({"display" : "none"})
        })
    });
}

function flompleIsDetected() {
    if(flompleSet){
        return;
    }
    flompleSet = true;
    $('#flomple').css({"display" : "block"});
    setTimeout(function () {
        $("#flomple").animate({ left: "100%", bottom: "100%" }, 10000, function(){
            $('#flomple').css({"display" : "none"})
        })
    });
}

function pulvIsDetected() {
    if(pulvSet){
        return;
    }
    pulvSet = true;
    $('#pulv').css({"display" : "block"});
    setTimeout(function () {
        $("#pulv").animate({ left: "100%", bottom: "100%" }, 10000, function(){
            $('#pulv').css({"display" : "none"})
        })
    });
}

function mutantIsDetected() {
    if(mutantSet){
        return;
    }
    mutantSet = true;
    $('#mutant').css({"display" : "block"});
    setTimeout(function () {
        $("#mutant").animate({ left: "100%", bottom: "100%" }, 10000, function(){
            $('#mutant').css({"display" : "none"})
        })
    });
}

function sarachnisIsDetected() {
    if(sarachnisSet){
        return;
    }
    sarachnisSet = true;
    $('#sarachnis').css({"display" : "block"});
    setTimeout(function () {
        $("#sarachnis").animate({ left: "100%", bottom: "100%" }, 10000, function(){
            $('#sarachnis').css({"display" : "none"})
        })
    });
}

function bergIsDetected() {
    if(bergSet){
        return;
    }
    bergSet = true;
    $('#berg').css({"display" : "block"});
    setTimeout(function () {
        $("#berg").animate({ left: "100%", bottom: "100%" }, 10000, function(){
            $('#berg').css({"display" : "none"})
        })
    });
}

function stryhnsIsDetected() {
    if(stryhnsSet){
        return;
    }
    stryhnsSet = true;
    $('#stryhns').css({"display" : "block"});
    setTimeout(function () {
        $("#stryhns").animate({ left: "100%", bottom: "100%" }, 10000, function(){
            $('#stryhns').css({"display" : "none"})
        })
    });
}

function slepewithnanIsDetected() {
    if(slepewithnanSet){
        return;
    }
    slepewithnanSet = true;
    $('#slepewithnan').css({"display" : "block"});
    setTimeout(function () {
        $("#slepewithnan").animate({ left: "100%", bottom: "100%" }, 10000, function(){
            $('#slepewithnan').css({"display" : "none"})
        })
    });
}