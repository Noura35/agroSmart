var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
const mongoose = require('mongoose')
const passport = require('passport')


var userRouter = require('./routes/user.routes');
var postRouter = require('./routes/post.routes');
const articlesRouter=require('./routes/articles')
const routeEmbauches = require('./routes/embauches.route')
const materielsRouter=require('./routes/materiels')



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* passport */
app.use(passport.initialize())
require('./security/passport')(passport)


app.use(express.static(path.join(__dirname,'/public')));



/* connect to db */

  mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
  
app.use(express.static(path.join(__dirname, 'public')));


//routes :
app.use('/user', userRouter);
app.use('/post', postRouter);


app.use('/api', articlesRouter);
app.use('/api', routeEmbauches)
app.use('/api',materielsRouter)



// carte esp32 



module.exports = app;