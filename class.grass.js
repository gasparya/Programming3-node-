let LivingCreature = require("./class.livingCreature.js")

module.exports = class Grass extends LivingCreature {    
    chooseCell() {
       this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    mul() {
        this.multiply++
        let fundCords = this.getDirections()
        var cord = fundCords[Math.floor(Math.random()*fundCords.length)];
        
        if (this.multiply >= 5 && cord) {
            let x = cord[0]
            let y = cord[1]

            matrix[y][x] = 1
            this.multiply = 0
            let grass = new Grass(x, y)
            grassArr.push(grass)
        }
    }
}