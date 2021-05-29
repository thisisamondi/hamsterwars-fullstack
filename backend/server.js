const express = require ('express');
const app = express();
const cors = require('cors');
const path = require('path');

const hamsters = require('./routes/hamsters.js');
const matches = require('./routes/matches.js')
const matchWinners = require('./routes/matchWinners.js')
const winners = require('./routes/winners.js')
const losers = require('./routes/losers.js')

// Heroku uses process.env.PORT

const PORT = process.env.PORT || 1339;

const buildFolder = path.join(__dirname, '../build');

//middleware
app.use((req,res,next) =>{
	console.log(`${req.method} ${req.usl}`, req.params);
	next()
});

app.use (express.json());
app.use(cors());
app.use(express.static(buildFolder))

//routes
app.get('/', (req, res)=>{
	res.send('Hello from server')
});

//REST API
app.use('/hamsters', hamsters)
app.use('/matches', matches)
app.use('/matchWinners', matchWinners)
app.use('/losers', losers)
app.use('/winners', winners)

//SIST: fånga alla övriga request
//för att frontend routing ska fungera
app.get('*',(req, res)=>{
	res.sendFile(path.join(__dirname, '../build/index.html'))
});



// starta severn
app.listen(PORT, ()=> {
	console.log('server is listening on port' + PORT)
});


