const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;

  beforeEach(function () {
    dinosaur1 = new Dinosaur("Bird", "Fruit", 5);
    park = new Park("Jurassic Park", 10, [dinosaur1]);
    dinosaur2 = new Dinosaur("T-Rex", "Mammals", 20);
    dinosaurs = [dinosaur1, dinosaur2];
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function () {
    const actual = park.price;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addToPark(dinosaur2);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2]);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeFromPark();
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.getMostVisited(dinosaurs);
    assert.strictEqual(actual, dinosaur2);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    const actual = park.getAllDinosaursForSpecies("Bird", dinosaurs);
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    const actual = park.getTotalVisitsPerDay(dinosaurs);
    assert.strictEqual(actual, 25);
  });

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
