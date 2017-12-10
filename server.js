const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');

const port = process.env.PORT;

const app = express();

app.use(express.static(path.join(__dirname , 'dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api',api);

app.get('*',(req,res)=>{
    console.log("Not api request");
    res.sendFile(path.join('dist/index.html'));
});

app.listen(port ,process.env.IP,() => {
    console.log("Server Running on localhost:" + port);
})