const path = require('path');
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();


app.use(express.static(__dirname));
app.use(require('prerender-node'));
app.get('*',(req,res) => {
  res.sendFile(path.resolve(__dirname,'index.html'))
});

app.listen(port);
console.log('Server started');
