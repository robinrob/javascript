#!/usr/bin/env node

require(process.env.JS_LIB_HOME + '/log')

var json = '{ "dog" : { "name" : "misty", "age": 1 } }'

var obj = JSON.parse(json)

console.log("obj.dog.name: " + obj.dog.name)

var jsonObj = {
  dog : {
    name: "misty",
    age: 1
  }
}

var str = JSON.stringify(jsonObj)

console.log("str: " + str)
