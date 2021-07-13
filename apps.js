const demonSlayer = {
    name: prompt("State Your Name"),
    time: 60,
    rank: 1,
    tCBScale: 10,
    strengthScale: 10,
    breathTechniqueScale: 10,
    gameStart(event){
        console.warn("=== Begin Your Training ===");
    },
};

console.log(demonSlayer.gameStart());

//tCBScale





$("button").on("click", function(){
    demonSlayer.tCBScale++;
})