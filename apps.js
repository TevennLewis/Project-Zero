const demonSlayer = {
    name: "Tevenn Lewis",
    time: 90,
    rank: "Mizunoto",
    tCBScale: 10,
    strengthScale: 10,
    breathTechniqueScale: 10,
    gameStart(event){
        console.warn("=== Begin Your Training ===");
    },
}

let timer = $("h1")
let tcbProgress = $("#tcbScore");
let strengthProgress = $("#strScore")
let breathProgress = $("#breathScore")


 function countDownValue(){
    demonSlayer.time--;
    timer.text(`Timer: ${demonSlayer.time}sec`);
    if(demonSlayer.tCBScale <= 0 || demonSlayer.strengthScale <= 0 || demonSlayer.breathTechniqueScale <= 0) {
        clearInterval(stopTime);
        clearInterval(stopProgress);
        $("main").empty();
        $("main").append($("<h1>A DEMON ATE YOU</h1>").css("font-size", "100px"));
    }

    if(demonSlayer.time === 60) {
        $("#zenitsu").attr("src", "https://i.pinimg.com/originals/73/47/78/7347789b4ef2131e1de720843891bd58.jpg").fadeOut( "slow", function() {
            // Animation complete.
          }).fadeIn( "slow", function() {
            // Animation complete
          });
    } else if (demonSlayer.time === 30) {
        $("#zenitsu").attr("src", "http://images6.fanpop.com/image/photos/43400000/-Giyu-Tomioka-Demon-Slayer-anime-43458556-540-810.jpg").fadeOut( "slow", function() {
            // Animation complete.
          }).fadeIn( "slow", function() {
            // Animation complete
          });

    }
    // if(demonSlayer.time <= 60  && demonSlayer.tCBScale > 0 && demonSlayer.strengthScale > 0 && demonSlayer.breathTechniqueScale > 0){
    //     $("#zenitsu").attr("src", "https://i.pinimg.com/originals/73/47/78/7347789b4ef2131e1de720843891bd58.jpg");
    //     $("body").css("background-color", "rgb(0, 204, 255)");
    //     $("#ranking").text("Rank: Tsuchinoto");
    //     $( "#zenitsu" ).animate({
    //         opacity: 0.25,
    //         left: "+=50",
    //         height: "toggle"
    //       }, 5000, function() {
    //         // Animation complete.
    //       });
    //     demonSlayer.tCBScale-=2;
    //     demonSlayer.strengthScale-=2;
    //     demonSlayer.breathTechniqueScale-=2;
    //     console.log("Less than 60 ",demonSlayer.tCBScale);
    //     // clearInterval(stopTime);
    //     // clearInterval(stopProgress);
    // } else if (demonSlayer.time <= 30 && demonSlayer.tCBScale > 0 && demonSlayer.strengthScale > 0 && demonSlayer.breathTechniqueScale > 0) {
    //     $("body").css("background-color", "rgb(4, 90, 170)");
    //     $("#zenitsu").attr("src", "http://images6.fanpop.com/image/photos/43400000/-Giyu-Tomioka-Demon-Slayer-anime-43458556-540-810.jpg");
    //     $("#ranking").text("Rank: Hashira");
    //     demonSlayer.tCBScale-=3;
    //     demonSlayer.strengthScale-=3;
    //     demonSlayer.breathTechniqueScale-=3;
    //     console.log("Less than 30 ",demonSlayer.tCBScale);
    // } else if (demonSlayer.time <= 0 && demonSlayer.tCBScale > 0 && demonSlayer.strengthScale > 0 && demonSlayer.breathTechniqueScale > 0) {
    //     clearInterval(stopTime);
    //     clearInterval(stopProgress);
    //     $(".container").empty();
    //     $(".container").append($("<h1>YOU WIN!!!</h1>").css("font-size", "100px"));
    // }


}

function progressBarValue(){
    demonSlayer.tCBScale--;
    demonSlayer.strengthScale--;
    demonSlayer.breathTechniqueScale--;
    tcbProgress.text(`TCB Score: ${demonSlayer.tCBScale}`);
    strengthProgress.text(`Strength Score: ${demonSlayer.strengthScale}`);
    breathProgress.text(`Breathing Technique Score: ${demonSlayer.breathTechniqueScale}`);
    if(demonSlayer.time <= 60 && demonSlayer.time > 30 && demonSlayer.tCBScale > 0 && demonSlayer.strengthScale > 0 && demonSlayer.breathTechniqueScale > 0){
        // $("#zenitsu").attr("src", "https://i.pinimg.com/originals/73/47/78/7347789b4ef2131e1de720843891bd58.jpg").fadeOut( "fast", function() {
        //     // Animation complete.
        //   }).fadeIn( "fast", function() {
        //     // Animation complete
        //   });
        $("body").css("background-color", "rgb(0, 204, 255)");
        $("#ranking").text("Rank: Tsuchinoto");
        $( "#book" ).animate({
            width: "toggle",
            height: "toggle"
          }, {
            duration: 5000,
          });

        demonSlayer.tCBScale-=2;
        demonSlayer.strengthScale-=2;
        demonSlayer.breathTechniqueScale-=2;
        console.log("Less than 60 ",demonSlayer.tCBScale);
        // clearInterval(stopTime);
        // clearInterval(stopProgress);
    } else if (demonSlayer.time <= 30 && demonSlayer.time > 0 && demonSlayer.tCBScale > 0 && demonSlayer.strengthScale > 0 && demonSlayer.breathTechniqueScale > 0) {
        $("body").css("background-color", "rgb(4, 90, 170)");
        $("#zenitsu").attr("src", "http://images6.fanpop.com/image/photos/43400000/-Giyu-Tomioka-Demon-Slayer-anime-43458556-540-810.jpg");
        $("#ranking").text("Rank: Hashira");
        demonSlayer.tCBScale-=3;
        demonSlayer.strengthScale-=3;
        demonSlayer.breathTechniqueScale-=3;
        console.log("Less than 30 ",demonSlayer.tCBScale);
    } else if (demonSlayer.time <= 0 && demonSlayer.tCBScale > 0 && demonSlayer.strengthScale > 0 && demonSlayer.breathTechniqueScale > 0) {
        clearInterval(stopTime);
        clearInterval(stopProgress);
        $("main").empty();
        $("main").append($("<h1>YOU WIN!!!</h1>").css("font-size", "100px"));
    }
}

let stopTime="";
let stopProgress="";

$("#beginButton").on("click", function(){
   stopTime = setInterval(countDownValue, 1000);
    stopProgress = setInterval(progressBarValue, 2000);
    $("#beginButton").remove();


});

    



$("#submit").on("click", function() {
    let $inputName = $("input").val();
    $("input").before($(`<h2>${$inputName}</h2>`));
    $("input").remove();
    $("#submit").remove();
});


$("#tcb").on("click", function(){
    demonSlayer.tCBScale++;
    $("#tcbScore").text(`TCB Score: ${demonSlayer.tCBScale}`);
    // $("img").css("transform", "scale(1.3)");
});
$("#str").on("click", function(){
    demonSlayer.strengthScale++;
    $("#strScore").text(`Strength Score: ${demonSlayer.strengthScale}`);
});
$("#breath").on("click", function(){
    demonSlayer.breathTechniqueScale++;
    $("#breathScore").text(`Breathing Technique Score: ${demonSlayer.breathTechniqueScale}`);
});

// $("img").ready(function(){
//     $("img").css("transition", "3.5");
//     $("img").css("transform", "scale(1.2)");
//     $("img").css("transition", "3.5");
//     $("img").css("transform", "scale(0.7)");


// })