function setup() {
  createCanvas(650, 450); 
}

function draw() {
  
  if(a===1){
    //Função para chamar nivel 1
    nivel_1();
  }else if(a===2){
    //Função para chamar Nivel 2
    nivel_2();
  }else if(a===3){
    //Função para chamar Nivel 3
    nivel_3();
  }else{
    gameover();
  }
  
}
