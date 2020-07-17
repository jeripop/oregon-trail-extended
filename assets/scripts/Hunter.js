class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2
    }

    hunt() {
        this.food += 5
    }

    eat() {
        if (this.food > 1) {
            this.food -= 2
        } else {
            this.food = 0
            this.isHealthy = false
        }
    }

    giveFood(Traveler, numOfFoodUnits) {
       if (this.food > numOfFoodUnits) {
            this.food -= numOfFoodUnits
            Traveler.food += numOfFoodUnits
        }

    }

}