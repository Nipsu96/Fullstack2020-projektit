const funktiot = require('./testi_moduuli');

test('Arvo ei ole undefined', () => {
  expect(funktiot.Luku(2)).toBeDefined();//luvun sulkeissa oleva määrittelee arvon, eli jos sulkeissa ei ole mitään, se tarkoittaa, että testi epäonnistuu koska arvo on undefined
});
test('Arvo on undefined', () => {
  expect(funktiot.Luku()).not.toBeDefined(); // 
});


// Merkkijonot/Nimet ovat Case sensitive

test('Saadaan oikea virheilmoitus', () => {
  expect(funktiot.virheTesti).toThrow('Tämä on virhe');
});

test('Ovatko kaksi objektia identtiset', () => {
  const tulos = funktiot.nimitaulukko("Janne", "Kekkonen")
  expect(tulos).toEqual({ nimi: "Janne", sukunimi: "Kekkonen" });
});

test('Kaksi objektia eivät ole identtiset', () => {
  const tulos = funktiot.nimitaulukko("Janne", "kekkonen")
  expect(tulos).not.toEqual({ nimi: "Janne", sukunimi: "Kekkonen" });
});

test('Sisältääkö merkkijono kissan?', () => {
  const tulos = "Tämä kissa nappasi hiiren"
  expect(tulos).toContain('kissa');
});

test('Sisältääkö taulukko eläin-alkion, jonka arvo on kissa?', () => {
  const tulos = funktiot.eläintaulukko("Hiiri", "Kana", "Kissa", "Koira")
  expect(tulos).toContainEqual({ eläin: "Kissa" });
});

test('Merkkijono on maanantai?', () => {
  const tulos = "maanantai"
  expect(tulos).toMatch(/maanantai/);
});

test('Merkkijono on tietyn pituinen', () => {
  const tulos = "Kissa"
  expect(tulos).toHaveLength(5);// jos merkkijono on pidempi tai lyhyempi kuin 5 niin testi epäonnistuu
});

test('ToHavePropertyn testaamista eläintarha esimerkillä', () => {
  // Yksinkertaiset esimerkit
  expect(funktiot.zoo({})).toHaveProperty('Kiharvi');
  expect(funktiot.zoo({})).not.toHaveProperty('Pingviini');
  // ToHavePropertya voidaan myös käyttää tarkempaan hakuun
  expect(funktiot.zoo({})).toHaveProperty('Kissaeläimet.Leijonat', 4);

  //Kaikkien ehtojen täytyy toteutua, muuten ei toimi
})

test('Eläintarhassa on halutut eläimet', () => {
  const halututEläimet = {
    Kiharvi:true,
    Kissaeläimet: {
      Tiikerit: 5,
      Leijonat:4,
    }
  };
  expect(funktiot.zoo({})).toMatchObject(halututEläimet);
});



// Matemaattiset


test('Funktio palauttaa nullin', () => {
    expect(funktiot.returnNull()).toBeNull();
  });
  test('Testi onnistuu kun palautettava arvo on NaN', () => {
    expect(NaN).toBeNaN();
    expect(1).not.toBeNaN();
  });
  
  test('1 + 2 summa on 3', () => {
    expect(funktiot.sum(1, 2)).toBe(3);
  });
  // test('2 + 1 0n 3 epäonnistuu', () => {
  //   expect(funktiot.sum(2, 2)).toBe(3);
  // });
  
  test('Luku on suurempi tai yhtäsuuri kuin 3', () => {
    expect(funktiot.Luku(3)).toBeGreaterThanOrEqual(3);
  });
  
  test('Luku on pienempi kuin 5.5', () => {
    expect(funktiot.Luku(5.49)).toBeLessThan(5.5);
  });
  // .toBeGreaterThan(3);
  // .toBeGreaterThanOrEqual(3.5);
  // .toBeLessThan(5);
  // .toBeLessThanOrEqual(4.5);
  
  test('Luku on pyöristetty lähelle 5.5', () => {
    expect(funktiot.Luku(5.49995)).toBeCloseTo(5.5);
  });
  
  // test('Luku on pyöristetty lähelle 5.8 epäonnistuu', () => {
  //   expect(funktiot.Luku(5.49995)).toBeCloseTo(5.8);
  // });
  
  test('paluuarvo false', () => {
    const tulos = funktiot.alleKymmenen(22);
    expect(tulos).toBeFalsy();
  });
  test('paluuarvo true', () => {
    const tulos = funktiot.alleKymmenen(10);
    expect(tulos).toBeTruthy();
  });
  
  
  