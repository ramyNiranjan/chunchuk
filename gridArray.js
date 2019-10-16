
//method for creating a grid
const creatingGrid = (row, col, selection) => {
    for (let i = 0; i < row; i++) {
        let div = document.createElement('div')
        div.setAttribute('class', 'grid-row')
        div.setAttribute('id', `${i}`)
        for (let j = 0; j < col; j++) {
            let btn = document.createElement('button')
            btn.setAttribute('class', 'grid-col')
            btn.setAttribute('id', `${j}`)
            div.appendChild(btn)
        }
        selection.appendChild(div)
    }
}


//creating 2DArray imitate matrix
const creatingTowDArray = (row, col) => {
    let towDArray = []
    for (let i = 0; i < row; i++) {
        towDArray[i] = new Array(col)
    }
    return towDArray
}

//initializing  with som dummy data to avoid undifined erro

const initializingArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let tem = arr[i].length
        for (let j = 0; j < tem; j++) {
            arr[i][j] = 'x'
        }
    }
}

// adding value to 2DArray when user click the button 
const addingValueTo2DArray = (row, col, arr, value) => {
    arr[row][col] = value
}