const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/hcciq', (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.dropDatabase()

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
      description: String,
			score: Number
		}],
    symptoms: [String],
    diagnosis: [{
      name: String,
      probability: Number
    }]
});

var HCC = mongoose.model('HCCModel', HCCSchema);

var h = new HCC({
  doctor: "DrPhil",
  timeOfVisit: Date.now(),
  patient: "Jane Doe",
  imgURL: "http://niksingh.net/img/Jane.jpg",
  matches: ["sore", "throat", "headaches"],
  cost: "Low",
  note: "Paitent has a sore throat. Patient also experiences headaches",
  symptoms: [ 'Sore throat', 'Headache' ],
  diagnosis: [{
    name: "Nasopharyngitis",
    probability: 90
  },
  {
    name: "Influenza",
    probability: 64
  },
  {
    name: "Common cold",
    probability: 58
  },
  {
    name: "Infectious mononucleosis",
    probability: 10.9
  }
  ]
});

h.save((error) => {
  if (error) console.log(error);
  console.log("Success");
});

var obj = {
      doctor: "DrPhil",
      timeOfVisit: Date.now(),
      patient: "John Doe",
      imgURL: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
      matches: ["type", "2", "diabetes", "chronic", "obstructive", "lung", "disease", "pneumonia", "infection", "cigarettes", "smoking", "copd"],
      cost: "High",
      note: "Patient has chronic obstructive lung disease and pneumonia infection. Patient has copd. Has been smoking cigarettes",
      code: [{
        code: "J44.0",
        description: "Has current pneumonia infection (and has COPD)",
        score: 0.563
      },
      {
        code: "J44.9",
        description: "Patient has copd",
        score: 0.368
      },
      {
        code: "Z57.22",
        description: "Smokes cigarettes, tobacco",
        score: 0.256
      }],
      symptoms: ["Shortness of breath", "Fatigue", "Lack of energy", "Blueness of the lips"],
      diagnosis: [{
        name: "Chronic obstructive lung disease",
        probability: 80,
      }]
    };
    var h = new HCC(obj);
    h.save((error) => {
     if (error) console.log(error);
    console.log("Success");
    })
    return;
