{!REQUIRESCRIPT('/soap/ajax/29.0/connection.js')}
{!REQUIRESCRIPT('/soap/ajax/29.0/apex.js')}


/* From email addresses */
var crServiceDesk = 'servicedesk@cloudreach.co.uk'

var ponGoogleServiceDesk = 'servicedesk.google@pon.com'


/* Email templates (uncommented = implemented) */
// var ponAddLogo = '00X20000001q1Bi'
//
// var ponChangeLogo = '00X20000001q1Az'

var ponAddGroupManager = '00X20000001q1BJ'
//
var ponCreateGroup = '00X20000001q1Ak'
//
// var ponRenameGroup = '00X20000001q1B9'
//
// var ponDeleteGroup = '00X20000001q1BE'
//
// var ponCreateAccount = '00X20000001q1Au'
//
// var ponBlockAccount = '00X20000001q1Bd'
//
// var ponResetPassword = '00X20000001q1Ap'
//
var ponCreateCalendar = '00X20000001q1BO'
//
// var ponRenameCalendar = '00X20000001q1BT'
//
// var ponDeleteCalendar = '00X20000001q1BY'
//
var ponDocTransfer = '00X20000001q1Af'
//
// var ponReceivingSpam = '00X20000001q1Bn'
//
// var ponSpamLabelling = '00X20000001q1Bs'
//
// var ponResetMobileDevice = '00X20000001q1B4'
//
var ponDefault = '00X20000001q1N1'

var defaultTemplate = '00X20000001q1CM'

var rfcStart = '00X20000001q1xR'

var rfcEnd = '00X20000001q1xR'



/* Logic! */

// Fetch latest case email
var result = sforce.connection.query("SELECT Id FROM EmailMessage WHERE ParentId = \'{!Case.Id}\' ORDER BY CreatedDate LIMIT 1")

var latest_email = result.getArray("records")[0]


// Logic switches
if ("{!Case.Account}" === "Pon") {
	var fromAddress = ponGoogleServiceDesk
	
	if (strContainsAll("{!Case.Subject}", ["add", "group", "manager"])) {
		console.log("PON - Add Group Manager") 
		var template = ponAddGroupManager
	}
	else if (strContainsAll("{!Case.Subject}", ["create", "group"])) {
		console.log("PON - New Group") 
		var template = ponCreateGroup
	}
	else if (strContainsAll("{!Case.Subject}", ["create", "resource", "calendar"])) {
		console.log("PON - Create Calendar") 
		var template = ponCreateCalendar
	}
	if (strContainsAll("{!Case.Subject}", ["transfer", "documents"])) {
		console.log("PON - Documents Transfer") 
		var template = ponDocTransfer
	}
	else {
		console.log("PON - Default")
		var template = ponDefault
	}
}
else if (strContainsAll("{!Case.Subject}", ["rfc"])) {
	console.log("RFC")
	var template = rfcTemplate
}
else {
	console.log("Default")
	fromAddress = crServiceDesk
	var template = defaultTemplate
}

// New page URL 
var baseURL = "/email/author/emailauthor.jsp?"
var subject = "Re: {!Case.Subject} [ {!Case.Thread_Id} ]"

var params={"retURL": "/{!Case.Id}", "p6": subject, "template_id": template, "p26": fromAddress, "p2_lkid": "{!Contact.Id}"} 

for (key in params) { 
baseURL += "&" + key + "=" + params[key] 
} 

location.replace(encodeURI(baseURL + params.join))


// New page URL
//var baseURL = '/email/author/emailauthor.jsp?retURL=/{!Case.Id}&rtype=003&p3_lkid={!Case.Id}&p2_lkid={!Contact.Id}'
//var baseURL = '/email/author/emailauthor.jsp?retURL=/{!Case.Id}'

// location.replace("_ui/core/email/author/EmailAuthor?" + latest_email.Id + "&replyToAll=1&retURL=/{!Case.Id}")


// Useful functions
function strContainsAll(str, keywords) {
	var containsAll = true
	for (var i = 0; i < keywords.length && containsAll; ++i) { 
	    containsAll = str.toLowerCase().indexOf(keywords[i].toLowerCase()) > -1
	}
	return containsAll
}