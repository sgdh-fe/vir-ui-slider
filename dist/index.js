
/*!
 * vir-ui-slider v1.1.0
 * (c) 2017 cjg
 * Released under the MIT License.
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vir')) :
	typeof define === 'function' && define.amd ? define(['vir'], factory) :
	(global.VirUiSlider = factory(global.Vir));
}(this, (function (Vir) { 'use strict';

Vir = 'default' in Vir ? Vir['default'] : Vir;

var index = function () {
  var _events;

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$wrapperSelec = options.wrapperSelector,
      wrapperSelector = _options$wrapperSelec === undefined ? 'ul' : _options$wrapperSelec,
      _options$slideSelecto = options.slideSelector,
      slideSelector = _options$slideSelecto === undefined ? 'ul > li' : _options$slideSelecto,
      _options$nextSelector = options.nextSelector,
      nextSelector = _options$nextSelector === undefined ? '.next' : _options$nextSelector,
      _options$prevSelector = options.prevSelector,
      prevSelector = _options$prevSelector === undefined ? '.prev' : _options$prevSelector;


  return Vir({
    data: {
      index: 0,
      lock: false
    },
    events: (_events = {}, _events['click->' + nextSelector] = 'next', _events['click->' + prevSelector] = 'prev', _events),
    validate: {
      index: function index() {
        if (this.get('lock')) {
          return false;
        }
      }
    },
    watch: {
      index: function index(result) {
        var _this = this;

        var index = result.value;
        this.set('lock', true);
        this.$$(wrapperSelector).animate({
          left: index * -100 + '%'
        }, 500, function () {
          _this.set('lock', false);
        });
      }
    },
    methods: {
      index: function index(_index) {
        var len = this.get('len');
        return _index < 0 ? len - 1 : _index >= len ? 0 : _index;
      },
      run: function run(index) {
        this.set('index', this.index(index));
      },
      prev: function prev() {
        this.run(this.get('index') - 1);
      },
      next: function next() {
        this.run(this.get('index') + 1);
      }
    },
    init: function init() {
      var len = this.$$(slideSelector).length;
      this.set('len', len / 1);
      this.$$(wrapperSelector).css('width', 100 * len / 1 + '%');
      this.$$(slideSelector).css('width', 100 / len + '%');
    }
  });
};

return index;

})));
//# sourceMappingURL=index.js.map
