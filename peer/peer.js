var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.VCAP_APP_PORT || process.env.PORT || process.argv[2] || 1234;
var express = require('express');
var Gun = require('gun');
const path = require('path');
require('gun/axe');

var app = express();
app.use(Gun.serve);

/*
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
*/

app.use(express.static(__dirname));
var server = app.listen(port);
var gun = Gun({ file: 'data', web: server });

global.Gun = Gun; /// make global to `node --inspect` - debug only
global.gun = gun; /// make global to `node --inspect` - debug only

console.log('Server started on port ' + port + ' with /gun');