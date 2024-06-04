// Application server
const express = require('express');
const app = express();
const port = 8000

const bcrypt = require('bcrypt');
const saltRounds = 10;


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

//Make connection to monogDB server
var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/PULP';
mongoose.connect(mongoDB);

const db = mongoose.connection;

db.on('error', (err) => console.log('Error, DB not connected'));
db.on('connected', () => console.log('connected to mongo'));
db.on('disconnected', () => console.log('Mongo is disconnected'));
db.on('open', () => console.log('Connection Made!'));

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'UPDATE','DELETE']
  }));

app.use(express.json());
app.use(express.urlencoded({ extended:true }));


//On main Page
app.get("/", function (req, res) {
    res.send("Hello World!");
});

const User = require('./models/user-model');

app.get("/users", function(req, res) {
    User.find({})
    .then(users => res.json(users)) // Handle success with .then()
    .catch(err => { 
        console.log(err);
        res.status(500).send("An error occurred while fetching questions.");
    });
});
app.get('/user/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json(user);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

app.post("/loginCheck", function(req, res) 
{
    const userId = req.body.id;
    const password = req.body.password;
    User.findById(userId)
    .exec()
    .then(user => {
        if(!user) return res.status(404).send("User not Found.");
        
        if(bcrypt.compareSync(password, user.passwordHash)) res.json(true);
        else res.json(false);
    })
    .catch(err => {
        console.error(err);
        res.status(500).send("An error occurred while fetching the users.");
    });
});

app.post("/signIn", function(req, res) 
{
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const uDate = req.body.uDate;
        
        let passwordHash = bcrypt.hashSync(password, saltRounds);

        let user = new User({ 
            username: username,
            email: email,
            passwordHash: passwordHash,
            createDate: uDate,
        });
    
        user.save();
        res.send("The question has been posted successfully!");
    } catch (error) {
        console.error('Failed to save new question:', error);
        res.status(500).send('An error occurred while saving the question.');
    }
});