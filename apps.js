const demonSlayer = {
    name: "Tevenn Lewis",
    time: 60,
    rank: 1,
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
    if(demonSlayer.tCBScale === 0 || demonSlayer.strengthScale === 0 || demonSlayer.breathTechniqueScale === 0) {
        clearInterval(stopTime);
        clearInterval(stopProgress);
        $(".container").empty();
        $(".container").append($("<h1>A DEMON ATE YOU</h1>").css("font-size", "100px"));
    }
    if(demonSlayer.time === 0 && demonSlayer.tCBScale > 0 && demonSlayer.strengthScale > 0 && demonSlayer.breathTechniqueScale > 0){
        $("#zenitsu").attr("src", "https://i.pinimg.com/originals/73/47/78/7347789b4ef2131e1de720843891bd58.jpg");
        $("body").css("background-color", "rgb(0, 204, 255)");
        clearInterval(stopTime);
        clearInterval(stopProgress);
    }


}

function progressBarValue(){
    demonSlayer.tCBScale--;
    demonSlayer.strengthScale--;
    demonSlayer.breathTechniqueScale--;
    tcbProgress.text(`${demonSlayer.tCBScale}`);
    strengthProgress.text(`${demonSlayer.strengthScale}`);
    breathProgress.text(`${demonSlayer.breathTechniqueScale}`);
}

let stopTime="";
let stopProgress="";

$("#beginButton").on("click", function(){
   stopTime = setInterval(countDownValue, 1000);
    stopProgress = setInterval(progressBarValue, 2000);

});

    






$("#tcb").on("click", function(){
    demonSlayer.tCBScale++;
})
$("#str").on("click", function(){
    demonSlayer.strengthScale++;
})
$("#breath").on("click", function(){
    demonSlayer.breathTechniqueScale++;
})