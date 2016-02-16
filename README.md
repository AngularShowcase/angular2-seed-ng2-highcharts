# Introduction

An example of how to integrate [Highcharts](http://www.highcharts.com/) into an Angular 2 application by [Richard Natal - Bigous](https://github.com/Bigous)

Project setup based [angular2-seed](https://github.com/mgechev/angular2-seed.git)

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.

```bash
git clone https://github.com/AngularShowcase/angular2-seed-ng2-highcharts.git
cd angular2-seed-ng2-highcharts
npm install       # or `npm run reinstall` if you get an error
npm start         # start with --env dev
npm run docs      # api document for app
```

## Using the experimental hot loader support

If you want to try the experimental [hot loading](http://blog.mgechev.com/2015/10/26/angular2-hot-loader-hot-loading-tooling/) support use:

```
npm start -- --hot-loader true
```

Note that the hot loader is still in experimental phase of development and there are some missing features. If you experience any issues with it report them at [here](https://github.com/mgechev/angular2-hot-loader/issues).

_Does not rely on any global dependencies._

# Table of Content

- [Introduction](#introduction)
- [How to start](#how-to-start)
  * [Using the experimental hot loader support](#using-the-experimental-hot-loader-support)
- [Table of Content](#table-of-content)
- [Directory Structure](#directory-structure)
- [Configuration](#configuration)
- [How to extend?](#how-to-extend-)
  * [Adding custom libraries](#adding-custom-libraries)
  * [Adding custom gulp task](#adding-custom-gulp-task)
- [Running test](#running-test)
- [Contributing](#contributing)
- [Examples](#examples)
- [Contributors](#contributors)
- [Change Log](#change-log)
- [License](#license)

# Directory Structure

```
.
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── app
│   ├── assets
│   │   ├── img
│   │   │   └── smile.png
│   │   └── main.css
│   ├── bootstrap.ts
│   ├── components
│   │   ├── about
│   │   │   ├── about.html
│   │   │   ├── about.ts
│   │   │   └── about_spec.ts
│   │   ├── app
│   │   │   ├── app.css
│   │   │   ├── app.html
│   │   │   ├── app.ts
│   │   │   └── app_spec.ts
│   │   └── home
│   │       ├── home.css
│   │       ├── home.html
│   │       ├── home.ts
│   │       └── home_spec.ts
│   ├── hot_loader_bootstrap.ts
│   ├── index.html
│   └── services
│       ├── name_list.ts
│       └── name_list_spec.ts
├── appveyor.yml
├── dist
├── gulpfile.ts
├── karma.conf.js
├── package.json
├── test-main.js
├── tools
│   ├── config.ts
│   ├── tasks
│   │   ├── build.assets.dev.ts
│   │   ├── build.assets.prod.ts
│   │   ├── build.bundles.ts
│   │   ├── build.deps.ts
│   │   ├── build.docs.ts
│   │   ├── build.html_css.prod.ts
│   │   ├── build.index.ts
│   │   ├── build.js.dev.ts
│   │   ├── build.js.prod.ts
│   │   ├── build.sass.dev.ts
│   │   ├── build.test.ts
│   │   ├── check.versions.ts
│   │   ├── clean.ts
│   │   ├── karma.start.ts
│   │   ├── npm.ts
│   │   ├── serve.docs.ts
│   │   ├── server.start.ts
│   │   ├── tsd.ts
│   │   ├── tslint.ts
│   │   ├── watch.dev.ts
│   │   ├── watch.serve.ts
│   │   └── watch.test.ts
│   ├── typings
│   ├── utils
│   │   ├── code_change_tools.ts
│   │   ├── server.ts
│   │   ├── tasks_tools.ts
│   │   ├── template_injectables.ts
│   │   └── template_locals.ts
│   └── utils.ts
├── tsconfig.json
├── tsd.json
└── tslint.json
```

# Configuration

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

# How to extend?

## Adding custom libraries

If you want to use your custom libraries:

```bash
npm install my-library --save
vim tools/config.ts
```
Add reference to the installed library in `NPM_DEPENDENCIES`:

```ts
export const NPM_DEPENDENCIES = [
  { src: 'systemjs/dist/system-polyfills.js', dest: LIB_DEST },


  { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true, dest: CSS_DEST }
  // ...
  { src: 'my-library/dist/bundle.js', inject: true, dest: LIB_DEST }
];

```
- `src` - relative to `node_modules`
- `inject` - indicates whether the library should be injected (if not you have to include it manually in `index.html`)
- `dest` - your library will be copied to this location. Used for the production build.

**Do not forget to add a reference to the type definition inside the files where you use your custom library.**

## Adding custom gulp task

In this example we are going to add SASS support to the seed's dev build:

1. Install `gulp-sass` as dependency:

```bash
npm install gulp-sass --save-dev
```

2. Add type definitions:

```bash
# Note: tsd MUST be installed as global
tsd install gulp-sass --save
```

3. Add SASS task at `./tools/tasks/build.sass.dev.ts`:

```ts
import {join} from 'path';
import {APP_SRC} from '../config';

export = function buildSassDev(gulp, plugins, option) {
  return function () {
    return gulp.src(join(APP_SRC, '**', '*.scss'))
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(gulp.dest(APP_SRC));
  };
}
```

4. Add `build.sass.dev` to your dev pipeline:

```ts
// gulpfile.ts
...
// --------------
// Build dev.
gulp.task('build.dev', done =>
  runSequence('clean.dist',
              'tslint',
              'build.sass.dev',
              'build.assets.dev',
              'build.js.dev',
              'build.index',
              done));
...

```

# Running test

```bash
npm test

# Debug - In two different shell windows
npm run build.test.watch      # 1st window
npm run karma.start           # 2nd window
```

# Contributing

Please see the [CONTRIBUTING](https://github.com/mgechev/angular2-seed/blob/master/CONTRIBUTING.md) file for guidelines.

# Examples

Forks of this project demonstrate how to extend and integrate with other libraries:

 - https://github.com/justindujardin/angular2-seed - integration with [ng2-material](https://github.com/justindujardin/ng2-material)
 - https://github.com/AngularShowcase/angular2-sample-app - sample Angular 2 application
 - https://github.com/AngularShowcase/ng2-bootstrap-sbadmin - ng2-bootstrap-sbadmin

# Change Log

You can follow the [Angular 2 change log here](https://github.com/angular/angular/blob/master/CHANGELOG.md).

# License

MIT
