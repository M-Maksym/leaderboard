const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    
      id: 15,
      username: "kminchelle",
      email: "kminchelle@qq.com",
      firstName: "Jeanne",
      lastNam: "Halvorson",
      gender: "female",
      image: "https://robohash.org/autquiaut.png",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTcwMTAwMjI3MywiZXhwIjoxNzAxMDA1ODczfQ.4yGHtdUdXS1cXogxGXttE8WBHZL-FbPeJ7myO0LwER0"
  
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
