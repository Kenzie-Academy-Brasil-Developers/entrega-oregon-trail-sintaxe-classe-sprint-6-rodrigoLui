
class Traveler {
    constructor (name) {
        this.name = name
        this.amountFood = 1
        this.isHealthy = true
    }

    hunt () {
        this.amountFood+= 2
    }

    eat () {
        if (this.amountFood > 0) {
            this.amountFood--
        } else {
            this.amountFood = 0
            this.isHealthy = false
        }
    }
}

class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passengers = new Array
    }

    getAvailableSeatCount () {            
        return this.capacity - this.passengers.length
    }

    join (hero) {
            //se tiver espaço adicione
        if (this.capacity - this.passengers.length > 0) {
            this.passengers.push(hero)
        }
    }

    shouldQuarantine () {
        // se tiver um viajante doente return true
        for (let i = 0; i < this.passengers.length; i++) {
            if (this.passengers[i].isHealthy === false) {
                return true
            }
        }
        return false
    }

    totalFood () {
       // retorna o total de comida de todos os ocupantes
        let totFood = 0
        for (let i = 0; i < this.passengers.length; i++) {
                
            let quantFood = this.passengers[i].amountFood
            totFood+=quantFood
        }
        return totFood
    }
}
// function test () {
//     let arrayTest = new Array
//     console.log(arrayTest.length)
// }

///////////////////////////////////////////////////////////////////////


// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);