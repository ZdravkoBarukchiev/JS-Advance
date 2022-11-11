function diagonalSums(arr) {
    let firstSum=0;
    let secondSum=0;
    let arrL=arr.length;
    for(let i=0;i<arrL;i++){
        firstSum+=arr[i][i];
        secondSum+=arr[i][arrL-1-i]
    }
    console.log(firstSum,secondSum);
}
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);
