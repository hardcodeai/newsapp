// getting the dependencies------------------------------------------------------------------------------
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const request = require('request');
const links = require('./routes/links');
const config = require('./config/database');
const articleSchema = require('./models/articles');
var CronJob = require('cron').CronJob;


//connection to the database-----------------------------------------------------------------------------
mongoose.connect(config.link);
mongoose.connection.on('connected', function(){
    console.log('connected to database');
});


//setting up the app-------------------------------------------------------------------------------------
var app = express();
app.use(cors());

//setup paths----------------------------------------------------------------------------------------
app.use('/', links);


//middleware integration----------------------------------------------------------------------------------
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));  // middleware for serving the assets

//application server-------------------------------------------------------------------------------------
app.listen(3000, function(){
console.log('Server started on port 3000');
});

process.on('UnhandledPromiseRejectionWarning', function (err) {
    console.log(err);
});


//cron fetching the data for the headlines--------------------------------------------------------------

new CronJob('00 */2 * * * *', function() {
console.log('fetching news')
//API request---------------------------------------------------------------------------------------------
const options = {  
    url:'https://newsapi.org/v2/everything?language=en&sources=cnn,abc-news,bbc-news,bbc-sport,espn,business-insider,cnbc&apiKey=edb738ea05fa4b39b2f0958b54e4115c' ,
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
    }
};
 let articles;
request(options, function(err, res, body) {  
    if(err){
        console.log('ERROR');
    }else{
    let json = JSON.parse(body);
    articles=json.articles;
    articles.forEach(element =>{ 
        saveToDb(element);
        console.log(element);
    });
    }
});

//saving articles to the database------------------------------------------------------------------------
 
let saveToDb= function(attr){
    let tempSource = attr.source.name;
    let tempTopic = attr.title;
    let tempDesc = attr.description;
    let tempImURL = attr.urlToImage;
    let tempNewsURL = attr.url;

    let newArticle = new articleSchema({
         source: tempSource,
         topic: tempTopic,
         description: tempDesc,
         imageURL : tempImURL,
         newsURL : tempNewsURL
    });
    
    newArticle.save((err)=>{
        if(err){
            console.log('error occured');
        }
    }); 
}   

}, null, true, 'Asia/Kolkata');