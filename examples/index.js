var Slider = VirUiSlider({
  lazyload: true,
  wrapperSelector: '.a',
  slideSelector: '.a > li'
})
var slider = new Slider({
  el: '.slider'
})

slider.set('index', 0, {
  force: true
})