class Doctor extends Traveler {
   constructor(name){
    super(name)
}

heal(Traveler) {
    if (this.isHealthy === false) {
        return this.shouldQuarantine = false 
    }
    return Traveler.isHealthy = true
    
}
}