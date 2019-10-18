
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


// adding value to 2DArray when user click the button 
const addingValueTo2DArray = (row, col, arr, value) => {
    arr[row][col] = value
}

//taking winnig cordinates and seeting some css

const settingColorToWinningCordinates = (str) => {
    let arr = []

    let splitArr = cordinates.split(',')
    for (let i = 0; i < splitArr.length; i++) {
        arr.push(splitArr[i].split('-'))

    }

    for (let j = 0; j < arr.length; j++) {
        console.log(arr[j])

        let test = document.querySelector(`.grid-row[id='${arr[j][0]}'] .grid-col[id='${arr[j][1]}']`)
        test.style.background = 'black'
    }

}