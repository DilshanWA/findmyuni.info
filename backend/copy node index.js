const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'zscorecheckre',
});

db.connect(err => {
   if (err) {
      console.error('MySQL connection error: ', err);
   } else {
      console.log('Connected to MySQL database');
   }
});

app.post('/datafill', (req, res) => {
   const {subjectstream,subject1,subject2,subject3,Distric,Zscore,Corse,univercity}=req.body;


   const formData = {
      sunject_strem: subjectstream,
      course:Corse,
      university:univercity,
      subject_one: subject1,
      subject_two: subject2,
      subject_tree: subject3,
      district: Distric, 
      Zscore: Zscore
    };

   const query = 'INSERT INTO zscorechecker SET ?';

   db.query(query, formData, (err, result) => {
      if (err) {
         console.error('MySQL query error: ', err);
         res.status(500).send('Error submitting form');
      } else {
         console.log('Form data submitted successfully');
         res.status(200).send('Form data submitted successfully');
      }
   });
});



app.post('/api/Contactus', (req, res) => {
   const formData = req.body;

   const query = 'INSERT INTO contact_details SET ?';

   db.query(query, formData, (err, result) => {
      if (err) {
         console.error('MySQL query error: ', err);
         res.status(500).send('Error submitting form');
      } else {
         console.log('Form data submitted fuvker imsefiiwer  successfully');
         res.status(200).send('Form data submitted successfully');
      }
   });
});

app.post('/Serverlogin', (req, res) => {
   const { username, password } = req.body;
 
   const query = 'SELECT * FROM login WHERE user_name= ? AND password=?';

   const datasets = [username, password]

   db.query(query, datasets, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error processing query');
      } else {
        const data = JSON.stringify(results);
        console.log(data);
        res.send(data);
      }
    });
 });





 app.post('/User-Submited', (req, res) => {
   const { subjectstream, Distric, Zscore,subject1, subject2, subject3, } = req.body;
 
   const query = `SELECT * FROM zscorechecker WHERE zscore < ?   AND sunject_strem =? AND district=? AND ((subject_one IN (?, ?, ?) AND subject_two IN (?, ?, ?) AND subject_tree IN (?, ?, ?)))`;
 
   const params = [
     Zscore,
     subjectstream,
     Distric,
     subject1, subject2, subject3,
     subject1, subject2, subject3,
     subject1, subject2, subject3
   ];
 
   db.query(query, params, (error, results) => {
     if (error) {
       console.error(error);
       res.status(500).send('Error processing query');
     } else {
       const data = JSON.stringify(results);
       console.log(data);
       res.send(data);
     }
   });
 });

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
})