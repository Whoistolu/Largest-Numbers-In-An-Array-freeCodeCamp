function largestOfFour(arr) {
    let maxes = [];
    for (var i= 0; i < arr.length; i++) {
        let tempMax = arr[i][0];
        for (var j= 0; j < arr.length j++) {
            let currentElement = arr[i][j];
            if (currentElement >= tempMax) {

            }
        }
        maxes.push(tempMax)
    }
    return arr;
  }
  
  console.log(largestOfFour[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);