
// Arrayt
let weekday=[["Maanantai",8],["",8],["Maanantai",8],["Maanantai",8],["Maanantai",8]]
let workhours= [8,9,5,6,7]
let num= [1,4,100,2,5,4]
let Sortnum= [1,4,100,2,5,4]

array = [4, 45, 'hgd', '50', 87, 8, 'dhgs', 85, 4, '9', '1a'],
temp = array.filter(Number).map(Number)

// Työtuntien keskiarvot
let summa=0;
for(i=0;i< workhours.length;i++){
    summa+=workhours[1];
}
let avg= summa/workhours.length

const forLoopMinMax = () => {
    let min = workhours[0], max = workhours[0]
  
    for (let i = 1; i < workhours.length; i++) {
      let value = workhours[i]
      min = (value < min) ? value : min
      max = (value > max) ? value : max
    }
  
    return [min, max]
  }
  
  const [forLoopMin, forLoopMax] = forLoopMinMax()

  //Sort ilman comparea
num.sort();

// Sort Comparen kanssa
Sortnum.sort(function(a, b) {
    return a - b;
  });

console.log("Tämä on Min:",forLoopMin, "Tämä on Max",forLoopMax) // Minimum: -37, Maximum: 37
console.log("Tämä on keskiarvo",avg)
console.log("Tämä on sort ilman Comparea",num);
console.log("Tämä on sort Comparen kanssa",Sortnum);