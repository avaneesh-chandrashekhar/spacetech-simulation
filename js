var fact = [
  "2.Our Milky Way Probably Has a Black Hole.",
  "3.Dying Stars Lead to Stellar Black Holes.",
  "4.There are Three Categories of Black Holes.",
  "5.Black Holes Are Funky.",
  ];


var c = 0;
function nextslide(){
 if (c == 10){
   c = 0;
 }
   document.getElementById("facts").innerHTML = fact[c];
  
 
  
  c++;
}
function Backslide(){
 if (c == 0){
   c = 9;
}
  document.getElementById("facts").innerHTML = fact[c];
 c--;
}  
