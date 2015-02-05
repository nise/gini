"use strict";

module.exports.ordered = function(data) {
  if (!Array.isArray(data)) {
    throw new Error("Data set is not an array.");
  }

  if (data.length <= 0) {
    throw new Error("Data set is an empty array.");
  }

  if (data.length == 1) {
    return 0; // Don't even bother calculating. Complete equality.
  }

  var sum1 = 0;
  var sum2 = 0;

  data.forEach(function(value, i) {
    // Ensure data set contains only numbers.
    value = Number(value);

    sum1 += ((2 * (i + 1)) - data.length - 1) * value;
    sum2 += value;
  });

  return sum1 / (Math.pow(data.length, 2) * (sum2 / data.length));
};

module.exports.unordered = function(data) {
  if (!Array.isArray(data)) {
    throw new Error("Data set is not an array.");
  }

  if (data.length <= 0) {
    throw new Error("Data set is an empty array.");
  }

  if (data.length == 1) {
    return 0; // Don't even bother calculating. Complete equality.
  }

  var sum1 = 0;
  var sum2 = 0;

  // Ensure data set contains only numbers.
  data = data.map(function(value) { return Number(value); });

  data.forEach(function(value1, i) {
    data.forEach(function(value2, j) {
      if (i != j) {
        sum1 += Math.abs(value1 - value2);
      }
    });

    sum2 += value1;
  });

  return sum1 / (2 * Math.pow(data.length, 2) * (sum2 / data.length));
};
