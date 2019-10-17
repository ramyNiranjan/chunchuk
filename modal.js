
//select for modal
const modal = document.querySelector('.model-wrapper')
const close = document.querySelector('.close')
const winPlayer = document.querySelector('.win-player')
const totalTurns = document.querySelector('.total-turns')
const refresh = document.querySelector('.refresh')

//modal events
close.addEventListener('click', e => {
    modal.style.display = 'none'
    document.location.reload(true)
})
modal.addEventListener('click', e => {
    
    modal.style.display = 'none'
    document.location.reload(true)
})
refresh.addEventListener('click', e => {
    modal.style.display = 'none'
    document.location.reload(true)
})