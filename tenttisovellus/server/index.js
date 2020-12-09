const express = require('express')
const app = express()
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

app.use('/paljonkelloon',function(req,res,next){
    console.log('Kello on :',Date.now())
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
app.put('/tenttitulokset/:id', (req, res, next) => {
  db.query('UPDATE public.keskiarvo SET keskiarvo= (SELECT AVG(tulos) FROM tenttitulokset WHERE oppilas_id=$1) WHERE oppilas_id= $1;', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
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
// app.post('/tentit', (req, res,next) => {
//   db.query("INSERT INTO tentti_taulu (tentin_nimi, user_id) VALUES ('Testataan Nodea2', '1')", (err, result) => {
//     if (err) {
//       return next(err)
//     }
//     res.send('Lisäys onnistui')
//   })
//   })
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
  db.query('SELECT * FROM kysymykset ', (err, result) => {
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
  db.query("INSERT INTO kysymykset (kysymys_nimi, tentti_id) VALUES ('Onko tämä postin testausta?', '4')", (err, result) => {
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
app.put('/kysymykset/:id', (req, res, next) => {
  db.query("UPDATE kysymykset SET kysymys_nimi='Onnistuuko muokkaus?',tentti_id= '4' WHERE kysymys_id = $1", [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Päivitys onnistui')
  })
})


// vastausvaihtoehdot

app.get('/vastausvaihtoehdot', (req, res, next) => {
  db.query('SELECT * FROM vastaus_vaihtoehdot ', (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})

app.get('/vastausvaihtoehdot/:kysymys_id', (req, res, next) => {
  db.query('SELECT * FROM vastaus_vaihtoehdot WHERE kysymys_id=$1 ', [req.params.kysymys_id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})

app.post('/vastausvaihtoehdot', (req, res, next) => {
  db.query("INSERT INTO vastaus_vaihtoehdot (vastaus_nimi,kysymys_id,oikea_vastaus) VALUES ('Ei toimi', '13', false)", (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Lisäys onnistui')
  })
})
app.delete('/vastausvaihtoehdot/:id', (req, res, next) => {
  db.query('DELETE FROM vastaus_vaihtoehdot WHERE vaihtoehto_id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Poisto onnistui')
  })
})
app.put('/vastausvaihtoehdot/:id', (req, res, next) => {
  db.query("UPDATE vastaus_vaihtoehdot SET vastaus_nimi='Muokkaus onnistui2',kysymys_id= '12',oikea_vastaus=true WHERE vaihtoehto_id = $1", [req.params.id], (err, result) => {
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
  db.query('UPDATE vastaukset SET vastaus=$2  WHERE vaihtoehto_id = $1', [req.body.vaihtoehto_id,req.body.vastaus], (err, result) => {
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


// INNER JOINIT
app.get('/tenttikysymykset', (req, res, next) => {
  db.query('SELECT kysymykset.kysymys_nimi FROM kysymykset INNER JOIN tentti_taulu ON kysymykset.tentti_id = tentti_taulu.tentti_id ', (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
