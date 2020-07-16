class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
       return this.capacity - this.passengers.length
        
    }
    join(Traveler) {
        if (this.capacity > this.passengers.length) {
            this.passengers.push(Traveler)

        }
    }
    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index++) {
            let currentPassenger = this.passengers[index];
            if (currentPassenger.isHealthy === false) {
                return true
            }
        }
        return false 
    }
    totalFood() {
       let allPassengersFood = 0
       for (let index = 0; index < this.passengers.length; index++) {
           let currentPassenger = this.passengers[index];
           allPassengersFood += currentPassenger.food
 }
 return allPassengersFood
    }
}