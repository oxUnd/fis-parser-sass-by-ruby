## fis-parser-sass-by-ruby

调用外部命令解析 .sass / .scss 文件，要求 node > 0.12.0

外部依赖

- ruby
- sass

安装 ruby 后，按照 http://sass-lang.com/ 方式安装 sass

```
gem install sass
```

安装插件

```
npm install -g fis-parser-sass-by-ruby
```

### 适用情况

- [x] Mac 64


### 在 fis 中配置使用

```js
fis.config.set('modules.parser.scss', 'sass-by-ruby');
fis.config.set('roadmap.ext.scss', 'css');
```

### 在 fis3 中配置使用

```js
fis.match('*.scss', {
    parser: fis.plugin('sass-by-ruby'),
    rExt: '.css'
});
```