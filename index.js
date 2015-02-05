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

  for (var i = 0; i < data.length; i++) {
    var value = Number(data[i]);
    if (isNaN(value)) {
      throw new Error("Data set contains non-numbers.");
    }

    sum1 += ((2 * (i + 1)) - data.length - 1) * value;
    sum2 += value;
  }

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

  data = data.map(function(value) {
    if (isNaN(value = Number(value))) {
      throw new Error("Data set contains non-numbers.");
    }
    return value;
  });

  var sum1 = 0;
  var sum2 = 0;

  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data.length; j++) {
      if (i != j) {
        sum1 += Math.abs(data[i] - data[j]);
      }
    }

    sum2 += data[i];
  }

  return sum1 / (2 * Math.pow(data.length, 2) * (sum2 / data.length));
};
