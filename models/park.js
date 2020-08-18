const Park = function (name, price, dinosaurs) {
    this.name = name;
    this.price = price;
    this.dinosaurs = dinosaurs;
}

Park.prototype.addToPark = function(dinosaurToAdd) {
    this.dinosaurs.push(dinosaurToAdd);
}

Park.prototype.removeFromPark = function() {
    this.dinosaurs.pop();
}

Park.prototype.getMostVisited = function(dinosaurs) {
    let mostVisited;
    for(let dino of dinosaurs) {
      if(dino.guestsAttractedPerDay > visits) {
        mostVisited = dino;
      }
    }
return mostVisited;
}

Park.prototype.getAllDinosaursForSpecies = function(species, dinosaurs) {
    let speciesArray = [];

    for(let dino of dinosaurs) {
        if(dino.species === species) {
            speciesArray.push(dino);
        }
    }
    return speciesArray;
}

Park.prototype.getTotalVisitsPerDay = function(dinosaurs) {
    totalVisits = 0;

    for(let dino of dinosaurs) {
        totalVisits += dino.guestsAttractedPerDay;
    }
    return totalVisits;
}

module.exports = Park;