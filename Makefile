.PHONY: all dev

all:
	./node_modules/.bin/vue-cli-service build
	cp ./dist/js/app.*.js dist.png

dev:
	./node_modules/.bin/vue-cli-service serve
