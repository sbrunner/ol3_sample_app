# Sample OL3 Application

This repository includes a sample OL3 application demonstrating how to work
with OL3.

## View Application

To view the application in your browser:

1. Clone this repository:

   ```
   $ git clone https://github.com/elemoine/ol3_sample_app.git
   ```

1. Run make:

   ```
   $ make
   ```

   `make`  downloads the OL3 and Closure libraries (which are submodules of
   this repository), and builds the OL3 library.

1. Point your browser to the `index.html` or `index-prod.html`.

## Explanations

The `make` command creates `ol.js`. `ol.js` includes the OL3 code, compiled
with the Closure compiler.

The `index-prod.html` page uses `ol.js`. This page does not load the Closure
library at all. `ol.js` does include Closure code, but `ol.js` is
self-contained and doesn't require loading the Closure library.

The `index.html` page runs the OL3 library in debug mode. In debug mode scripts
are loaded individually, by injecting script tags into the page. The script
injection is performed by the Closure library. The `index.html` page
loads four scripts:

* `base.js` - The Closure library's base script. Responsible
  for injecting the required Closure and OL3 scripts.
* `ol-deps.js` - The OL3 deps file. Declares the OL3 dependencies as
  [documented](https://developers.google.com/closure/library/docs/depswriter)
  on Google Developers.
* `app-require.js` - App-specific file that defines the OL3 packages the
  application requires.
* `app.js` - The application code. `index-prod.html` also loads that
  file.
