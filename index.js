const express = require("express")
const app = express()
const record = require('./routes/record')
const router = require('./routes/users')
const auth= require('./src/middleware/auth')
const port = process.env.PORT || 3000


app.get("/", (req, res) => {
  res.send({ message: "Hello World!" })
})

app.use('/record',auth.auth, record);
app.use('/users', router);

// MongoDB connection
const url = `mongodb+srv://nithinvisva:visuakc6999@crudapp.ubtykah.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.listen(port, () => {
  console.log(`Example app listening at Port: ${port}`)
})
// const express = require('express')
// const record = require('./routes/record')
// const router = require('./routes/users')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const auth= require('./src/middleware/auth')
// var app = express()
// const port = process.env.PORT || 8000;
// //Route
// // app.use(cors({
// //     origin: "*"
// // })
// // )
// app.get('/',(res,req)=>{
//   res.send('working')
// })
// app.use('/record',auth.auth, record);
// app.use('/users', router);
// //MongoDB connection
// const url = `mongodb+srv://nithinvisva:visuakc6999@crudapp.ubtykah.mongodb.net/?retryWrites=true&w=majority`;

// const connectionParams={
//     useNewUrlParser: true,
//     // useCreateIndex: true,
//     useUnifiedTopology: true 
// }
// mongoose.connect(url,connectionParams)
//     .then( () => {
//         console.log('Connected to database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })
// // mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});
// // mongoose.connection.once('open',function(){
// //   console.log('Database connected Successfully');
// // }).on('error',function(err){
// //   console.log('Error', err);
// // })
// //Server
// app.listen(port,function(){
//   console.log('Server is Up')
// })