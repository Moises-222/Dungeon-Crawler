function voltarMenu() {
  window.location.href="menu.html"
}
const matriz = [];
const tamanho = 60;
let botaoChave=false;
let chave2=false;
let chave1=false;
let botao1=false;
let botaoC1=false;
let botaoC2=false;
let botaoC3=false;
let botaoC4=false;
let botaoC5=false;
let botaoC6=false;
let temChave=false;
let portal = "X";
let heroi="&";
const tele="<";
const parede  = "*";
const chaveV = "@";
const porta = "D";
const passagem= "=";
const espinho = "#";
let vidas = 3;
let botao="O";
let nada="";
fazerMatriz();

function teletransportar(){
if(heroi === matriz[59][59]){
  x=30;
  y=37;
  matriz[x][y] = heroi;
}
else{
  x=59;
  y=59;
  matriz[x][y] = heroi;
}
}

function reiniciar() {
 botaoChave=false;
 chave2=false;
 chave1=false;
 botao1=false;
 botaoC1=false;
 botaoC2=false;
 botaoC3=false;
 botaoC4=false;
 botaoC5=false;
 botaoC6=false;
 temChave=false;
 vidas--;
 localStorage.setItem("mortes", vidas);
 if (vidas==0) {
   // redireciona para a mesma página para reiniciar o jogo
  window.location.href="telaMorte.html";
 } else {
   // reinicia o jogo sem atualizar a página
   fazerMatriz();
   x = 0;
   y = 0;
   matriz[x][y] = heroi;
   imprimirMatriz();
 }
}

// Cria a matriz preenchida com os elementos pré definidos por coluna
function fazerMatriz() {
for (let i = 0; i < tamanho; i++) {
matriz[i] = [];
for (let j = 0; j < tamanho; j++) {
  if(i<16 && j==3){
    matriz[i][j]=parede;
  }else if((i>3 && i<=18) && j==7){
    matriz[i][j]=parede;
  }else if(i==18 && j<=7){
    matriz[i][j]=parede;
  }else if(j==11 && i<=22 && i!=2){
    matriz[i][j]=parede;
  }else if(j==11 && i==2){
      matriz[i][j]=porta;
  }else if(i==22 && j<12){
    matriz[i][j]=parede;
  }else if(i==20 && j==0){
    matriz[i][j]=chaveV;
  }else if(i<=60 && j==15){
    matriz[i][j]=parede;
  }else if((i==26 && (j>3 && j<7))||(i==28) && (j>5 && j<10) || (i==30 && (j>0 && j<7))){
    matriz[i][j]=espinho;
  }else if(i==32 && j<14){
    matriz[i][j]=espinho;
  }else if(i==34 && j>1 && j<15){
    matriz[i][j]=espinho;
  }else if(i==36 && j>3 && j<13){
    matriz[i][j]=espinho;
  }else if(i==38 && j<13){
    matriz[i][j]=espinho;
  }else if(i==40 && j>2 && j!=12 && j!=13 && j<15){
    matriz[i][j]=espinho;
  }else if(i==42 && j>4 && j<15){
    matriz[i][j]=espinho;
  }else if(i==44 && j>1 && j<13){
    matriz[i][j]=espinho;
  }else if(i==46 && j<12){
    matriz[i][j]=espinho;
  }else if(i==48 && j>2 && j<15){
    matriz[i][j]=espinho;
  }else if(i==50 && j<12){
    matriz[i][j]=espinho;
  }else if(i==52 && j>2 &&j<15){
    matriz[i][j]=espinho;
  }else if(i==54 && j>4 && j<10){
    matriz[i][j]=espinho;
    //Botão da primeira parte
  }else if(i==56 && j==7){
    matriz[i][j]=botao;
  }else if((j==4 || j==10) && i>54 && i<59){
    matriz[i][j]=espinho;
  } else if(i==56 && j==57){
    matriz[i][j]=0;
  }else if(i==56 && j==56){
    matriz[i][j]=0;
    //AABAIXO CHAVE2
  }else if(i==59 && j==16){
    matriz[i][j]=chaveV
  }else if(i==56 && (j>14 && j<58)){
    matriz[i][j]=parede;
  }else if(i==59 && j==59){
    matriz[i][j]=tele;
  //ABAIXO TELETRANSPORTE FINAL
  }else if(i==30 && j==37){
    matriz[i][j]=tele;
  }else if(i==57 && (j>56 && j<=59)){
    matriz[i][j]=parede;
  }else if (i==2 && (j>=15 && j<58)){
    matriz[i][j]=parede;
  }else if(i==2 && j==50){
    matriz[i][j]=parede;
  }else if(i==58 && j==57){
    matriz[i][j]=porta;
  }else if((i>2 && i<60 && i!=58) && j==57){
    matriz[i][j]=parede;
    //ABAIXO O QUADRADO CENTRAL PARTE DE FORA
  }else if((i==34 && (j>25 && j<43)) || (j==42 && (i>20 && i<35)) || (i==20 && (j>25 && j<43)) || ((i>19 && i<35) && j==25)){
    matriz[i][j]=espinho;
  //ABAIXO O QUADRADO CENTRAL PARTE DE DENTRO
  }else if((i==32 && (j>27 && j<40))|| (i==22 && (j>27 && j<40)) || ((i>=22 && i<=32) && j==39) || ((i>=22 && i<=32) && j==28)){
    matriz[i][j]=espinho;
  //ABAIXO  CHAVE DENTRO DO QUADRADO
  }else if(i==33 && j==41){
    matriz[i][j]=chaveV;
  //FINAL DO JOGO
  }else if(i==27 && j==33){
    matriz[i][j]=portal;
  } else if(i>56 && i<59 && (j==54|| j==50|| j==46|| j==42|| j==38|| j==34|| j==30|| j==26 || j==22|| j==18)){
    matriz[i][j]=espinho;
  }else if(i>57 && (j==52 ||j==48 ||j==44 ||j==40 ||j==36 ||j==32 ||j==28 || j==24 || j==20)){
    matriz[i][j]=espinho;
  }else if(i==54 && (j>=20 && j<=56 )){
    matriz[i][j]=espinho;
  } else if(i==54 && (j>=15 && j<=18)){
    matriz[i][j]=espinho;
  } else if(i==51 && (j>=15 && j<=40)){
    matriz[i][j]=espinho;
  } else if(i==51 && (j>=42 && j<=56)){
    matriz[i][j]=espinho;
  } else if(i==48 && (j>=15 && j<=35)){
    matriz[i][j]=espinho;
  } else if(i==48 && (j>=37 && j<=56)){
    matriz[i][j]=espinho;
  } else if(i==45 && (j>=17 && j<=50 && j!= 48)){
    matriz[i][j]=espinho;
  } else if(i<=45 && i>=42 && i!=43 && (j==47)){
    matriz[i][j]=espinho;
  } else if(i==42 && j==48){
    matriz[i][j]=espinho;
    //Porta
  }else if(i==43 && j==47){
    matriz[i][j]=porta;
  } else if(i==45 && (j>=51 && j<=56)){
    matriz[i][j]=espinho;
  } else if((i>2 && i<45) && j==17){
    matriz[i][j]=espinho;
  } else if(i==3 && j==16){
    //tirar o espinho do lado oposto
    matriz[i][j]=botao;
  } else if((i>2 && i<45) && j==55){
    matriz[i][j]=espinho;
  } else if(i==3 && j==56){
    matriz[i][j]=botao;
    //ira tirar o quadrado de fora
  } else if(i==18 && j>=25 && j<=42){
    matriz[i][j]=espinho;
  } else if(i==16 && j>=25 && j<=42){
    matriz[i][j]=espinho;
  } else if(i==14 && j>=25 && j<=42){
    matriz[i][j]=espinho;
  } else if(i==12 && j>=25 && j<=42){
    matriz[i][j]=espinho;
  }else if(i==10 && j>=25 && j<=42){
      matriz[i][j]=espinho;
  }else if(i>=10 && i<=20 && (j==25||j==42)){
    matriz[i][j]=espinho;
  } else if(i>=2 && i<=44 && (j==19|| j==17 || j== 49|| j==51|| j==53)){
    matriz[i][j]=espinho;
  } else if(i==3 && (j==18|| j==16 || j== 50|| j==52|| j==54)){
    matriz[i][j]=botao;
  } else {
    matriz[i][j]=0;
  }
    }
  }
}



// Define as posições iniciais do personagem 
let x = 0;
let y = 0;
matriz[x][y] = heroi;
// Função para imprimir a matriz na tabela HTML
function imprimirMatriz() {
  const table = document.getElementById("matriz");
  table.innerHTML = "";
  for (let i = 0; i < tamanho; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < tamanho; j++) {
      const td = document.createElement("td");
      // Verifica se o valor na posição i,j é diferente de zero
      if (matriz[i][j] !== 0) {
        td.innerText = matriz[i][j];
  }
    tr.appendChild(td);
}
  table.appendChild(tr);
}
}
// Imprime a matriz inicial
imprimirMatriz();
// Escuta o evento de tecla pressionada
document.addEventListener("keydown", (event) => {
// Move o personagem de acordo com a tecla pressionada
switch (event.key) {
case "w":
if (x > 0 && matriz[x - 1][y] !== parede) {
  if (matriz[x - 1][y] === chaveV) {
    matriz[x - 1][y] = 0;
    matriz[x - 1][y] = heroi;
    matriz[x][y] = 0;
    x--;
}
  else if (matriz[x - 1][y] === espinho) { 
     matriz[x - 1][y] = 0;
     reiniciar();
}
  else if(matriz[x - 1][y] === tele){
    matriz[x - 1][y] = 0;
    matriz[x - 1][y] = heroi;
    matriz[x][y] = 0;
    x--;
}
  else if(matriz[x - 1][y] === portal){
      matriz[x - 1][y] = 0;
      matriz[x - 1][y] = heroi;
      matriz[x][y] = 0;
      x--;
}
  else if (matriz[x - 1][y] === botao) {
    matriz[x - 1][y] = heroi;
    matriz[x][y] = 0;
    x--;
  }
  else if (matriz[x - 1 ][y] === nada) {
    matriz[x][y] = 0;
    x--;
    matriz[x][y] = heroi;
}
  else if (matriz[x - 1][y] === 0) {
    
    matriz[x - 1][y] = heroi;
    matriz[x][y] = 0;
    x--;

}
}
break;
case "a":
if (y > 0 && matriz[x][y - 1] !== parede) {
  if (matriz[x][y - 1] === chaveV) {
    matriz[x][y - 1] = 0;
    matriz[x][y - 1] = heroi;
    matriz[x][y] = 0;
    y--;
}
  else if (matriz[x][y - 1] === espinho) { 
    matriz[x][y - 1] = 0;
    reiniciar();
}
  else if (matriz[x][y - 1] === tele) {
    matriz[x][y - 1] = 0;
    matriz[x][y - 1] = heroi;
    matriz[x][y] = 0;
    y--;
  }
   else if(matriz[x][y - 1] === portal){
      matriz[x][y - 1] = 0;
      matriz[x][y - 1] = heroi;
      matriz[x][y] = 0;
      y--;
}
  else if (matriz[x][y - 1] === botao) {
    matriz[x][y - 1] = heroi;
    matriz[x][y] = 0;
    y--;
  }
  else if (matriz[x][y - 1] === passagem) {
    matriz[x][y] = 0;
    y--;
    matriz[x][y] = heroi;
}
  else if (matriz[x][y - 1] === nada) {
    matriz[x][y]=0
    y--;
    matriz[x][y] = heroi;
}
  else if (matriz[x][y - 1] === 0) {
    
    matriz[x][y - 1] = heroi;
    matriz[x][y] = 0;
    y--;
}
}
break;
case "s":
if (x < tamanho - 1 && matriz[x + 1][y] !== parede) {
  if (matriz[x + 1][y] === chaveV) {
    matriz[x + 1][y] = 0;
    matriz[x + 1][y] = heroi;
    matriz[x][y] = 0;
    x++;
}
  else if (matriz[x + 1][y] === espinho) { 
    matriz[x + 1][y] = 0;
    reiniciar();
}
  else if (matriz[x + 1][y] === tele) {
    matriz[x + 1][y] = 0;
    matriz[x + 1][y] = heroi;
    matriz[x][y] = 0;
    x++;
}
  else if(matriz[x + 1][y] === portal){
      matriz[x + 1][y] = 0;
      matriz[x + 1][y] = heroi;
      matriz[x][y] = 0;
      x++;
}
  else if (matriz[x + 1][y] === botao) {
    matriz[x + 1][y] = heroi;
    matriz[x][y] = 0;
    x++;
  }
  else if (matriz[x +1 ][y] === nada) {
    matriz[x][y] = 0;
    x++;
    matriz[x][y] = heroi;
}
  else if (matriz[x + 1][y] === 0) {
    
    matriz[x + 1][y] = heroi;
    matriz[x][y] = 0;
    x++;

 
}
}
break;
case "d":
if (y < tamanho - 1 && matriz[x][y + 1] !== parede) {
  if (matriz[x][y + 1] === chaveV) {
    matriz[x][y + 1] = 0;
    matriz[x][y + 1] = heroi;
    matriz[x][y] = 0;
    y++;
} 
  else if (matriz[x][y + 1] === espinho) { 
    matriz[x][y + 1] = 0;
    reiniciar();
} 
  else if (matriz[x][y + 1] === tele) {
    matriz[x][y + 1] = 0;
    matriz[x][y + 1] = heroi;
    matriz[x][y] = 0;
    y++;
}
  else if(matriz[x][y + 1] === portal){
      matriz[x][y + 1] = 0;
      matriz[x][y + 1] = heroi;
      matriz[x][y] = 0;
      y++;
}
  else if (matriz[x][y + 1] === nada) {
    matriz[x][y] = 0;
    y++;
    matriz[x][y] = heroi;
}
  else if (matriz[x][y + 1] === botao) {
    matriz[x][y + 1] = heroi;
    matriz[x][y] = 0;
    y++;
  }
 else if (matriz[x][y + 1] === passagem) {
    matriz[x][y] = 0;
    y++;
    matriz[x][y] = heroi;
}
  
  
  else if (matriz[x][y + 1] === 0) {
    if (temChave) {
      matriz[x][y + 1] = heroi;
      matriz[x][y] = 0;
      y++;
}
  else{
     matriz[x][y + 1] = heroi;
    matriz[x][y] = 0;
    y++;
}
} 
}
break;
case "i":
if (x == 20 && y == 0) {
  chave1=true
  matriz[20][0] = heroi; // remove a chave1 da matriz
  matriz[2][11] = passagem;
}
if (x == 59 && y == 16) {
  chave2=true
  matriz[59][16] = heroi; // remove a chave2 da matriz
  matriz[43][47] = passagem;
}
if (x == 33 && y == 41) {
  temChave=true
  matriz[33][41] = heroi; // remove a chaveV da matriz
  matriz[58][57] = passagem; 
}
if (x == 56 && y == 7) {
  botao1=true
  matriz[56][7] = heroi; // remove o botão1
  matriz[52][14] = nada;
  matriz[48][14] = nada;
  matriz[42][14] = nada;
  matriz[40][14] = nada;
  matriz[34][14] = nada;
  matriz[0][15]= nada;
  matriz[1][15] = nada;
}
if (x == 3 && y == 16) {
  botaoC1=true
  matriz[3][16] = heroi; // remove o botaoC1
  matriz[45][56] = nada; 
  matriz[10][33] = nada; 
  matriz[10][34] = nada; 
}
if (x == 3 && y == 56) {
  botaoC2=true
  matriz[3][56] = heroi; // remove o botaoC2
  matriz[44][19] = nada; 
  matriz[12][33] = nada; 
  matriz[12][34] = nada; 
}
if (x == 3 && y == 18) {
  botaoC3=true
  matriz[3][18] = heroi; // remove o botaoC3
  matriz[41][49] = nada; 
  matriz[14][33] = nada; 
  matriz[14][34] = nada; 
}
if (x == 3 && y == 50) {
  botaoC4=true
  matriz[3][50] = heroi; // remove o botaoC4
  matriz[41][51] = nada; 
  matriz[16][33] = nada; 
  matriz[16][34] = nada; 
}
if (x == 3 && y == 52) {
  botaoC5=true
  matriz[3][52] = heroi; // remove o botaoC5
  matriz[41][53] = nada; 
  matriz[18][33] = nada; 
  matriz[18][34] = nada; 
}
if (x == 3 && y == 54) {
  botaoC6=true
  matriz[3][54] = heroi; // remove o botaoC6
  matriz[20][33] = nada; 
  matriz[20][34] = nada; 
}
if (x == 27 && y == 33) {
  window.location.href="fase4Pre.html"
}
if(x==30 && y==37 ||x==59 && y==59){
  teletransportar()
}
break;
}
//Verifica se o personagem saiu da posição[x][y] e recoloca algo

  if ((x != 20 || y != 0) && !chave1) {
      matriz[20][0] = chaveV; // Recoloca a chave no lugar inicial
  }

  if ((x != 56 || y != 7) && !botao1) {
    matriz[56][7] = botao; // Recoloca o botao1
  }if ((x != 3 || y != 16) && !botaoC1) {
    matriz[3][16] = botao; // Recoloca o botaoC1
  }if ((x != 3 || y != 56) && !botaoC2) {
    matriz[3][56] = botao; // Recoloca o botaoC2
  }if ((x != 3 || y != 18) && !botaoC3) {
    matriz[3][18] = botao; // Recoloca o botaoC3
  }if ((x != 3|| y != 50) && !botaoC4) {
    matriz[3][50] = botao; // Recoloca o botaoC4
  }if ((x != 3 || y != 52) && !botaoC5) {
    matriz[3][52] = botao; // Recoloca o botaoC5
  }if ((x != 3 || y != 54) && !botaoC6) {
    matriz[3][54] = botao; // Recoloca o botaoC6
  }

  if ((x != 59 || y != 16) && !chave2) {
    matriz[59][16] = chaveV; // Recoloca a chave2
  }if ((x != 33 || y != 41) && !temChave) {
    matriz[33][41] = chaveV; // Recoloca a chave final 
  }
  
  if ((x != 2 || y != 11) && chave1) {
    matriz[2][11] = passagem; // Recoloca passagem
  }if ((x != 58 || y != 57) && temChave) {
    matriz[58][57] = passagem; // Recoloca passagem
  }if ((x != 43 || y != 47) && chave2) {
    matriz[43][47] = passagem; // Recoloca passagem
  }

  if (x != 59 || y != 59) {
    matriz[59][59] = tele; // Recoloca o teleporte
  }if (x != 30 || y != 37) {
    matriz[30][37] = tele; // Recoloca o teleporte
  }

  if (x != 27 || y != 33) {
    matriz[27][33] = portal; // Recoloca o portal
  }

// Atualiza a tabela HTML com a nova matriz
imprimirMatriz();
});