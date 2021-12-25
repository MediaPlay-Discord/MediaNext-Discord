const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const port = 3000;
exports.run =  (async => {
app.get('/', (req, res) => res.render(__dirname + `/../website/test.ejs`));
app.get('/customcmd',(req,res) => {

})
app.get('/webserver', (req, res) => res.send('the web server is running at port 3000'));
app.listen(port, () => console.log(`hi!`));
 app.use('/scripts/functions/chess/',express.static(__dirname + '/chess'));
 app.use('/img',express.static(__dirname + '/chess/img'));
  app.use('/css',express.static(__dirname + '/chess/css'));
 });
