var side = 15;
let socket = io()

function setup() {
    frameRate(5);
    createCanvas(50 * side, 50 * side);
    background('#acacac');
    
}
exanak = "dzmer"
let weatherP = document.getElementById("weather")

let ex = socket.on("exanaks", function(w){
    exanak = w
    weatherP = exanak
})

function drawMatrix(obj) {
    matrix = obj.matrix
    exanak = obj.exanak
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            
            if (matrix[y][x] == 1) {
                if(exanak == "garun"){
                    fill("green");
                }
                else if(exanak == "amar"){
                    fill(0, 155, 0)
                }
                else if(exanak == "ashun"){
                    fill(0, 75, 0)
                }
                else if(exanak == "dzmer"){
                    fill("white")
                }
            }
            else if (matrix[y][x] == 2) {
                if(exanak == "garun"){
                    fill(224, 236, 61)
                }
               else if(exanak == "amar"){
                    fill("yellow")
               }
               else if(exanak == "ashun"){
                    fill(211, 225, 23)
               }
               else if (exanak == "dzmer"){
                    fill(193, 206, 7)
               }
            }
            else if (matrix[y][x] == 3) {
                if(exanak == "garun"){
                    fill(225, 102, 72)
                }
                else if(exanak == "amar"){
                    fill("red")
                }
                else if(exanak == "ashun"){
                    fill(220, 56, 15)
                }
                else if(exanak == "dzmer"){
                    fill(193, 49, 12)
                }             
            }
            else if (matrix[y][x] == 4) {
                if(exanak == "garun"){
                    fill(164, 65, 40)
                }
                else if(exanak == "amar"){
                    fill("SaddleBrown")
                }
                else if(exanak == "ashun"){
                    fill(149, 42, 15)
                }
                else if(exanak == "dzmer"){
                    fill(132, 34, 9)
                }
            }
            else if (matrix[y][x] == 5) {
                if(exanak == "garun"){
                    fill(79, 75, 74)
                }
                else if(exanak == "amar"){
                     fill("black")
                }
                else if(exanak == "ashun"){
                    fill(45, 40, 39)
                }
                else if(exanak == "dzmer"){
                    fill(84, 82, 81)
                }
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
               
            }
             rect(x * side, y * side, side, side);
        }
    }
}
socket.on("uxarkumem matrix",drawMatrix)

//Canvas Object Delete
function gr(){
    socket.emit("veracru xot@")
}

function ge(){
    socket.emit("veracru xotakerin")
}

function pr(){
    socket.emit("veracru gishaticin")
}

function be1(){
    socket.emit("veracru gazanin")
}

function be2(){
    socket.emit("veracru amenakerin")
}

function bl(){
    socket.emit("veracru bolorin")
}

//Canvas Object Discipline
function gre(){
    socket.emit("stexcir xot")
}

function gea(){
    socket.emit("stexcir xotaker")
}

function pre(){
    socket.emit("stexcir gishatic")
}

function bea1(){
    socket.emit("stexcir gazan")
}

function bea2(){
    socket.emit("stexcir amenaker")
}

function blo(){
    socket.emit("stexcir bolor@")
}