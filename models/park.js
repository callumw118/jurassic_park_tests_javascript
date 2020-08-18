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
    let mostVisited = dinosaurs[0].guestsAttractedPerDay
    for(let dino of dinosaurs) {
        if(dino.guestsAttractedPerDay > mostVisited) {
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

Park.prototype.getTotalVisitsPerDay = function(park) {
    totalVisits = 0;

    for(let dino of park.dinosaurs) {
        totalVisits += dino.guestsAttractedPerDay;
    }
    return totalVisits;
}

Park.prototype.getTotalVisitsPerYear = function(park) {
    visitsPerDay = this.getTotalVisitsPerDay(park);
    visitsPerYear = visitsPerDay * 365;
    return visitsPerYear;
}

Park.prototype.getTotalRevenue = function(park) {
    visitsPerYear = this.getTotalVisitsPerYear(park);
    totalRevenue = park.price * visitsPerYear;
    return totalRevenue;
}

Park.prototype.removeSpecies = function(species, dinosaurs) {
    let dinosaursToKeep = [];
    for(var i=0; i<dinosaurs.length; i++) {
        if(dinosaurs[i].species !== species) {
            dinosaursToKeep.push(dinosaurs[i]);
        }
    }
    return dinosaursToKeep;
}

module.exports = Park;