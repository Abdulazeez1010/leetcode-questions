/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    let m = n - 1;
    let r = m;
    for (let i = 0; i < n/2; i++) { 
        let k = m;
        for (let j = i; j < r; j++) {
            let curr1 = matrix[j][m];
            matrix[j][m] = matrix[i][j];
            let curr2 = matrix[m][k];
            matrix[m][k] = curr1;
            let curr3 = matrix[k][i];
            matrix[k][i] = curr2;
            matrix[i][j] = curr3;
            k--;
        }
        m--;
        r--;
    } 
};
