const Park = function (name, price, dinosaurs) {
    this.name = name;
    this.price = price;
    this.dinosaurs = dinosaurs;
}

Park.prototype.addToPark = function(dinosaurToAdd) {
    this.dinosaurs.push(dinosaurToAdd);
}

module.exports = Park;