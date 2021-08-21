
class Traveler {
    constructor (name, amountFood, isHealthy) {
        this.name = name
        this.amountFood = amountFood
        this.isHealthy = isHealthy
    }

    hunt (hunting) {
        if (hunting === true) {
            this.amountFood++
        }
    }

    eat (eating) {
        if (eating === true) {
            if (this.amountFood === 0) {
                this.isHealthy = false
            } else {
                this.amountFood--
            }
        }
    }
}

class Wagon {
   constructor (capacity, passengers) {
       this.capacity = capacity
       this.passengers = passengers
   }

   getAvailableSeatCount () {
        // retorne o número de assentos vazios
        let accents = this.capacity - this.passengers.length
        console.log(accents)
        return accents
   }

   join () {
        //se tiver espaço adicione
   }

   shouldQuarantine () {
       // se tiver um viajante doente return true
       if (Traveler.isHealthy === false) {

       }
   }

   totalFood () {
       // retorna o total de comida de todos os ocupantes
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