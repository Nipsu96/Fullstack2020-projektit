const express = require('express')
const app = express()
var jwt = require('jsonwebtoken');
const SALT_ROUNDS = 5
var bcrypt=require('bcrypt')
const cors = require("cors")
var bodyParser = require("body-parser")
const db = require('./db')
module.exports = app
var port = process.env.PORT || 3005
app.use(bodyParser.json())
//https://expressjs.com/en/resources/middleware/cors.html
app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}))

app.use('/paljonkelloon', function (req, res, next) {
  console.log('Kello on :', Date.now())
  next()
})




// notice here I'm requiring my database adapter file
// and not requiring node-postgres directly


// app.get('/tentit/:id', (req, res, next) => {

//   db.query('SELECT * FROM tentti_taulu WHERE tentti_id = $1', [req.params.id], (err, result) => {
//     if (err) {
//       return next(err)
//     }
//     res.send(result.rows[0])
//   })
// })
// // ... many other routes in this file
// keskiarvo SQL-Lauseet
app.get('/keskiarvot', (req, res, next) => {
  db.query('SELECT keskiarvo.keskiarvo,oppilaat.etunimi,oppilaat.sukunimi FROM keskiarvo INNER JOIN oppilaat ON keskiarvo.oppilas_id = oppilaat.oppilas_id', (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})
app.put('/tenttitulokset', (req, res, next) => {
  db.query('SELECT DISTINCT oppilas_id FROM tenttitulokset', (err, result) => {
    if (err) {
      return next(err)
    }
    for (let x = 0; x < result.rows.length; x++) {
      db.query('UPDATE public.keskiarvo SET keskiarvo= (SELECT AVG(tulos) FROM tenttitulokset WHERE oppilas_id=$1) WHERE oppilas_id= $1;', [result.rows[x].oppilas_id], (err, result) => {
        if (err) {
          return next(err)
        }
      })
    }
    return res.sendStatus(200)
  })
})

// TenttiTaulun SQL-lauseet
// Yksittäiset SQL-Lauseet
app.get('/tentit', (req, res, next) => {
  db.query('SELECT * FROM tentti_taulu', (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})
app.post('/tentit', (req, res,next) => {
  db.query("INSERT INTO tentti_taulu (tentin_nimi, user_id) VALUES ($1,$2)", [req.body.tentin_nimi,req.body.user_id,], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Lisäys onnistui')
  })
  })
app.delete('/tentit/:id', (req, res, next) => {
  db.query('DELETE FROM tentti_taulu WHERE tentti_id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Poisto onnistui')
  })
})
app.put('/tentit/:id', (req, res, next) => {
  db.query("UPDATE tentti_taulu SET tentin_nimi='Testataan Puttia',user_id= '2' WHERE tentti_id = $1", [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Päivitys onnistui')
  })
})

//kysymystaulu
app.get('/kysymykset', (req, res, next) => {
  db.query('SELECT * FROM kysymykset ', (err, result) => {//order by id
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})
app.get('/kysymykset/:tentti_id', (req, res, next) => {
  db.query('SELECT * FROM kysymykset WHERE tentti_id=$1 ', [req.params.tentti_id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})
app.post('/kysymykset', (req, res, next) => {
  db.query("INSERT INTO kysymykset (kysymys_nimi, tentti_id) VALUES ($1,$2)",[req.body.kysymys_nimi,req.body.tentti_id,], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Lisäys onnistui')
  })
})
app.delete('/kysymykset/:id', (req, res, next) => {
  db.query('DELETE FROM kysymykset WHERE kysymys_id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Poisto onnistui')
  })
})
app.put('/kysymykset', (req, res, next) => {
  console.log(req.body)
  db.query("UPDATE kysymykset SET kysymys_nimi=$1 WHERE kysymys_id = $2", [req.body.kysymys_nimi,req.body.kysymys_id], (err, result) => {
    if (err) {
      console.log(err)
      return next(err)
    }
    console.log("Jee")
    res.send('Päivitys onnistui')
  })
})


// vastausvaihtoehdot

app.get('/vastausvaihtoehdot', (req, res, next) => {
  db.query('SELECT * FROM vastaus_vaihtoehdot ORDER BY vaihtoehto_id ', (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})

app.get('/vastausvaihtoehdot/:kysymys_id', (req, res, next) => {
  db.query('SELECT * FROM vastaus_vaihtoehdot WHERE kysymys_id=$1 ORDER BY vaihtoehto_id', [req.params.kysymys_id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})

app.post('/vastausvaihtoehdot', (req, res, next) => {
  const userData = {
    vastaus_nimi: req.body.vastaus_nimi,
   oikea_vastaus: req.body.oikea_vastaus
  } 
  console.log(userData)
  db.query("INSERT INTO vastaus_vaihtoehdot (vastaus_nimi,kysymys_id,oikea_vastaus) VALUES ($1,$2,$3)",[userData.vastaus_nimi,req.body.kysymys_id,userData.oikea_vastaus], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Vaihtoehdon lisäys onnistui')
  })
})
app.delete('/vastausvaihtoehdot', (req, res, next) => {
  console.log(req.body)
  db.query('DELETE FROM vastaus_vaihtoehdot WHERE vaihtoehto_id = $1', [req.body.vaihtoehto_id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Poisto onnistui')
  })
})
app.put('/vastausvaihtoehdot', (req, res, next) => {
  db.query("UPDATE vastaus_vaihtoehdot SET vastaus_nimi=$1 WHERE vaihtoehto_id = $2",[req.body.vastaus_nimi, req.body.vaihtoehto_id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Päivitys onnistui')
  })
})
app.put('/vastausvaihtoehdot/oikea', (req, res, next) => {
  db.query("UPDATE vastaus_vaihtoehdot SET oikea_vastaus=$1 WHERE vaihtoehto_id = $2",[req.body.oikea_vastaus, req.body.vaihtoehto_id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Päivitys onnistui')
  })
})

// Käyttäjän vastaukset
app.get('/vastaukset', (req, res, next) => {
  db.query('SELECT * FROM vastaukset ', (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})

app.post('/vastaukset', (req, res, next) => {
  db.query('INSERT INTO vastaukset (vastaus,kysymys_id,vaihtoehto_id) VALUES ($1,$2,$3)', [req.body.vastaus, req.body.kysymys_id, req.body.vaihtoehto_id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Lisäys onnistui')
  })
})

app.put('/vastaukset', (req, res, next) => {
  console.log(req.body)
  db.query('UPDATE vastaukset SET vastaus=$2  WHERE vaihtoehto_id = $1', [req.body.vaihtoehto_id, req.body.vastaus], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('put onnistui')
  })
})
app.delete('/vastaukset/:id', (req, res, next) => {
  db.query('DELETE FROM vastaukset WHERE vastaus_id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Poisto onnistui')
  })
})

//Vastausten poisto listasta jos niitä ei ole valittu
// app.delete('/vastaukset', (req, res, next) => {
//   db.query('DELETE FROM vastaukset WHERE vastaus=false', (err, result) => {
//     if (err) {
//       return next(err)
//     }
//     res.send('Väärien poisto onnistui')
//   })
// })


app.put('/vastaukset/:id', (req, res, next) => {
  db.query("UPDATE vastaukset SET vastaus=false WHERE vastaus_id = $1", [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Päivitys onnistui')
  })
})

// Käyttäjän haku
app.get('/users', (req, res, next) => {
  db.query('SELECT * FROM users ', (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})

// INNER JOINIT
app.get('/tenttikysymykset', (req, res, next) => {
  db.query('SELECT kysymykset.kysymys_nimi FROM kysymykset INNER JOIN tentti_taulu ON kysymykset.tentti_id = tentti_taulu.tentti_id ', (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})

// rekisteröinti
app.post('/users', (req, res) => {
  const today = new Date()

  const userData = {
    etunimi: req.body.etunimi,
    sukunimi: req.body.sukunimi,
    email: req.body.email,
    salasana: req.body.salasana,
    onko_opettaja: req.body.onko_opettaja
  } 
  // let invalid = (Object.values(userData).some(item => {
  //   return item == undefined
  // }))
  // if (invalid) return res.json({ error: "Values missing" })  
 
  console.log("Nyt rekisteröidytään", userData)
  db.query('select * FROM users where email=$1', [userData.email], (err, result) => {
    if (err) {
      return res.json("Nyt on errori")
    }
    user = result.rows.length > 0 ? result.rows[0].email : null
    if (user !== null) {
      console.log('username already taken');
      return res.json({ error: "User already exists!" })
    } else {
      bcrypt.hash(userData.salasana, SALT_ROUNDS,(err,hash)=>{
      // bcrypt.hash(userData.password, SALT_ROUNDS).then(hashedPassword => {
      //hashedPassword = userData.password
      hashedPassword = hash
        db.query('insert into users (etunimi,sukunimi,email,salasana,onko_opettaja) values ($1,$2,$3,$4,$5)', [userData.etunimi, userData.sukunimi, userData.email, hashedPassword, userData.onko_opettaja], (err, result) => {
          if (err) {
           throw "Error! Cant create user!"
          }
          console.log('user created');
          res.json({ message: userData.email + ' registered' })
        });
        });
      }
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
