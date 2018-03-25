const express = require('express');
const https = require('https');
const MD5 = require("crypto-js/md5");
const symptoms = require('./symptoms');
const fs = require('fs');
const { spawn } = require('child_process');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
<<<<<<< HEAD

const hcc_codes = require('./hcc_codes');
=======
>>>>>>> origin/Homepage

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

<<<<<<< HEAD
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im5pa2hpbGVzaDIwMTBAbGl2ZS5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjMwNjkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMTgtMDMtMjQiLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTUyMTk0ODExMiwibmJmIjoxNTIxOTQwOTEyfQ.zr0WxevLpk3RJk4DMn4qMxwsnxMCqEs7JX2FbGMif_U";

=======
>>>>>>> origin/Homepage
// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/hcciq', (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;
var HCCSchema = new Schema({
	  doctor: String,
    timeOfVisit: Date,
    patient: String,
		imgURL: String,
		matches: [String],
    cost: String,
    note: String,
    code: [{
			code: String,
			score: Number
		}],
    symptoms: [String],
    diagnosis: [{
      name: String,
      probability: Number
    }]
});

var HCC = mongoose.model('HCCModel', HCCSchema);

function getDiagnosis(ids, callback) {
	const options = {
		hostname: 'sandbox-healthservice.priaid.ch',
		path: '/diagnosis?token=' + token + '&language=en-gb&format=json',
		method: 'GET'
	};

	https.get(options, (res) => {
		var str = ""
		res.on('data', (d) => {
			str += d;
		});
	
		res.on('end', (e) => {
			callback(JSON.parse(str));
		});
	});
}

//getSymptoms();
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
	names = [];
	ids = [];
	matches = [];
	note.split('.').forEach((sentence) => {
		symptoms.forEach((symptom) => {
			if('Words' in symptom) {
				var match = true;
				var newMatches = [];
				symptom.Words.split(' ').forEach((word) => {
					newMatches.push(word);
					if(! sentence.trim().toLowerCase().includes(word.toLowerCase())) {
						match = false;
					}
				});
				if(match && ! arr.includes(symptom.Name)) {
					names.push(symptom.Name);
					ids.push(symptoms.ID);
					matches.push(newMatches);
				}
			} else {
				var match = true;
				var newMatches = [];
				symptom.Name.split(' ').forEach((word) => {
					newMatches.push(word);
					if(! sentence.trim().toLowerCase().includes(word.toLowerCase())) {
						match = false;
					}
				});
				if(match && ! arr.includes(symptom.Name)) {
					names.push(symptom.Name);
					ids.push(symptoms.ID);
					matches.push(newMatches);
				}
			}
		});
	});
	return [names, ids, matches];
}

function beerMeTheCodes(diagnoses) {
	arr = [];
	hcc_codes.forEach((code) => {
		prob = 1;
		diagnoses.forEach((diagnosis) => {
			if(code.diagnoses.includes(diagnosis.name.toLowerCase())) {
				prob *= diagnosis.probability;
			}
		});
		arr.push([diagnosis.name.toLowerCase(), prob]);
	});
	arr.sort((f, s) => {
		return s[1] - f[1];
	});
	return arr.slice(0, 5);
}

app.get('/', (req, res) => {
  
});

app.post('/note', (req, res) => {
	var symptoms = extrapolateSymptoms(req.body.note);
	var symptomsArray = symptoms[0];
	var diagnosis = [
		{
			name: "Heart Attack",
			probability: 0.987654321
		},
		{
			name: "Obesity",
			probability: 0.768654372
		}
	]; // TODO: Generate diagnosis from API, should be an array of objects of form {name: String, probability: Number}
	getDiagnosis(symptoms[1], (diagnosis) => {
		fs.writeFile("/tmp/java_nlp_input", diagnosis.split('\n'), function(err) {
			if(err) {
					return console.log(err);
			}
		});
		// const ls = spawn('java', ['YIKES_@MATT_MESERVE_NLP_FILENAME.java', '/tmp/java_nlp_input']);
		// var nlpData = []; // ONCE MATT'S CODE WORKS
		// ls.stdout.on('data', (data) => {
		// 	data = data.split(',');
		// 	data = {
		// 		code: data[0],
		// 		score: data[1]
		// 	}
		// 	nlpData.push(data);
		// });
		// ls.on('close', () => {
			cost = (Math.random() * 90000 + 10000).toFixed(2); // TODO: Actually generate a real cost
			var nlpData = beerMeTheCodes(diagnosis);
			var obj = {
				doctor: req.body.doctor,
				timeOfVisit: Date.now(),
				patient: req.body.patient,
				imgURL: req.body.img,
				matches: symptoms[2],
				cost: cost,
				note: req.body.note,
				code: nlpData,
				symptoms: symptomsArray,
				diagnosis: diagnosis
			}
			var h = new HCC(obj);
			h.save((error) => {
				if(error) res.send(error);
				else res.send(obj);
			});
			res.send(obj);
		//});
	});
});

app.get('/getRequests/:doctor', (req, res) => {
	HCC.find({doctor: req.params.doctor}).sort({ timeOfVisit: -1 }).exec( (error, hccs) => {
    res.send(hccs);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));