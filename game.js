let array=["Rock","paper", "scissor"];

let UserScore=0;
let ComputerScore=0;

$("#rock").on("click", function(){

var random_number1= Math.floor(Math.random()*3);

    if(random_number1===0){
        $("#result").text("its tie");

    }

    else if(random_number1===2){
        UserScore+=1;
        $("#result").text("You Win !");
        $("#userScore").text(UserScore);

    }

    else if(random_number1===1){
        ComputerScore+=1;
        $("#result").text("Computer win !");
        $("#ComputerScore").text(ComputerScore);
    }

    else{
        $("#result").text("try you lcuk!");
    }

});


$("#paper").on("click", function(){


    var random_number2= Math.floor(Math.random()*3);
    
    if(random_number2===0){
        $("#result").text("its tie");
    }

    else if(random_number2===2){
        UserScore+=1;
        $("#result").text("You Win !");
        $("#userScore").text(UserScore);
    }

    else if(random_number2===1){
        ComputerScore+=1;
        $("#result").text("Computer win !");
        $("#ComputerScore").text(ComputerScore);
    }

    else{
        $("#result").text("try you lcuk!");
    }

});



$("#scissor").on("click", function(){



    var random_number3= Math.floor(Math.random()*3);

    
    if(random_number3===0){
        $("#result").text("its tie");
    }

    else if(random_number3===2){
        UserScore+=1;
        $("#result").text("You Win !");
        $("#userScore").text(UserScore);
    }

    else if(random_number3===1){
        ComputerScore+=1;
        $("#result").text("Computer win !");
        $("#ComputerScore").text(ComputerScore);
    }

    else{
        $("#result").text("try you lcuk!");
    }

});

