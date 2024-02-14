<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Mode

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Fréchet][frechet-distribution] distribution [mode][mode].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [mode][mode] for a [Fréchet][frechet-distribution] random variable shape `α > 0`, scale `s > 0`, and location parameter `m` is

<!-- <equation class="equation" label="eq:frechet_mode" align="center" raw="\operatorname{mode} = m+s\left({\frac{\alpha}{1+\alpha }}\right)^{{1/\alpha }}" alt="Mode for a Fréchet distribution."> -->

```math
\mathop{\mathrm{mode}} = m+s\left({\frac{\alpha}{1+\alpha }}\right)^{{1/\alpha }}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{mode} = m+s\left({\frac{\alpha}{1+\alpha }}\right)^{{1/\alpha }}" data-equation="eq:frechet_mode">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/frechet/mode/docs/img/equation_frechet_mode.svg" alt="Mode for a Fréchet distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
mode = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-mode@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-dists-frechet-mode/tags). For example,

```javascript
mode = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-mode@v0.2.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var mode = require( 'path/to/vendor/umd/stats-base-dists-frechet-mode/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-mode@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.mode;
})();
</script>
```

#### mode( alpha, s, m )

Returns the [mode][mode] for a [Fréchet][frechet-distribution] distribution with shape `alpha > 0`, scale `s > 0`, and location parameter `m`.

```javascript
var y = mode( 2.0, 1.0, 1.0 );
// returns ~1.816

y = mode( 1.0, 2.0, -3.0 );
// returns -2.0

y = mode( 1.0, 1.0, 2.0 );
// returns ~2.5
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mode( NaN, 1.0, -2.0 );
// returns NaN

y = mode( 1.0, NaN, -2.0 );
// returns NaN

y = mode( 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = mode( 0.0, 3.0, 2.0 );
// returns NaN

y = mode( 0.0, -1.0, 2.0 );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = mode( 1.0, 0.0, 2.0 );
// returns NaN

y = mode( 1.0, -1.0, 2.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-frechet-mode@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var alpha;
var m;
var s;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*20.0 ) + EPS;
    s = ( randu()*20.0 ) + EPS;
    m = ( randu()*20.0 ) - 40.0;
    y = mode( alpha, s, m );
    console.log( 'α: %d, s: %d, m: %d, mode(X;α,s,m): %d', alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-frechet-mode.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-frechet-mode

[test-image]: https://github.com/stdlib-js/stats-base-dists-frechet-mode/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-frechet-mode/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-frechet-mode/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-frechet-mode?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-frechet-mode.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-frechet-mode/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-frechet-mode/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-frechet-mode/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-frechet-mode/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-frechet-mode/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-frechet-mode/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-frechet-mode/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-frechet-mode/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-frechet-mode/main/LICENSE

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

</section>

<!-- /.links -->
