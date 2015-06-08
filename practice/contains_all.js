str = 'Robin smith is BATMAN'
keywords = ['ROBIN', 'Smith', 'batman']

console.log("containsAll: " + strContainsAll(str, keywords))

function strContainsAll(str, keywords) {
	var containsAll = true
	for (var i = 0; i < keywords.length && containsAll; ++i) { 
	    containsAll = str.toLowerCase().indexOf(keywords[i].toLowerCase()) > -1
	}
	return containsAll
}