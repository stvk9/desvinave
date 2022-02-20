//NOME DO JOGO DESVINAVE
//INSTRUÇÕES
/*O jogo em sua 1 fase do consiste em desviar dos asteroides que será adicionado pontos a cada asteroides passados ao colidir com o asteroide 1 vida é perdida. CONTROLE: O controle do jogo é feito ao pressionar a tecla direcional do teclado UP(cima) e DOWN(baixo) ao colidir com um asteroide pressiona-se ENTER para iniciar uma nova vida. */

//Instancia das variáveis
  
let img,img1,img2,img3,mudar,texto,gamer, start,aux,esp,esp1,esp2,live,time;
let ast1,ast2,ast3,ast4;
let x,x1,x2,x3,x4; 

var y1,y2,y3,y4,y5;
var texto1=[];
var a,b,i1,i2,j1,c;

//Variáveis startadas com valores constantes globias.
y1=30;y2=90;y3=170;y4=400;y5=180;
x=310;x1=40;x2=230;x3=550;x4=60;
i1=1;i2=2;j1=0;a=1;c=0;
live=3;
time=1;
mudar=false

texto1[0]="USE AS TECLAS DIRECIONAIS PARA (CIMA) \n     E PARA(BAIXO) PARA DESVIAR  DOS \n                   ASTEROIDES NA 1 FASE";
texto1[1]="CLICK ENTER!!!";
texto1[2]="NIVEL "
texto1[3]="PARABENS! NIVEL "
texto1[4]="PARABENS! ULTIMO NIVEL ";
texto1[5]="FIM DE JOGO!!!"
texto1[6]="START NEW PLAY!!!"

//Função para carregar as imagens
function preload() {
  img = loadImage("ship_10.png");
  img1 = loadImage("flame0.png");
  img2 = loadImage("ship_0.png");
  img3 = loadImage("ship_12.png");
  
  esp = loadImage("Space.png");
  esp1 = loadImage("Background-1.png");
  esp2 = loadImage("OGA-Background-3.png");
  
  ast1 = loadImage("asteroid_30.png");
  ast2 = loadImage("asteroid_40.png");
  ast3 = loadImage("asteroid_50.png");
  start= loadImage("PressHereToStart.png");
  gamer = loadImage("GameOver.png");
  
}

//Responsavel pelo nivel 1
function nivel_1(){
  background(esp);
  image(start, x4, y5);
  textSize(18)
  fill("red");
  text(texto1[0], 130, 250);
  
  //tela inicial do menu
  if(mouseY > 180 || mouseY < 200)
  {
    if (mouseIsPressed) 
    {
      j1=1;
    }  
  }
  
// Tela da 1 fase.  
  if(j1===1){
    background(esp);
    /*Modula a imagem centralizando pontos para desconsiderar tamanho não visível.*/
    //modifica a imagem após colisão.
    imageMode(CENTER)
    if(mudar==false){
      image(img, x, y4);
    }else{
      image(img1, x, y4);
    }
    //Retorna módulo padrão
    imageMode(CORNER)
    //Imagem do objeto asteroide com mudança de posição
    image(ast1, x1, y1);
    y1=y1+i1;
    if(y1==500){y1=0;}
  
    image(ast1, x2, y2);
    y2=y2+i1;
    if(y2==600){y2=0;}
  
    image(ast1, x3, y3);
    y3=y3+i1;
    if(y3==700){y3=0;}
    
    //Texto base para mostrar tempo e vida
    text("Time: "+time, 500,20);
    text("Life: "+live, 20,20);
    text(texto1[2]+a, 20,40);
  
  /*Colisão, asteroide 1,2,3 usando o laço de repetição for que recebe 3 variáveis iniciadas com valor 0 e enquanto variável j for menor que  3(forçando o código repetir por 3 vezes)*/
  for(j=0,k=0,w=0; j<3; j++){

    if(j===0){k=x1; w=y1;}
    if(j===1){k=x2; w=y2;}
    if(j===2){k=x3; w=y3;}
    /*Verifica o limite das margens laterais do canvas ao acionar a tecla direcional para cima ao ponto que modifica a orientação -x (Esquerda)  diminuindo a cada interação da tecla UP */
    if (keyIsDown(UP_ARROW)) {
      if(x>50){
        x = x - i2;
      }
    }
    /*Verifica o limite das margens laterais do canvas ao acionar a tecla direcional para cima ao ponto que modifica a orientação +x (Direita)  Aumentando a cada interação da tecla UP */
    if (keyIsDown(DOWN_ARROW)) {
      if(x<600){
        x = x + i2;
      }
    }
    //Verifica a colisão entre os objetos do jogo nave e asteroides.
    if(dist(x,y4,k,w) < 75){
        mudar=true;
        i1=0;
        i2=0;
        c=1;
        time=0;
        text(texto1[1],250,200);
        keyPressed();
    }else{
      time++;
      if(time===2500){
        i1=2;
        a=2;
      }
    } 
  }
 }
}

function nivel_2(){
    background(esp2);
  
    imageMode(CENTER)
    if(mudar==false){
      image(img2, x, y4);
    }else{
      image(img1, x, y4);
    }
    imageMode(CORNER)
  
    image(ast2, x1, y1);
    y1=y1+i1;
    if(y1>=500){y1=0;}
    x2=320;
    image(ast2, x2, y2);
    y2=y2+i1;
    if(y2>=600){y2=0;}
  
    image(ast2, x3, y3);
    y3=y3+i1;
    if(y3>=700){y3=0;}
  
    text("Time: "+time, 500,20);
    text("Life: "+live, 20,20);
    text(texto1[3]+a, 20,40);
  

    for(j=0,k=0,w=0; j<3; j++){

      if(j===0){k=x1; w=y1;}
      if(j===1){k=x2; w=y2;}
      if(j===2){k=x3; w=y3;}
   
      if (keyIsDown(UP_ARROW)) {
        if(x>50){
         x = x - i2;
        }
     }
    
     if (keyIsDown(DOWN_ARROW)) {
      if(x<600){
        x = x + i2;
      }
     }
    
     if(dist(x,y4,k,w) < 65){
        mudar=true;
        i1=0;
        i2=0;
        c=1;
        time=0;
        text("CLICK ENTER",250,200);
        keyPressed();
      }else{
        time++;
        if(time===5000){
          i1=3;
          a=3;
        }
      }
   }
}

function nivel_3(){
    background(esp1);
  
    imageMode(CENTER)
    if(mudar==false){
      image(img3, x, y4);
    }else{
      image(img1, x, y4);
    }
    imageMode(CORNER)
//------------------------------------
    image(ast3, x1, y1);
    y1=y1+i1;
    if(y1>=500){y1=0;}
  
    image(ast3, x2, y2);
    y2=y2+i1;
    if(y2>=600){y2=0;}
  
    image(ast3, x3, y3);
    
    y3=y3+i1;
    if(y3>=700){y3=0;}
  
    text("Time: "+time, 500,20);
    text("Life: "+live, 20,20);
    
    fill('white');
    text(texto1[4]+a, 20,40);
  
    for(j=0,k=0,w=0; j<3; j++){

     if(j===0){k=x1; w=y1;}
     if(j===1){k=x2; w=y2;}
     if(j===2){k=x3; w=y3;}
   
     if (keyIsDown(UP_ARROW)) {
        if(x>50){
        x = x - i2;
        }
     }
   
     if (keyIsDown(DOWN_ARROW)) {
      if(x<600){
        x = x + i2;
      }
     }
      
     if(dist(x,y4,k,w) < 65){
        mudar=true;
        i1=0;
        i2=0;
        c=1;
        time=0;
        text("CLICK ENTER",250,200);
        keyPressed();
      }else{
       time++;
       if(time===7000){
         a=0;
       }
      }
   }
}

function gameover(){
   background("black");
   image(gamer, 90, 50);
  
   fill('white')
   text(texto1[5], 20,20);
   
   fill('yellow')
   text(texto1[6], 450,20);
  
   if(mouseY >=500 || mouseY <= 20)
   {
     if (mouseIsPressed) 
     {
       y1=30;y2=90;y3=170;y4=400;y5=180;
       x=310;x1=40;x2=230;x3=550;x4=60;
       i1=1;i2=2;a=1;
       
       live=3;
       time=0;
     }  
   }
}

/*Função para capturar a tecla enter do teclado inciando as variáveis globais com seus valores iniciais.*/
function keyPressed(){
  if (keyCode === ENTER) 
    {
        y1=30;y2=90;y3=170;y4=400;y5=180;
        x=310;x1=40;x2=230;x3=550;x4=60;
        i1=1;i2=2;
        j1=1;
        if(c===1){
          if(live>0){
            live=live-1
          }else{
            a=1;
            live=3;
            time=0;
          }
        }
        mudar=false;
        preload();
    }
}



