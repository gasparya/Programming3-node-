grassArr = []
grassEaterArr = []
predatorArr = []
bearArr = []
bearEaterArr = []

function genetareMatrix(lengthY, lengthX, number) {

    let matrix = [];

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    for (let y = 0; y < lengthY; y++) {
        matrix.push([]);
        for (let x = 0; x < lengthX; x++) {
            let randomCount = getRandomInt(number);
            matrix[y].push(randomCount);
        }
    }
    return matrix;

}

matrix = genetareMatrix(50, 50, 6);

let Grass = require("./class.grass.js")
let GrassEater = require("./class.grassEater.js")
let Predator = require("./class.predator.js")
let Bear = require("./class.bear.js")
let BearEater = require("./class.bearEater.js")

var express = require('express');
var app = express();
var fs = require('fs')
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(4000);

function createObjects() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 5) {
                let beEa = new BearEater(x, y)
                bearEaterArr.push(beEa)
            }
            else if (matrix[y][x] == 4) {
                let bea = new Bear(x, y)
                bearArr.push(bea)
            }
            else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y)
                predatorArr.push(pred)
            }
            else if (matrix[y][x] == 2) {
                let grassEat = new GrassEater(x, y)
                grassEaterArr.push(grassEat)
            }
            else if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass)
            }
        }
    }
}
createObjects()

let obj = {
    'matrix': matrix,
    'exanak' : "weather"
}

let takt = 0
exanak = "dzmer"
weather = ["garun","amar","ashun","dzmer"]

function game() {
    takt+=3
    if(takt <= 20){
        obj.exanak = weather[0]
    }
    else if(takt <= 40){
        obj.exanak = weather[1]
    }
    else if(takt <= 60){
        obj.exanak = weather[2]
    }
    else if(takt <= 80){
        obj.exanak = weather[3]
    }
    else{
        takt = 0
    }

    for (var i in grassArr) {
        if(exanak == "garun"){
            grassArr[i].mul();

        }
        else if(exanak == "amar"){
            grassArr[i].mul()
            grassArr[i].mul(40)
        }
        else if(exanak == "ashun"){
            grassArr[i].mul()
            grassArr[i].mul(60)
        }
        else if(exanak == "dzmer"){
            grassArr[i].mul()
            grassArr[i].mul(80)

        }
        
    }
    for (var i in grassEaterArr) {
        if(exanak == "garun"){
            grassEaterArr[i].eat();
            grassEaterArr[i].eat(20);
        }
        else if(exanak == "amar"){
            grassEaterArr[i].eat();
            grassEaterArr[i].eat(40)
        }
        else if(exanak =="ashun"){
            grassEaterArr[i].eat()
            grassEaterArr[i].eat(60)
        }
        else if(exanak =="dzmer"){
            grassEaterArr[i].eat()
            grassEaterArr[i].eat(80)
        }
    }
    for (let i in predatorArr) {
        if(exanak == "garun"){
            predatorArr[i].eat()
            predatorArr[i].eat(20)
        }
        else if(exanak == "amar"){
            predatorArr[i].eat()
            predatorArr[i].eat(40)
        }
        else if(exanak == "ashun"){
            predatorArr[i].eat()
            predatorArr[i].eat(60)
        }
        else if(exanak == "dzmer"){
            predatorArr[i].eat()
            predatorArr[i].eat(80)
        }
       
    }
    for (let i in bearArr) {
        if(exanak == "garun"){
            bearArr[i].eat()
            bearArr[i].eat(20)
        }
        else if(exanak == "amar"){
            bearArr[i].eat()
            bearArr[i].eat(40)
        }
        else if(exanak == "ashun"){
            bearArr[i].eat()
            bearArr[i].eat(60)
        }
        else if(exanak == "dzmer"){
            bearArr[i].eat()
            bearArr[i].eat(80)
        }
        
    }
    for (let i in bearEaterArr) {
        if(exanak == "garun"){
            bearEaterArr[i].eat()
            bearEaterArr[i].eat(20)
        }
        else if(exanak == "amar"){
            bearEaterArr[i].eat()
            bearEaterArr[i].eat(40)
        }
        else if(exanak == "ashun"){
            bearEaterArr[i].eat()
            bearEaterArr[i].eat(60)
        }
        else if(exanak == "dzmer"){
            bearEaterArr[i].eat()
            bearEaterArr[i].eat(80)
        }
        
    }
    io.sockets.emit("uxarkumem matrix", obj);
}
setInterval(game, 1000)

//Canvas Object Delite
io.on('connection', function (socket) {
    socket.on("veracru xot@", function () {
        grassArr = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                matrix[y][x] = 0
            }
        }
    })

    socket.on("veracru xotakerin", function () {
        grassEaterArr = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                matrix[y][x] = 0
            }
        }
    })

    socket.on("veracru gishaticin", function () {
        predatorArr = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                matrix[y][x] = 0
            }
        }
    })

    socket.on("veracru gazanin", function () {
        bearArr = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                matrix[y][x] = 0
            }
        }
    })

    socket.on("veracru amenakerin", function () {
        bearEaterArr = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                matrix[y][x] = 0
            }
        }
    })

    socket.on("veracru bolorin", function () {
        grassArr = []
        grassEaterArr = []
        predatorArr = []
        bearArr = []
        bearEaterArr = []
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                matrix[y][x] = 0
            }
        }
    })
});

//Canvas Object Discipline

io.on('connection', function (socket) {
    socket.on("stexcir xot", function () {
        grassArr = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                let random = Math.floor(Math.random())
                if (x * y == random) {
                    matrix[y][x] = 1
                }
            }
        }
    })

    socket.on("stexcir xotaker", function () {
        grassEaterArr = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (y % 2 == 0) {
                    matrix[y][x] = 2
                }
            }
        }
    })

    socket.on("stexcir gishatic", function () {
        predatorArr = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (x - y == 0) {
                    matrix[y][x] = 3
                }
            }
        }
    })

    socket.on("stexcir gazan", function () {
        bearArr = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (x + y == 49) {
                    matrix[y][x] = 4
                }
            }
        }
    })

    socket.on("stexcir amenaker", function () {
        bearEaterArr = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (x & y % 2 == 0) {
                    matrix[y][x] = 5
                }
            }
        }
    })

    socket.on("stexcir bolor@", function () {
        grassArr = []
        grassEaterArr = []
        predatorArr = []
        bearArr = []
        bearEaterArr = []
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                let random = Math.floor(Math.random())
                if (x * y == random) {
                    matrix[y][x] = 1
                }
                
                else if (x % 2 == 0) {
                    matrix[y][x] = 2
                }
               
                else if (x - y == 0) {
                    matrix[y][x] = 3
                }
                
                else if (x + y == 49) {
                    matrix[y][x] = 4
                }

                else if (y % 2 == 0) {
                    matrix[y][x] = 5
                }
            }
        }
    })
});

let statistics = { }

setInterval(function(){
    statistics.xArr=grassArr.length
    statistics.geArr=grassEaterArr.length
    statistics.pArr=predatorArr.length
    statistics.bArr=bearArr.length
    statistics.beArr=bearEaterArr.length
    fs.writeFileSync("statistics.json",JSON.stringify(statistics))
},20)




