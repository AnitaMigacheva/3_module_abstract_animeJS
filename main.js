let propsAnim = anime({
    targets: '.red.red1',
    translateX: 290,
    rotate: [12, 12],
    direction: 'alternate',
    loop: true,
    autoplay: false,
    easing: 'spring(1, 80, 10, 0)'
  })

let rect = document.getElementById('redRect1')
rect.onclick = propsAnim.play

let path = anime.path('path')
let svgMotion = anime({
  targets: '.black.black1',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 15000,
  autoplay: false,
  loop: true
})

let blackRect1 = document.getElementById('blackRect1')
blackRect1.onclick = svgMotion.play

let keyframes = anime({
  targets: '.white.white2',
  rotate: [12, 12],
  keyframes: [
    {translateY: -40},
    {translateX: 250},
    {translateY: 40},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
  loop: true,
  autoplay: false
});

let whiteRect2 = document.getElementById('whiteRect2')
whiteRect2.onclick = keyframes.play

//
// let staggering = anime({
//   targets: '.black.black2',
//   scale: [
//     {value: .1, easing: 'easeOutSine', duration: 500},
//     {value: 1, easing: 'easeInOutQuad', duration: 1200}
//   ],
//   delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
//   loop: true,
//   rotate: [12, 12],
//   autoplay: false
// });
//
// let blackRect2 = document.getElementById('blackRect2')
// blackRect2.onclick = staggering.play
//
//
// let move = anime({
//   targets: '.red.red2',
//   translateX: 970,
//   easing: function(el) {
//     return el.getAttribute('data-ease');
//   },
//   duration: 1000,
//   loop: true,
//   autoplay: false
// })
//
//
// let redRect2 = document.getElementById('redRect2')
// redRect2.onclick = move.play

let steps2 = anime({
  targets: '.black.black2',
  translateX: 350,
  direction: 'alternate',
  loop: true,
  background: '#ffffff',
  rotate: [12, 20],
  autoplay: false,
  easing: 'steps(5)'
})

let blackRect2 = document.getElementById('blackRect2')
blackRect2.onclick = steps2.play


let steps = anime({
  targets: '.grey.grey1',
  translateX: 250,
  direction: 'alternate',
  loop: true,
  background: '#000000',
  rotate: [12, 382],
  autoplay: false,
  easing: 'steps(5)'
})

let greyRect1 = document.getElementById('greyRect1')
greyRect1.onclick = steps.play
