const admin = require("firebase-admin");

let privateKey;

// HEROKU
// heroku.com, configvars -> key = PRIVATE_KEY, VALUE -> All den hemliga infon från private key
if (process.env.PRIVATE_KEY) {
    privateKey = JSON.parse(process.env.PRIVATE_KEY)
} else {
    privateKey = require("./firebase_key.json");
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

//Hämta Databasen
function getDatabase() {
    return admin.firestore()
}

//exportera databasen
module.exports = getDatabase;