import Vir from 'vir'

export default function (options = {}) {
  let {
    wrapperSelector = 'ul',
      slideSelector = 'ul > li',
      nextSelector = '.next',
      prevSelector = '.prev'
  } = options

  return Vir({
    data: {
      index: 0,
      lock: false
    },
    events: {
      ['click->' + nextSelector]: 'next',
      ['click->' + prevSelector]: 'prev'
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
        this.$$(wrapperSelector).animate({
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
      let len = this.$$(slideSelector).length
      this.set('len', len / 1)
      this.$$(wrapperSelector).css('width', 100 * len / 1 + '%')
      this.$$(slideSelector).css('width', 100 / len + '%')
    }
  })
}