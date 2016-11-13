let express = require('express');
const path = require('path');
let port = 8080;
let app = express();

let root = path.normalize(__dirname + '/..');

app.set('appPath', path.join(root, 'client'));
app.use(express.static(app.get('appPath')));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html'); 

app.route('/*')
  .get((req, res) => {
    res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
  });

app.listen(port);
console.log('Listening on port ' + port);
