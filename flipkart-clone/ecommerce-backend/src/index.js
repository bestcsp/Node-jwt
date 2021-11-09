const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose')
//environments variable and constants
env.config();

const userRoutes = require('./routes/auth')
const adminRoutes=require('./routes/admin')
global.config = require('./configuration')


console.log(process.env.MONGO_DB_USER, process.env.MONGO_DB_PASSWORD)
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.gxi9e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex:true

})
    .then(() => {
        console.log("mongo Connected")
    })
// const bodyParser=require('body-parser');

// app.use(bodyParser());
app.use(express.json());
app.use('/api', userRoutes)
app.use('/api', adminRoutes)



app.listen(process.env.PORT, () => {
    console.info("Server is connected to ", process.env.PORT)
})