all: get_ol3 get_closure_library build_ol3 create_ol3_deps

.PHONY: get_ol3
get_ol3: ol3

ol3:
	git submodule update --init

.PHONY: get_closure_library
get_closure_library: closure_library

closure_library:
	git submodule update --init

.PHONY: build_ol3
build_ol3: ol.js ol.css

ol.js: ol3/build/ol.js
	cp ol3/build/ol.js ol.js

ol.css: ol3/build/ol.css
	cp ol3/build/ol.css ol.css

ol3/build/ol.%:
	cd ol3 && ./build.py build

.PHONY: create_ol3_deps
create_ol3_deps: get_ol3 get_closure_library ol-deps.js

ol-deps.js:
	python closure-library/closure/bin/build/depswriter.py \
		--root_with_prefix="ol3/src ../../../ol3/src" --output_file=ol-deps.js
