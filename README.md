# vir-ui-slider

## 依赖安装

### npm

```sh
npm install Vir
```
### script 标签

```html
<script src="https://unpkg.com/vir"></script>
```

## 安装

### npm

```sh
npm install vir-ui-slider
```

### script 标签

```html
<script src="https://unpkg.com/vir-ui-slider"></script>
<!-- 全局变量 VirUiSlider -->
```

## 基本使用
```html
  <div class="slider">
    <ul>
      <li>
        <!-- lazyload 需要设置 data-src 属性 -->
        <img data-src="n.jpg" src="n.png">
      </li>
      ...
    </ul>
    <a href="javascript:;" class="prev"></a>
    <a href="javascript:;" class="next"></a>
  </div>
```

```js
const Slider = require('vir-ui-slider')(
  /* 默认选项
    {
      lazyload: false,
      wrapperSelector: 'ul',
      slideSelector: 'ul > li',
      nextSelector: '.next',
      prevSelector: '.prev'
    }
  */
)

let slider = new Slider({
  el: '.slider'
})
/* 选项 lazyload 为 true 需要手触发首屏显示
slider.set('index', 0, {
  force: true
})
*/
```

## 例子

<a href="https://codepen.io/cjg/pen/KmNoJY/" target="_blank">code pen</a>

<a href="http://htmlpreview.github.io/?https://github.com/sgdh-fe/vir-ui-slider/blob/master/examples/index.html" target="_blank">base</a>

