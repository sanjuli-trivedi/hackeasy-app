const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')


const app= express()
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Shivesh@2001',
    database: 'HackEasy',
  });

  db.connect();

  app.get('/user', (req, res) => {
    const sql="select * from temp";
    db.query(sql, (err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });

  app.get('/medicineDetails/:id', async (req, res) => {
    const id = req.params.id;

    // const sql=`SELECT * FROM MedicineDetails WHERE Id = ${id}`;
    // db.query(sql, (err, data) => {
    //   if (err) throw err;
    //   res.json(data);
    // });
    
    const sql = 'SELECT * FROM MedicineDetails WHERE Id = ?';
    db.query(sql, [id], (err, data) => {
    if (err) throw err;
    res.json(data);
    });


    // try {
    //   // Fetch data from the database based on the ID
    //   const result =  db.query(`SELECT * FROM MedicineDetails WHERE Id = ${id}`);
  
    //   // Send the fetched data as a response
    //   res.json(result);
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ error: 'Internal Server Error' });
    // }
  });



app.get('/',(re,res)=>{
    return res.json("from Backend Side");
})


 app.listen(8081, ()=>{
    console.log("Listening")
 })