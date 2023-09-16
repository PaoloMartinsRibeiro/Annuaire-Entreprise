import express from 'express'
import mysql from 'mysql'

const app = express()

const db = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "",
    database: "projetcesi"
})

app.use(express.json)


app.get("/", (req,res) => {
    res.json("Test")
})

app.get("/salarie", (req,res) => {
    const querySalarie = "Select * from salarie"

    db.query(querySalarie,(err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/salarie", (req,res) => {
    const querySalarie = "INSERT INTO salarie (`idSalarie`, `nomSalarie`, `prenomSalarie`, `telephonefixeSalarie`,`telephoneportableSalarie`, `emailSalarie`, `serviceSalarie`, `siteSalarie` VALUES (?))"
    const values = [
        req.body.idSalarie,
        req.body.nomSalarie,
        req.body.prenomSalarie,
        req.body.telephonefixeSalarie,
        req.body.telephoneportableSalarie,
        req.body.emailSalarie,
        req.body.serviceSalarie,
        req.body.siteSalarie,
    ]

    db.query(querySalarie, [values], (err,data) => {
    if(err) return res.json(err)
    return res.json(data)    
    })
})


app.listen(5500, ()=>{
    console.log('App listening on port 5500')
})