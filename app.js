
// creating grid of matrix
let gridCol=20
let gridRow=20

//main grid div selection
let mainGrid = document.querySelector('.main-grid')

//using all method in gridArray.js to make matrix
creatingGrid(gridRow,gridCol,mainGrid)
let arr2D = creatingTowDArray(gridCol, gridRow)
initializingArr(arr2D,gridRow,gridCol,'x')


//selection for display
const info=document.querySelector('.info')
const xCount=document.querySelector('.x-count')
const yCount=document.querySelector('.y-count')


//dispaly info varibels
let teamX = '<i class="far fa-circle x-team"></i>'
let teamY = '<i class="fas fa-times y-team"></i>'
let currentPlayer=true
let xEnterCount=0
let yEnterCount=0


//using event bubble and setting up everything
mainGrid.addEventListener('click',e=>{
 console.log(e)
    if (e.target.localName==='button'){
        if (currentPlayer) {
            
            let col=e.target.id
            let row=e.target.parentElement.id
            //setting up a value
            addingValueTo2DArray( row,col,arr2D, 'xx')
            e.target.innerHTML = teamX
            currentPlayer= false         
            xEnterCount++
            info.innerHTML = teamY
            xCount.innerHTML = xEnterCount.toString()
            e.target.disabled = true
            // cheking the winner
            if(checkWinner(arr2D,'xx')){
                modal.style.display='block'
                winPlayer.innerHTML = `Player ${teamX} Won`
                totalTurns.textContent = `Total Turns :${xEnterCount+yEnterCount}`
            }
           
        } else {
           
            let col = e.target.id
            let row = e.target.parentElement.id
            //setting up a value
            addingValueTo2DArray(row, col, arr2D, 'yy')
            e.target.innerHTML = teamY
            currentPlayer= true
            yEnterCount++
            info.innerHTML = teamX
            yCount.innerHTML = yEnterCount.toString()
            e.target.disabled = true
            // cheking the winner
            if (checkWinner(arr2D, 'yy')){
                modal.style.display = 'block'
                winPlayer.innerHTML = `Player ${teamY} Won`
                totalTurns.textContent = `Total Turns :${xEnterCount + yEnterCount}`
            }
               
            
        }
    }
  
})