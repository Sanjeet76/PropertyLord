const express = require('express');
const {dbConn} = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/user');





const app = express();
const port = 4000;
app.use(express.json())
app.use(cors());


dbConn();

app.use('/api', userRoutes);


app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})