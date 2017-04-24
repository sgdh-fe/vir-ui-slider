import Vir from 'vir'

export default function (options = {}) {
  return Vir({
    data: {
      index: 0,
      lock: false
    },
    events: {
      'click->.prev': 'prev',
      'click->.next': 'next'
    },
    validate: {
      index() {
        if (this.get('lock')) {
          return false
        }
      }
    },
    watch: {
      index(result) {
        let index = result.value
        this.set('lock', true)
        this.$$('ul').animate({
          left: index * -100 + '%'
        }, 500, () => {
          this.set('lock', false)
        })
      }
    },
    methods: {
      index(index) {
        let len = this.get('len')
        return index < 0 ? (len - 1) : (index >= len ? 0 : index)
      },
      run(index) {
        this.set('index', this.index(index))
      },
      prev() {
        this.run(this.get('index') - 1)
      },
      next() {
        this.run(this.get('index') + 1)
      }
    },
    init() {
      let len = this.$$('ul > li').length
      this.set('len', len)
      this.$$('ul').css('width', 100 * len + '%')
      this.$$('ul > li').css('width', 100 / len + '%')
    }
  })
}