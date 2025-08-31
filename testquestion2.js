function setup(){
    createCanvas(600,600);
    background(220);
}
function draw () {
    for(let i = 1;i<11;i++){
        fill(25.5*i);
        circle(i*50,i*50,50);
    }
}
