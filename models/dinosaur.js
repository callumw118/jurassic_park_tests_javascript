const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}

Dinosaur.prototype.getMostVisited = function(dinosaurs) {
  let visits = 0;
  let mostVisited;
  for(let dino of dinosaurs) {
    if(dino.guestsAttractedPerDay > visits) {
      mostVisited = dino;
    }
  }
  return mostVisited;
}

module.exports = Dinosaur;