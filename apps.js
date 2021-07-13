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
let countDown = 60;

 function countDownValue(){
    demonSlayer.time--;
    timer.text(`Timer: ${demonSlayer.time}sec`);
}
$("#beginButton").on("click", function(){
    setInterval(countDownValue, 1000);
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