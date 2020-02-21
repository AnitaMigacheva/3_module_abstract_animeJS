let controller = new ScrollMagic.Controller()

// EXAMPLE 1
let box = document.querySelector('.box')
let boxAnimation = anime({
  targets: box,
  translateX: 500,
  rotate: [0, 360],
  duration: 1500,
  autoplay: false
})
// triggerHook:
//   'onEnter' (1), 'onCenter' (0.5), 'onLeave' (0)
//   или числом от 1 до 0
new ScrollMagic.Scene({
  triggerElement: box
})

.addTo(controller)
.on('enter', () => boxAnimation.play())

//EXAMPLE 2
let box2 = document.querySelector('#box-2')
let box2Animation = anime({
  targets: box2,
  translateX: '80vw',
  rotate: '+=10turn',
  easing: 'linear',
  autoplay: false
})

let section3 = document.querySelector('#section-3')
new ScrollMagic.Scene({
  triggerElement: section3,
  duration: section3.getBoundingClientRect().height
})
.addTo(controller)
.setPin(box2)
.on('progress', e => {
  box2Animation.seek(box2Animation.duration * e.progress)
})


// EXAMPLE 3

let lastSection = document.getElementById('last-section')
let loader = document.querySelector('.loader')
let circlesWrapper = document.querySelector('.circles-wrapper ')

let loadingScene = new ScrollMagic.Scene({
  triggerElement: lastSection,
  tridderHook: 'onEnter'
})

.addTo(controller)
.on('enter', () => {
  setTimeout(addCircles, 200, 20)

})

function addCircles(amount) {
  let count = 0
  while (amount > count) {
    let newDiv = document.createElement('circle')
    newDiv.classList.add('circle')
    newDiv.style.background = getRandomColor()
    circlesWrapper.append(newDiv)
    count += 1
  }
}


function getRandomColor() {
  return `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
}
