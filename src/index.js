
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length == 0) return [];
  let result = [];
    matrix.forEach((a, b) => {
      if (b % 2 != 0) a.reverse();
      result = result.concat(a);
    });
  return result;
}