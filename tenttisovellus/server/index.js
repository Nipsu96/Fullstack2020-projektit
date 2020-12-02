const express = require('express')
const app = express()
const port = 3005

// notice here I'm requiring my database adapter file
// and not requiring node-postgres directly
const db = require('./db')

// app.get('/tentit/:id', (req, res, next) => {

//   db.query('SELECT * FROM tentti_taulu WHERE tentti_id = $1', [req.params.id], (err, result) => {
//     if (err) {
//       return next(err)
//     }
//     res.send(result.rows[0])
//   })
// })
// // ... many other routes in this file


// TenttiTaulun SQL-lauseet
app.get('/tentit', (req, res,next) => {
  db.query('SELECT * FROM tentti_taulu ', (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})
app.post('/tentit', (req, res,next) => {
  db.query("INSERT INTO tentti_taulu (tentin_nimi, user_id) VALUES ('Testataan Nodea2', '1')", (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Lisäys onnistui')
  })
  })
  app.delete('/tentit/:id', (req, res,next) => {
    db.query('DELETE FROM tentti_taulu WHERE tentti_id = $1', [req.params.id], (err, result) => {
      if (err) {
        return next(err)
      }
      res.send('Poisto onnistui')
    })
  })
  app.put('/tentit/:id', (req, res,next) => {
    db.query("UPDATE tentti_taulu SET tentin_nimi='Testataan Puttia',user_id= '2' WHERE tentti_id = $1", [req.params.id], (err, result) => {
      if (err) {
        return next(err)
      }
      res.send('Päivitys onnistui')
    })
  })

  //kysymystaulu
  app.get('/kysymykset', (req, res,next) => {
    db.query('SELECT * FROM kysymykset ', (err, result) => {
      if (err) {
        return next(err)
      }
      res.send(result.rows)
    })
  })

  app.post('/kysymykset', (req, res,next) => {
    db.query("INSERT INTO kysymykset (kysymys_nimi, tentti_id) VALUES ('Onko tämä postin testausta?', '4')", (err, result) => {
      if (err) {
        return next(err)
      }
      res.send('Lisäys onnistui')
    })
    })
    app.delete('/kysymykset/:id', (req, res,next) => {
      db.query('DELETE FROM kysymykset WHERE kysymys_id = $1', [req.params.id], (err, result) => {
        if (err) {
          return next(err)
        }
        res.send('Poisto onnistui')
      })
    })
    app.put('/kysymykset/:id', (req, res,next) => {
      db.query("UPDATE kysymykset SET kysymys_nimi='Onnistuuko muokkaus?',tentti_id= '4' WHERE kysymys_id = $1", [req.params.id], (err, result) => {
        if (err) {
          return next(err)
        }
        res.send('Päivitys onnistui')
      })
    })
  

    // vastausvaihtoehdot

    app.get('/vastausvaihtoehdot', (req, res,next) => {
      db.query('SELECT * FROM vastaus_vaihtoehdot ', (err, result) => {
        if (err) {
          return next(err)
        }
        res.send(result.rows)
      })
    })
  
    app.post('/vastausvaihtoehdot', (req, res,next) => {
      db.query("INSERT INTO vastaus_vaihtoehdot (vastaus_nimi,kysymys_id,oikea_vastaus) VALUES ('Ei toimi', '13', false)", (err, result) => {
        if (err) {
          return next(err)
        }
        res.send('Lisäys onnistui')
      })
      })
      app.delete('/vastausvaihtoehdot/:id', (req, res,next) => {
        db.query('DELETE FROM vastaus_vaihtoehdot WHERE vaihtoehto_id = $1', [req.params.id], (err, result) => {
          if (err) {
            return next(err)
          }
          res.send('Poisto onnistui')
        })
      })
      app.put('/vastausvaihtoehdot/:id', (req, res,next) => {
        db.query("UPDATE vastaus_vaihtoehdot SET vastaus_nimi='Muokkaus onnistui2',kysymys_id= '12',oikea_vastaus=true WHERE vaihtoehto_id = $1", [req.params.id], (err, result) => {
          if (err) {
            return next(err)
          }
          res.send('Päivitys onnistui')
        })
      })
    
      // Käyttäjän vastaukset
      app.get('/vastaukset', (req, res,next) => {
        db.query('SELECT * FROM vastaukset ', (err, result) => {
          if (err) {
            return next(err)
          }
          res.send(result.rows)
        })
      })
    
      app.post('/vastaukset', (req, res,next) => {
        db.query("INSERT INTO vastaukset (vastaus,kysymys_id,vaihtoehto_id) VALUES (false, '12', '15')", (err, result) => {
          if (err) {
            return next(err)
          }
          res.send('Lisäys onnistui')
        })
        })
        app.delete('/vastaukset/:id', (req, res,next) => {
          db.query('DELETE FROM vastaukset WHERE vastaus_id = $1', [req.params.id], (err, result) => {
            if (err) {
              return next(err)
            }
            res.send('Poisto onnistui')
          })
        })

        //Vastausten poisto listasta jos niitä ei ole valittu
        app.delete('/vastaukset', (req, res,next) => {
          db.query('DELETE FROM vastaukset WHERE vastaus=false', (err, result) => {
            if (err) {
              return next(err)
            }
            res.send('Väärien poisto onnistui')
          })
        })

        
        app.put('/vastaukset/:id', (req, res,next) => {
          db.query("UPDATE vastaukset SET vastaus=false WHERE vastaus_id = $1", [req.params.id], (err, result) => {
            if (err) {
              return next(err)
            }
            res.send('Päivitys onnistui')
          })
        })
      
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
