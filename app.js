// countDown
function countDown(num){
    let count = setInterval(function(){
        num--;
        if(num <= 0){
            clearInterval(count);
            console.log("Done!");
        }
        else {
            console.log(num);
        }
    }, 1000)

}

//randomGame
//function that selects a random number between 0-1 every 1000ms
    //variable to store count
    //add 1 to the count each time a number is selected
    //if number > .75 stop timer and print counter
function randomGame(){
    let counter = 0
    let random;
    let picker = setInterval(function(){
        random = Math.random();
        counter++
        if (random > .75){
            clearInterval(picker);
            console.log(`${counter}`)
        }
    }, 1000)   
}