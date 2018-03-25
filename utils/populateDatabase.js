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
  patient: "Matt Meserve",
  imgURL: "http://niksingh.net/img/matt.jpg",
  matches: ["weak", "sweat", "vomit"],
  cost: "100.01",
  note: "His palms are sweaty, knees weak, arms are heavy. There's vomit on his sweater already, mom's spaghetti. He's nervous, but on the surface he looks calm and ready. To drop bombs, but he keeps on forgetting What he wrote down. the whole crowd goes so loud. He opens his mouth, but the words won't come out. He's chokin, how? Everybody's jokin now",
  symptoms: [ 'Sweating', 'weakness', 'Vomiting' ],
  diagnosis: [{
    name: "Anxiety Attack",
    probability: 99.09
  },
  {
    name: "Alcohol Poisoning",
    probability: 89.27
  }]
});

h.save((error) => {
  if (error) console.log(error);
  console.log("Success");
});