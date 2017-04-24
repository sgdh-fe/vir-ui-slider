
/*!
 * vir-ui-slider v1.0.0
 * (c) 2017 cjg
 * Released under the MIT License.
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vir'), require('jquery')) :
	typeof define === 'function' && define.amd ? define(['vir', 'jquery'], factory) :
	(global.VirUiSlider = factory(global.Vir,global.jQuery));
}(this, (function (Vir,jquery) { 'use strict';

Vir = 'default' in Vir ? Vir['default'] : Vir;
jquery = 'default' in jquery ? jquery['default'] : jquery;

var index = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

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
        this.$$('ul').animate({
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
      var len = this.$$('ul > li').length;
      this.set('len', len);
      this.$$('ul').css('width', 100 * len + '%');
      this.$$('ul > li').css('width', 100 / len + '%');
    }
  });
};

return index;

})));
//# sourceMappingURL=index.js.map
