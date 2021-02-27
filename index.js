
var unirest = require("unirest");

var req = unirest("GET", "https://deezerdevs-deezer.p.rapidapi.com/search");

req.query({
	"q": "eminem"
});

req.headers({
	"x-rapidapi-key": "6b53c05b24msh8cf9f0c519bf9ccp10324ejsn97e34d83dbe7",
	"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

