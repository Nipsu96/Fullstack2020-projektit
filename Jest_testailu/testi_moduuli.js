function sum(a, b) {
    return a + b;
  }

  function nimitaulukko(a, b) {
    const data = {nimi: a,sukunimi:b};
    return data;
  }
  function eläintaulukko(a,b,c,d) {
    const data = [{eläin:a},{eläin:b},{eläin:c},{eläin:d}];
    return data;
  }

  function alleKymmenen(a) {
    if (a > 10){
      return false;
    }else{
      return true
    }
  }

  function Luku(a) {
    return a;
  }

  function virheTesti() {
    throw new Error('Tämä on virhe');
  }

  function returnNull() {
   return null;
  }

  function zoo (){
    const ZooAnimals = {
      Elephantti: true,
      Kiharvi:true,
      Kissaeläimet: {
        Tiikerit: 5,
        Leijonat:4,
        Pantterit:1
      }
    };
  
    return ZooAnimals

  }

  module.exports={
    sum:sum,
    nimitaulukko:nimitaulukko,
    eläintaulukko:eläintaulukko,
    alleKymmenen:alleKymmenen,
    Luku:Luku,
    virheTesti:virheTesti,
    zoo:zoo,
    returnNull:returnNull
};
