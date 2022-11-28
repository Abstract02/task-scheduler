import express from 'express';
import mailService from '../services/mailService.js';

const router = express();

router.get('/add-task',async function(req,res){
    await mailService.addMailTask();
    res.send("Done")
});

export default router;