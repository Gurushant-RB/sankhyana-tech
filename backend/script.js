const express= require('express');
const app = express();
const mongoose =require('mongoose');
const Student = require('./model/student');
const cors=require('cors');

app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json());

//Connection for MongoDB
const db_url = "mongodb://0.0.0.0:27017/Sankhyana";
mongoose.connect(db_url).then(()=>{
    console.log('Connected to MongoDB');
})

// Student Profile Login
app.post('/log', async(req,resp)=>{
    await Student.findOne({email: req.body.email}).then((studentData)=>{
        console.log(studentData);
        if(studentData)
        {
           if(studentData.password === req.body.password)
           {
            resp.send({message:'login success' , status:200});
           }
           else{
            resp.send({message:'please enter correct password'});
           }
        }
        else{
            resp.send({message:'student not found, please add profile'});
        }
    })
})

/// Student Registration
app.post('/reg', async (req, resp)=>{
    Student.findOne({email:req.body.email}).then((studentData)=>{
        if(studentData)
        {
            resp.send({message:'student already exists'});
        }
        else{
            const studentData=new Student({
                name: req.body.name,
                mobile: req.body.mobile,
                email: req.body.email,
                password: req.body.password
            })
            //saving the data
            studentData.save().then(()=>{
                resp.send({message:'Student profile added successfully'})
            }).catch(()=>{
                resp.send({message:'student registration failed. Try again'});
            });
        }
    })
})
app.listen(4000,()=>{console.log('running in 4000');})