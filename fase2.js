
function voltarMenu() {
    window.location.href="menu.html"
}
const matriz = [];
const tamanho = 30;
let botaoChave=false;
let botaoAtalho=false;
let temChave=false;
let portal = "X";
let heroi="&";
const parede  = "*";
const chaveV = "@";
const porta = "D";
const passagem= "=";
const espinho = "#";
let vidas = 3;
let botao="O";
let nada="";
fazerMatriz();

function reiniciar() {
  botaoChave=false;
  botaoAtalho=false;
  temChave=false;
   vidas--;
   localStorage.setItem("mortes", vidas);
   if (vidas==0) {
     // redireciona para a mesma página para reiniciar o jogo
    window.location.href="telaMorte.html";
   } else {
     // reinicia o jogo sem atualizar a página
     fazerMatriz();
     x = tamanho-1;
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
    if(j==0){
      if(i==19){
        matriz[i][j]=espinho;
    }
      else if(i==11){
        matriz[i][j]=espinho;
    }
      else if(i==7){
        matriz[i][j]=espinho;
    }     
      else{
        matriz[i][j]=0;
 }
 }
    else if(j==1){
      if(i<28 && i>24){
        matriz[i][j]=espinho;
  }
      else if(i<24 && i>21){
        matriz[i][j]=espinho;
  }
      else if(i<20 && i>14){
        matriz[i][j]=espinho;
  }
      else if(i<14 && i>10){
         matriz[i][j]=espinho;
  }
  
      else if(i<8 && i>4 && i !=6){
        matriz[i][j]=espinho;
  }
      else if(i==6){
        matriz[i][j]=porta;
  }
      else if(i==4){
        matriz[i][j]=parede;
  }
      else{
        matriz[i][j]=0;
 }

 }
  else if(j==2){
    if(i==29){
      matriz[i][j]=espinho;
  }
    else if(i<23 && i>20){
      matriz[i][j]=espinho;
  }
    else if(i==15){
      matriz[i][j]=espinho;
  }
    else if(i==12){
     matriz[i][j]=espinho;
  }
    else if(i==4){
      matriz[i][j]=parede;
  }
    else{
       matriz[i][j]=0;
 }

}
  else if(j==3){
    if(i<30 && i>27){
      matriz[i][j]=espinho;
  }
   else if(i==26){
      matriz[i][j]=espinho;
  }
    else if(i==24){
     matriz[i][j]=espinho;
  }
    else if(i==21){
     matriz[i][j]=espinho;
  }
    else if(i<20&& i>16){
      matriz[i][j]=espinho;
  }
    else if(i==12){
      matriz[i][j]=espinho;
  }
    else if(i<10 && i>5){
      matriz[i][j]=parede;
  }
    else if(i==4){
      matriz[i][j]=parede;
  }
    else if(i==1){
      matriz[i][j]=chaveV;
  }
    else{
      matriz[i][j]=0;
 }
}
  else if(j==4){
    if(i==26){
      matriz[i][j]=espinho;
  }
    else if(i<25 && i>20 && i!=22){
     matriz[i][j]=espinho;
  }
    else if(i==19){
      matriz[i][j]=espinho;
  }
    else if(i==13){
      matriz[i][j]=espinho;
  }
    else if(i==9){
      matriz[i][j]=parede;
  }
    else if(i==8){
      matriz[i][j]=botao;
  }
    else if(i==6){
      matriz[i][j]=parede;
  }
    else if(i==4){
      matriz[i][j]=parede;
  }
    else{
      matriz[i][j]=0;
 }
}
  else if(j==5){
    if(i==29){
      matriz[i][j]=espinho;
  }
    else if(i==27){
      matriz[i][j]=espinho;
  }
    else if(i==26){
      matriz[i][j]=espinho;
  }
    else if(i==24){
      matriz[i][j]=espinho;
  }
   else if(i==21){
      matriz[i][j]=espinho;
  }
    else if(i==19){
      matriz[i][j]=espinho;
  }
    else if(i<18 && i>9){
      matriz[i][j]=espinho;
  }
  else if(i==9){
      matriz[i][j]=parede;
  }
  
    else if(i==6){
      matriz[i][j]=parede;
  }
    else if(i<5 && i>=0 && i!=2){
      matriz[i][j]=parede;
  }
    else if(i==2){
      matriz[i][j]=parede;
  }
    else{
      matriz[i][j]=0;
 }
}
  else if(j==6){
    if(i==27){
      matriz[i][j]=espinho;
  }
    else if(i==24){
     matriz[i][j]=espinho;
  }
    else if(i==22){
      matriz[i][j]=espinho;
  }
    else if(i==19){
      matriz[i][j]=espinho;
  }
    else if(i==19){
     matriz[i][j]=espinho;
  }
    else if(i==9){
      matriz[i][j]=parede;
  }
    else if(i==6){
      matriz[i][j]=parede;
  }
    else if(i==3){
      matriz[i][j]=espinho;
  }
    else{
      matriz[i][j]=0;
 }
}
  else if(j==7){
    if(i==27){
      matriz[i][j]=espinho;
  }
    else if(i==25){
      matriz[i][j]=espinho;
  }
    else if(i==22){
      matriz[i][j]=espinho;
  }
    else if(i==19){
      matriz[i][j]=espinho;
  }
    else if(i==17){
      matriz[i][j]=espinho;
  }
    else if(i<15 && i>11 &&i!=13){
      matriz[i][j]=espinho;
  }
    else if(i==9){
      matriz[i][j]=parede;
  }
    else if(i==8){
      matriz[i][j]=espinho;
  }
    else if(i==2){
      matriz[i][j]=espinho;
  }
    else{
      matriz[i][j]=0;
 }
}
  else if(j==8){
   if(i==28){
      matriz[i][j]=espinho;
  }
    else if(i==25){
      matriz[i][j]=espinho;
  }
    else if(i<24 && i>20){
      matriz[i][j]=espinho;
  }
    else if(i<20 && i>15){
      matriz[i][j]=espinho;
  }
    else if(i==14){
      matriz[i][j]=espinho;
  }
    else if(i==12){
      matriz[i][j]=espinho;
  }
    else if(i==10){
      matriz[i][j]=espinho;
  }
    else if(i<8 && i>3){
      matriz[i][j]=espinho;
  }
    else if(i==1){
      matriz[i][j]=espinho;
  }
    else{
      matriz[i][j]=0;
 }
}
  else if(j==9){
    if(i==28){
      matriz[i][j]=espinho;
  }
    else if(i==26){
      matriz[i][j]=espinho;
  }
    else if(i==23){
      matriz[i][j]=espinho;
  }
    else if(i==21){
      matriz[i][j]=espinho;
  }
    else if(i==19){
      matriz[i][j]=espinho;
  }
    else if(i==17){
      matriz[i][j]=espinho;
  }
    else if(i==14){
      matriz[i][j]=espinho;
  }
    else if(i==12){
      matriz[i][j]=espinho;
  }
    else if(i==8){
      matriz[i][j]=espinho;
  }
    else if(i==6){
      matriz[i][j]=espinho;
  }
    else if(i==3){
      matriz[i][j]=espinho;
  }
    else if(i==1){
      matriz[i][j]=espinho;
  }
    else{
      matriz[i][j]=0;
 }
}
  else if(j==10){
    if(i<29 && i>26){
      matriz[i][j]=espinho;
  }
    else if(i==24){
      matriz[i][j]=espinho;
  }
    else if(i==21){
      matriz[i][j]=espinho;
  }
    else if(i==17){
      matriz[i][j]=espinho;
  }
    else if(i<16 && i>13){
      matriz[i][j]=espinho;
  }
    else if(i<12 && i>8){
      matriz[i][j]=espinho;
  }
    else if(i==6){
      matriz[i][j]=espinho;
  }
    else if(i==3){
      matriz[i][j]=espinho;
  }
    else if(i==1){
      matriz[i][j]=espinho;
  }
    else{
      matriz[i][j]=0;
}
}
  else if(j==11){
    if(i==26){
      matriz[i][j]=espinho;
  }
    else if(i<25 && i>22){
      matriz[i][j]=espinho;
  }
    else if(i<21 && i>17){
      matriz[i][j]=espinho;
  }
    else if(i<17 && i>14){
      matriz[i][j]=espinho;
  }
    else if(i==13){
      matriz[i][j]=espinho;
  }
    else if(i<8 && i>4){
      matriz[i][j]=espinho;
  }
    else if(i==3){
      matriz[i][j]=espinho;
  }
    else if(i==1){
      matriz[i][j]=espinho;
  }
    else{
      matriz[i][j]=0;
 }
}
  else if(j==12){
    if(i==28){
      matriz[i][j]=espinho;
  }
    else if(i==26){
      matriz[i][j]=espinho;
  }
    else if(i==24){
      matriz[i][j]=espinho;
  }
    else if(i==22){
      matriz[i][j]=espinho;
  }
    else if(i==15){
      matriz[i][j]=espinho;
  }
    else if(i<14 && i>7){
      matriz[i][j]=espinho;
  }
    else if(i==3){
      matriz[i][j]=espinho;
  }
    else if(i==1){
      matriz[i][j]=espinho;
  }
    else{
      matriz[i][j]=0;
 }
}
  else if(j==13){
    if(i==28){
      matriz[i][j]=espinho;
  }
    else if(i==26){
      matriz[i][j]=espinho;
  }
    else if(i<22 && i>16){
      matriz[i][j]=espinho;
  }
    else if(i==15){
      matriz[i][j]=espinho;
  }
    else if(i==4){
      matriz[i][j]=espinho;
  }
    else if(i==1){
      matriz[i][j]=espinho;
  }
    else{
      matriz[i][j]=0;
 }
}
  else if(j==14){
    if(i==28){
      matriz[i][j]=espinho;
  }
    else if(i<26 && i>22){
      matriz[i][j]=espinho;
  }
    else if(i==20){
      matriz[i][j]=espinho;
  }
    else if(i==15){
      matriz[i][j]=espinho;
  }
    else if(i<14 && i>4 && i!=6 && i!=7){
      matriz[i][j]=espinho;
  }
    else if(i==2){
      matriz[i][j]=espinho;
  }
    else{
      matriz[i][j]=0;
 }
}
  else if(j==15){
    if(i==27){
      matriz[i][j]=espinho;
  }
    else if(i==22){
      matriz[i][j]=espinho;
  }
    else if(i<19 && i>13){
      matriz[i][j]=espinho;
  }
    else if(i==11){
      matriz[i][j]=espinho;
  }
    else if(i==8){
      matriz[i][j]=espinho;
  }
    else if(i==6){
      matriz[i][j]=espinho;
  }
  else if(i==2){
      matriz[i][j]=espinho;
  }
    else{
      matriz[i][j]=0;
 }
}
  else if(j==16){
    if(i==29){
      matriz[i][j]=espinho;
}
    else if(i==27){
      matriz[i][j]=espinho;
}
    else if(i==24){
      matriz[i][j]=espinho;
}
    else if(i<22 && i>18 && i!=20 && i!=19){
      matriz[i][j]=espinho;
}
    else if(i==11){
      matriz[i][j]=espinho;
}
    else if(i==8){
      matriz[i][j]=espinho;
}
    else if(i==6){
      matriz[i][j]=espinho;
}
    else if(i==4){
      matriz[i][j]=espinho;
}
    else if(i==2){
      matriz[i][j]=espinho;
}
    else{
      matriz[i][j]=0;
 }
}
  else if(j==17){
    if(i==29){
      matriz[i][j]=espinho;
  }
    else if(i<27 && i>24){
      matriz[i][j]=espinho;
  }
    else if(i==23){
      matriz[i][j]=espinho;
  }
    else if(i==21){
      matriz[i][j]=espinho;
  }
    else if(i<20 && i>12){
      matriz[i][j]=espinho;
  }
    else if(i<10 && i>7){
      matriz[i][j]=espinho;
  }
    else if(i==6){
      matriz[i][j]=espinho;
  }
    else if(i==4){
      matriz[i][j]=espinho;
  }
    else if(i==2){
      matriz[i][j]=espinho;
  }
    else{
      matriz[i][j]=0;
 }
}
  else if(j==18){
    if(i==28){
      matriz[i][j]=espinho;
    }
    else if(i==25){
      matriz[i][j]=espinho;
    }
    else if(i==23){
      matriz[i][j]=espinho;
    }
    else if(i==21){
      matriz[i][j]=espinho;
    }
    else if(i<13 && i>8){
      matriz[i][j]=espinho;
    }
    else if(i==4){
      matriz[i][j]=espinho;
    }
    else if(i==2){
      matriz[i][j]=espinho;
    }
    else{
      matriz[i][j]=0;
 }
}
  else if(j==19){
    if(i==27){
      matriz[i][j]=espinho;
    }
    else if(i==25){
      matriz[i][j]=espinho;
    }
    else if(i==21){
      matriz[i][j]=espinho;
    }
    else if(i==18){
      matriz[i][j]=espinho;
    }
    else if(i==13){
      matriz[i][j]=espinho;
    }
    else if(i<7 && i>4){
      matriz[i][j]=espinho;
    }
    else if(i==3){
      matriz[i][j]=espinho;
    }
    else{
      matriz[i][j]=0;
 }
}
  else if(j==20){
    if(i==29){
      matriz[i][j]=espinho;
  }
    else if(i<25 && i > 21){
      matriz[i][j]=espinho;
  }
    else if(i==20){
      matriz[i][j]=espinho;
  }
    else if(i<18 && i>13){
      matriz[i][j]=espinho;
  }
  else if(i<=11 && i >=10){
      matriz[i][j]=espinho;
  }
    else if(i==7){
      matriz[i][j]=espinho;
  }
  else if(i==3){
      matriz[i][j]=espinho;
  }
    else{
      matriz[i][j]=0;
 }
}
  else if(j==21){
    if (i==29) {
      matriz[i][j]=espinho;
    }
    else if (i<=27 && i>=26) {
      matriz[i][j]=espinho;
    }
    else if (i==23) {
      matriz[i][j]=espinho;
    }
    else if (i==19) {
      matriz[i][j]=espinho;
    }
    else if (i==12){
      matriz[i][j]=espinho;
    }
    else if (i<=5 && i>=4) {
      matriz[i][j]=espinho;
    }
    else if (i<=9 && i>=8) {
      matriz[i][j]=espinho;
    }
    
    else{
      matriz[i][j]=0;
 } 
}
  else if(j==22){
    if(i==29){
      matriz[i][j]=espinho;
    }
    else if(i==27){
      matriz[i][j]=espinho;
    }
    else if(i==21){
      matriz[i][j]=espinho;
    }
    else if(i<=18 && i>=16){
      matriz[i][j]=espinho;
    }
    else if(i==13){
      matriz[i][j]=espinho;
    }
    else if(i==6){
      matriz[i][j]=espinho;
    }
    else{
      matriz[i][j]=0;
 }   
  }
  else if(j==23){
    if(i==29){
      matriz[i][j]=espinho;
    }
    else if(i==26){
      matriz[i][j]=espinho;
    }
    else if(i<=24 && i >=22){
      matriz[i][j]=espinho;
    }
    else if(i==20){
      matriz[i][j]=espinho;
    }
    else if(i==18){
      matriz[i][j]=espinho;
    }
    else if(i==15){
      matriz[i][j]=espinho;
    }
    else if(i<=11 && i>=7){
      matriz[i][j]=espinho;
    }
    else{
      matriz[i][j]=0;
 }
  }
  else if(j==24){
    if(i==28){
      matriz[i][j]=espinho;
    }
    else if(i==25){
      matriz[i][j]=espinho;
    }
    else if(i==20){
      matriz[i][j]=espinho;
    }
    else if(i==18){
      matriz[i][j]=espinho;
    }
    else if(i<=14 && i>=12){
      matriz[i][j]=espinho;
    }
    else if(i==5){
      matriz[i][j]=espinho;
    }
    else if(i<=4 && i>=0 && i!=1){
      matriz[i][j]=parede;
    }
    else if(i==1){
      matriz[i][j]=porta;
    }
    else{
      matriz[i][j]=0;
 }
  }
  else if(j==25){
    if(i==27){
      matriz[i][j]=espinho;
    }
    else if(i==24){
      matriz[i][j]=espinho;
    }
    else if(i==19){
      matriz[i][j]=espinho;
    }
    else if(i==9){
      matriz[i][j]=espinho;
    }
    else if(i==6){
      matriz[i][j]=espinho;
    }
    else if(i==4){
      matriz[i][j]=parede;
    }
    else{
      matriz[i][j]=0;
 }
  }
  else if(j==26){
    if(i==27){
      matriz[i][j]=espinho;
  }
    else if(i==17){
      matriz[i][j]=espinho;
  }
    else if(i==10){
      matriz[i][j]=espinho;
  }
    else if(i==7){
      matriz[i][j]=espinho;
  }
    else if(i==4){
      matriz[i][j]=parede;
    }
    else{
      matriz[i][j]=0;
 }
}
  else if(j==27){
    if(i<=25 && i>=10){
      matriz[i][j]=espinho;
  }
    else if(i==8){
      matriz[i][j]=espinho;
  }
    else if(i==4){
      matriz[i][j]=parede;
    }
    else{
      matriz[i][j]=0;
}
}
  else if(j==28){
    if(i==27){
      matriz[i][j]=espinho;
}
    else if(i==9){
      matriz[i][j]=espinho;
  }
    else if(i==4){
      matriz[i][j]=parede;
    }
    else if(i==1){
        matriz[i][j]=portal;
      }
    else{
      matriz[i][j]=0;
}
}
  else if(j==29){
    if(i==27){
      matriz[i][j]=espinho;
}   
    else if(i==25){
      matriz[i][j]=espinho;
  }
    else if(i==4){
      matriz[i][j]=parede;
    }
    else{
      matriz[i][j]=0;
}
}
 
  }
  }
  }
  
  // Define as posições iniciais do personagem e da chave
  let x = 29;
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
      y--;
      matriz[x][y] = heroi;
}
    else if (matriz[x][y - 1] === 0) {
        matriz[x][y - 1] = heroi;
        matriz[x][y] = 0;
        y--
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
      matriz[x][y + 1] = heroi;
      matriz[x][y] = 0;
      y++;

} 
}
  break;
    case "i":
      //Interacao chaveV
    if (x == 1 && y == 3) {
      matriz[1][3] = heroi; // remove a chave da matriz
      matriz[1][24] = passagem;
      temChave = true;
      matriz[3][4]=botao;
}
      //Interacao botaoAtalho
    if (x == 3 && y == 4) {
      matriz[3][4] = heroi; // remove o botaoAtalho
      botaoAtalho=true;
      matriz[2][5] = nada; 
}
      //Interação botaoChave
    if (x == 8 && y == 4) {
      matriz[8][4] = heroi; // remove o botaoChave
      botaoChave=true;
      matriz[6][1] = passagem;
      matriz[8][7] = nada;
      matriz[6][7]=parede;
      matriz[11][0]=nada;
}
    if (x == 1 && y == 28) {
      window.location.href="fase3Pre.html"
}
  break;
}

//Verifica se o personagem saiu da posição[x][y] e recoloca algo

    if ((x != 1 || y != 3) && !temChave) {
      matriz[1][3] = chaveV; // Recoloca a chave no lugar inicial
  }
    if ((x != 3 || y != 4) && temChave && !botaoAtalho) {
      matriz[3][4] = botao; // Recoloca o botaoAtalho 
  }
    if ((x != 8 || y != 4) && !temChave && !botaoChave) {
      matriz[8][4] = botao; // Recoloca o botaoChave
  }
    if (x != 1 || y != 28) {
      matriz[1][28] = portal; // Recoloca o portal
}
    if ((x != 6 || y != 1) && botaoChave) {
  matriz[6][1] = passagem; // Recoloca passagem chave
}
    if ((x != 1 || y != 24) && temChave) {
      matriz[1][24] = passagem; // Recoloca passagem final
}
// Atualiza a tabela HTML com a nova matriz
  imprimirMatriz();
});