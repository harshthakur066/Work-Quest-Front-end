const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 3000, "0.0.0.0", function(err) {
    if (err) {
        console.log(err)
        return
      }
    console.log('Listening at ' + host + ':' + port + '\n')
});
