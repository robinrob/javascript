#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

logo({"parseInt" : parseInt("1")})

logo({"parseFloat": parseFloat("1.23")})

logo({"isNaN": isNaN("1.23")})

logo({"isFinite": isFinite(Infinity)})

uri = 'http://hello world.html'
uriEnc = encodeURI(uri)
logo({"encodeURI": uriEnc})

logo({"decodeURI": decodeURI(uriEnc)})

// The 'component' methods assume you want the whole thing encoded (since it's only part of a whole URL)
logo({"encodeURIComponent": encodeURIComponent(uri)})

logo({"decodeURIComponent": decodeURIComponent(uriEnc)})

greenw("eval: ")
eval('yellow("Hello World!")')