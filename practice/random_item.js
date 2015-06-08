#!/usr/bin/env node


function randomItem(items) {
  return items[Math.round(Math.rand * items.length)]
}

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("item: " + randomItem(a))
