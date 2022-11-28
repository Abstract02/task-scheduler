import express from 'express';
import mail from './routers/mail.js';
import sms from './routers/sms.js'

const app = express();
const PORT  = 5000;

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.use('/mail', mail);

app.use('/sms', sms);

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`)
});