# generator-gulp-react-systemjs-es6

> [Yeoman](http://yeoman.io) generator for an ES6 project consisting of:

 * React
 * Babel
 * SystemJS
 * JSPM
 * Sass
 * Gulp
 * io.js
 * Express

## Instructions

```
npm install -g yo                             # Install Yeoman, if you don't have it yet
npm install -g generator-react-systemjs-es6   # Then install this generator
```

Then:

```
gulp watch
```

Gulp will watch for JS and SCSS changes and recompile , but it currently won't live-reload. I'd like to keep that
optional but I can add this if anyone wants? Or feel free to submit a pull request!

## Warning

I decided to take out Babel transpilation on the server-side and use built-in ES6 support in io.js. But enabling
"in progress" features, such as arrow functions, is ["highly discouraged unless for testing purposes"](https://iojs.org/en/es6.html).

## See also

This generator is based on an [ES6 starter template](https://github.com/poshaughnessy/es6-react-jspm-starter-template) I made. I also created a couple of other versions:

* [Browserify version](https://github.com/poshaughnessy/es6-react-starter-template)
* [Isomorphic Browserify version](https://github.com/poshaughnessy/es6-react-isomorphic-starter-template)

## License

MIT
