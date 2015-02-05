"use strict";

var gini = require("./");
var should = require("should");

it("should throw an error for non-array data sets", function() {
  (function() { gini.unordered("2,4,5") }).should.throw("Data set is not an array.");
});

it("should throw an error for empty array data sets", function() {
  (function() { gini.unordered([]) }).should.throw("Data set is an empty array.");
});

it("should return zero for data sets with only one item", function() {
  gini.unordered([0]).should.be.a.Number.and.exactly(0);
  gini.unordered([1]).should.be.a.Number.and.exactly(0);
  gini.unordered([7]).should.be.a.Number.and.exactly(0);
  gini.unordered([9.2]).should.be.a.Number.and.exactly(0);
});

it("should return correct gini for data sets with multiple items", function() {
  gini.unordered([2.7, 3]).should.be.a.Number.and.approximately(0.026, 0.001);
  gini.unordered([0, 1, 2]).should.be.a.Number.and.approximately(0.444, 0.001);
  gini.unordered([501, 4, 89]).should.be.a.Number.and.approximately(0.558, 0.001);
  gini.unordered([3.76, 6.9, 4.99, 62.8, 0.54]).should.be.a.Number.and.approximately(0.646, 0.001);
  gini.unordered([9.1, 43, 11.8, 20]).should.be.a.Number.and.approximately(0.327, 0.001);
  gini.unordered([93, 81, 59, 86, 10, 89, 12]).should.be.a.Number.and.approximately(0.286, 0.001);
  gini.unordered([3, 5, 1907645172]).should.be.a.Number.and.approximately(0.667, 0.001);
  gini.unordered([92827420.5, 6, 2.5, 713, 40, 1002.55]).should.be.a.Number.and.approximately(0.833, 0.001);
});
