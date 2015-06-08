#!/usr/bin/env node

params={param1: "val1", param2: "val2", param3: "val3"}

url = "http://mrrobinsmith.com/?param0=val0"
for (key in params) {
	url += "&" + key + "=" + params[key]
}

console.log(encodeURI(url))