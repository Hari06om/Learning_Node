require('dotenv').config();
const express = require('express');

const app = express();

const port = 4000

app.get("/", (req, res) => {
     ("Hello World ");
}  );

app.get("/twitter", (req, res) => {
     res.send("Welcome to Twitter");
} );
app.get("/login", (req, res) => {
     res.send('<h1> Login Page this side hari om verma </h1>');
} );
app.listen(process.env.PORT, () => {
     console.log(`App is listening at http://localhost:${port}`);
});
 