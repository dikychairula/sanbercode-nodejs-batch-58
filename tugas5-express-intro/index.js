const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

//middleware
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

//root page
app.get('/', (req, res) => {
    res.send('root page');
});

//localhost:3000/hello
app.get('/hello', (req, res) => {
    res.send(
        {
            "message" : "success fetch message",
            "data" : "Hello World!"
        }
    );
});

//localhost:3000/user
app.get('/user', (req, res) => {
    res.send(
        {
            "message" : "success fetch user",
            "data" : {
                "id" : 1,
                "name" : "Budi",
                "username" : "budidiu",
                "email" : "budidu@mail.com"
            }
        }
    );
});

//localhost3000/home.html
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`this server is running at <http://localhost>:${port}`);
});