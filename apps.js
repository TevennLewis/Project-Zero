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

let timer = $("h1");
let tcbProgress = $("#tcbScore");
let strengthProgress = $("#strScore")
let breathProgress = $("#breathScore")


 function countDownValue(){
    demonSlayer.time--;
    timer.text(`Timer: ${demonSlayer.time}sec`);

}

function progressBarValue(){
    demonSlayer.tCBScale--;
    demonSlayer.strengthScale--;
    demonSlayer.breathTechniqueScale--;
    tcbProgress.text(`${demonSlayer.tCBScale}`);
    strengthProgress.text(`${demonSlayer.strengthScale}`);
    breathProgress.text(`${demonSlayer.breathTechniqueScale}`);
}
$("#beginButton").on("click", function(){
    setInterval(countDownValue, 1000);
    setInterval(progressBarValue, 2000);

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