const express = require('express');
const https = require('https');
const MD5 = require("crypto-js/md5");
const symptoms = require('./symptoms');

const app = express();
const port = process.env.PORT || 5000;

getSymptoms();
function getSymptoms() {
	const options = {
	  hostname: 'https://sandbox-healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im5pa2hpbGVzaDIwMTBAbGl2ZS5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjMwNjkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMTgtMDMtMjQiLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTUyMTg2NjQ2MiwibmJmIjoxNTIxODU5MjYyfQ.8rbHyhAbYX-vXYlR2ZPylBahHpe0OsabgACfrzesGGM&language=en-gb&format=json',
	  method: 'GET',
	};

	// const req = https.request(options, (res) => {
	//   console.log('statusCode:', res.statusCode);
	//   console.log('headers:', res.headers);

	//   res.on('data', (d) => {
	//     process.stdout.write(d);
	//   });
	// });

	// req.on('error', (e) => {
	//   console.error(e);
	// });
	// req.end();
	https.get('https://sandbox-healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im5pa2hpbGVzaDIwMTBAbGl2ZS5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjMwNjkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMTgtMDMtMjQiLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTUyMTg2NjQ2MiwibmJmIjoxNTIxODU5MjYyfQ.8rbHyhAbYX-vXYlR2ZPylBahHpe0OsabgACfrzesGGM&language=en-gb&format=json', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});
}

function getToken() {
	const hashed = MD5("https://sandbox-authservice.priaid.ch/login", "c3CGb68Rsk5ZSj9q7");
	
	const authString = 'Bearer nikhilesh2010@live.com:' + hashed;
	console.log("it is " + authString);
	const options = {
	  hostname: 'sandbox-authservice.priaid.ch',
	  path: '/login',
	  method: 'POST',
	  headers: {
	  	Authorization: Buffer.from(authString).toString('base64'),
	  	'Content-Type': 'application/json'
	  }
	};

	const req = https.request(options, (res) => {
	  console.log('statusCode:', res.statusCode);
	  console.log('headers:', res.headers);

	  res.on('data', (d) => {
	    process.stdout.write(d);
	  });
	});

	req.on('error', (e) => {
	  console.error(e);
	});
	req.end();
}

function extrapolateSymptoms(note) {
	arr = [];
	note.split('.').forEach((sentence) => {
		symptoms.forEach((symptom) => {
			if('Words' in symptom) {
				var match = true;
				symptom.Words.split(' ').forEach((word) => {
					if(! sentence.trim().toLowerCase().includes(word.toLowerCase())) {
						match = false;
					}
				});
				if(match && ! arr.includes(symptom)) {
					arr.push(symptom);
				}
			} else {
				var match = true;
				symptom.Name.split(' ').forEach((word) => {
					if(! sentence.trim().toLowerCase().includes(word.toLowerCase())) {
						match = false;
					}
				});
				if(match && ! arr.includes(symptom)) {
					arr.push(symptom);
				}
			}
		});
	});
	return arr;
}

app.get('/', (req, res) => {
  
});

app.listen(port, () => console.log(`Listening on port ${port}`));