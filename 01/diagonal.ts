function diagonal(matrix: number[][]): number[][] {
  const size = matrix.length;

  if (matrix.some((row) => row.length !== size)) {
    throw new Error("A matriz não é quadrada");
  }

  for (let i = 0; i < size; i++) {
    const temp = matrix[i][i];
    matrix[i][i] = matrix[i][size - 1 - i];
    matrix[i][size - 1 - i] = temp;
  }

  return matrix;
}

const matrizQuadrada: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrizInvertida = diagonal(matrizQuadrada);
console.log(matrizInvertida);
