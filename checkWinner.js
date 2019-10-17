

const checkDiagonally = (arr, toCheck) => {
    for (i = 0; i < arr.length; ++i) {
        let col = arr[i].length

        for (let j = 0; j < col; j++) {

            if (arr[i][j] === toCheck
                && arr[i + 1][j + 1] === toCheck
                && arr[i + 2][j + 2] === toCheck
                && arr[i + 3][j + 3] === toCheck
                && arr[i + 4][j + 4] === toCheck
            ) return true;
        }
    }
    return false
}


const checkDiagonallyOtherSide = (arr, toCheck) => {
    for (i = 0; i < arr.length; ++i) {
        let col = arr[i].length

        for (let j = col - 1; j > 0; j--) {

            if (arr[i][j] === toCheck
                && arr[i + 1][j - 1] === toCheck
                && arr[i + 2][j - 2] === toCheck
                && arr[i + 3][j - 3] === toCheck
                && arr[i + 4][j - 4] === toCheck
            ) return true;
        }
    }
    return false
}



const checkHorizontal = (arr, toCheck) => {
    for (i = 0; i < arr.length; ++i) {
        let col = arr[i].length

        for (let j = 0; j < col; j++) {

            if (arr[i][j] === toCheck
                && arr[i][j + 1] === toCheck
                && arr[i][j + 2] === toCheck
                && arr[i][j + 3] === toCheck
                && arr[i][j + 4] === toCheck
            ) return true;
        }
    }
    return false
}



const checkVertically = (arr, toCheck) => {
    for (i = 0; i < arr.length; ++i) {
        let col = arr[i].length

        for (let j = 0; j < col; j++) {

            if (arr[j][i] === toCheck
                && arr[j + 1][i] === toCheck
                && arr[j + 2][i] === toCheck
                && arr[j + 3][i] === toCheck
                && arr[j + 4][i] === toCheck
            ) return true;
        }
    }
    return false
}




const checkWinner = (arr, player) => {
    if (
        checkHorizontal(arr, player) ||
        checkVertically(arr, player) ||
         checkDiagonally(arr, player) ||
        checkDiagonallyOtherSide(arr, player)
        ) 
    
        return true
    else
        return false

}

