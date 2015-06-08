{!REQUIRESCRIPT("/soap/ajax/29.0/connection.js")}
{!REQUIRESCRIPT("/soap/ajax/29.0/apex.js")}


if ("{!Case.Account}" === "Pon") {
	subject = "Hello PON!"
}
else if ("{!Case.Account}" === "Cloudreach") {
	subject = "Hello Cloudreach!"
}
else if ("{!Case.Account}" === "Exeter Family Friendly") {
	subject = "Hello EFF!"
}
else {
	subject = "Re: {!Case.Subject} [ {!Case.Thread_Id} ]"	
}


var result = sforce.connection.query("SELECT Id FROM EmailMessage WHERE ParentId = \'{!Case.Id}\' ORDER BY CreatedDate LIMIT 1")

var latest_email = result.getArray("records")[0]


// New page URL
var baseURL = "/email/author/emailauthor.jsp?retURL=/{!Case.Id}"

params={"email_id": latest_email.Id, "p6": subject, "replyToAll": 1}

for (key in params) {
	baseURL += "&" + key + "=" + params[key]
}

location.replace(encodeURI(baseURL + params.join))