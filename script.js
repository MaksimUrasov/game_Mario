
const mario = document.getElementById('mario')
const flower = document.getElementById('flower')

document.addEventListener('keydown', function(event) {
  jumpMov()
})

function jumpMov() {
  mario.classList.add('jump')
  // console.log('adding jump class')
  setTimeout( function() {
        mario.classList.remove('jump')
        // console.log('removing class jump');
      }, 500)
  }

let isAlive = setInterval ( function() {
  let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue('top'))
  let flowerLeft = parseInt(window.getComputedStyle(flower).getPropertyValue('left'))

  if (flowerLeft < 50 && flowerLeft > 0 && marioTop >= 140 ) {
    // alert('Game over. Press ok to restart')
    fallDownFunction()

  }
}, 10)

function fallDownFunction () {
  mario.classList.add('fallDown')
  setTimeout( function() {
  mario.classList.remove('fallDown')
}, 1000)
console.log('remove fall down class');
  }

  

