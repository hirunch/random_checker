let Randomval = Math.floor(Math.random()*10+1);
console.log(Randomval);

document.getElementById("check").onclick = function() {

  let num =  document.getElementById("num").value;

  if(num == Randomval){
    document.getElementById("rlst").textContent = "You Win!";

  
  
  }

  else {
    document.getElementById("rlst").textContent = "You Lose!";


  }


    
  

}




  

