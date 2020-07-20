const express = require("express");
const app = express();

var faker = require('faker');

app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
//routes

app.get("/", function(req, res){
    res.render("index.ejs", {
        page: "index",
        lastName: faker.name.firstName(),
        phrase: faker.company.catchPhrase(),
        disclaimer: faker.lorem.sentence()
    });
});

app.get("/ltm", function(req, res){
    res.render("ltm.ejs", {
        page: "ltm",
        lastName: faker.name.firstName(),
        phrase: faker.company.catchPhrase(),
        disclaimer: faker.lorem.sentence()
    });
});

app.get("/gtm", function(req, res){
    res.render("gtm.ejs", {
        page: "gtm",
        lastName: faker.name.firstName(),
        phrase: faker.company.catchPhrase(),
        disclaimer: faker.lorem.sentence()
    });
});

app.get("/sources", function(req, res){
    res.render("sources.ejs", {
        page: "sources",
        lastName: faker.name.firstName(),
        phrase: faker.company.catchPhrase(),
        disclaimer: faker.lorem.sentence()
    });
});


//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running");
});