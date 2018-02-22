const express = require('express');
const router = express.Router();
const articleSchema = require('../models/articles');
const webhoseio = require('webhoseio');
const stopwords = require('stopword');
const sentiment =  require('sentiment');


//Headlines------------------------------------------------------------------------------------------------

router.get('/headlines',async function(req,res){
    // res.send('fetching headlines from database');
    sourceString = req.query.sources;
    sources = sourceString.split(',');
    query = req.query.q;

    try {
        const data = await articleSchema.find({ 'source': { $in: sources }, topic: { $regex: query } });
        res.json(data);
    }
    catch(err){
        console.log('error occured', err);
        res.json(err);
    }
});


// getting the sentiment----------------------------------------------------------------------------------
router.get('/analysis',function(req,res){
    let query= req.query.q;
    const client = webhoseio.config({token: 'd70fa4f9-dee4-4a44-9186-57cbc62e0376'});
    client.query('filterWebContent', {q: query ,language: 'english'})
    .then(output => {
            // console.log(output['posts'][0].text);
            array= output['posts'];
            var sentimentScore=array.reduce((all,item,index) =>{
                all+=findStopwords(item.text.split(' '));
                return all;
                },0)
            res.json(sentimentScore);  
        });
});

function findStopwords(string){ 
    let res = stopwords.removeStopwords(string);
    sentiString= res.join(' ');
    var r1 = sentiment(sentiString);
    return r1.comparative;
}

module.exports = router;
