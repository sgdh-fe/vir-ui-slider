import Vir from 'vir'
import $ from 'jquery'

export default function (options) {
  const App = Vir()
  const ctx = this

  let {
    selector,
    navSelector = 'li',
    currentClass = 'cur'
  } = options



  const app = new App({
    data: {
      lock: false,
      index: 0
    },
    el: selector,
    events: {
      ['mouseenter->' + navSelector]: 'enter',
      ['mouseleave->' + navSelector]: 'leave'
    },
    watch: {
      index(result) {
        let old = result.old
        let index = result.value
        this.$$(navSelector).eq(old).removeClass(currentClass)
        this.$$(navSelector).eq(index).addClass(currentClass)
      }
    },
    methods: {
      enter(event) {
        let $el = $(event.currentTarget)
        let index = $el.attr('data-index') || $el.index()
        this.set('t', setTimeout(() => {
          ctx.set('index', index)
          this.set('index', index)
        }, 200))
      },
      leave() {
        clearTimeout(this.get('t'))
      }
    }
  })

  // 双向
  ctx.$watch('index', (result) => {
    app.set('index', result.value)
  })

}