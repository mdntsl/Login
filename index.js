const express = require('express');
const app = express();
const router = require('./node-app/routes');
const session = require('express-session');

/*-------------------------------------*/
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));


/*-------------------------------------*/
app.use('/', router)
app.use('/registration', router);





app.listen('3000');