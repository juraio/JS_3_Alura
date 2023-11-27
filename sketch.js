function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("blue");
  textSize(64);
  textAlign(CENTER, CENTER);
  fill("black")
  
  
  let maximo = width;
  let minimo = 0;
  
  let palavra="Pensante";
  let quantidade = map (mouseX, 0, width, 1, palavra.length);
  
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
  
//   if(mouseX < 50){
//     let palavra = "P";
//     text(palavra, 200, 200);
    
//   } else if(mouseX < 100){
//     let palavra = "Pe";
//     text(palavra, 200, 200);

//   }
//   else{
//      let palavra = "Pensante";
//      text(palavra, 200, 200);
//   }
 
}