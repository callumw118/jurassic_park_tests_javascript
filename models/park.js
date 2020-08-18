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
    let visits = 0;
    let mostVisited;
    for(let dino of dinosaurs) {
      if(dino.guestsAttractedPerDay > visits) {
        mostVisited = dino;
      }
    }
    return mostVisited;
  }


module.exports = Park;