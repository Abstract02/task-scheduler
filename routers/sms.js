import express from 'express';
import smsService from '../services/smsService.js';

const router = express();

router.get('/add-task',async function(req,res){
res.send("sms")
});

export default router;