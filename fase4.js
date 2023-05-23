function voltarMenu() {
    window.location.href="menu.html"
}
const matriz = [];
const tamanho = 15;
let parede = "*";
let texto1 = false;
let texto2 = false;
let texto3 = false;
let portal = "X";
let heroi="&";
let texto= "Y";

// Cria a matriz preenchida com os elementos pré definidos
function fazerMatriz() {
    for (let i = 0; i < tamanho; i++) {
    matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            if ((i == 10 && j == 11) || (i==7 && j==11) || (i==4 && j==11 )) {
                matriz[i][j] = texto
            } else if((i==14 && j==5) || (i==14 && j==9)){
                matriz[i][j] = portal 
            } else if(i==13){
                matriz[i][j]=parede
            } else {
                matriz[i][j] = 0;
            }
        }
    }
}
fazerMatriz();

// Define as posições iniciais do personagem e da chave
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
            if(matriz[x - 1][y] === portal){
                matriz[x - 1][y] = 0;
                matriz[x - 1][y] = heroi;
                matriz[x][y] = 0;
                x--;
            }else if (matriz[x - 1][y] === 0) {
              matriz[x - 1][y] = heroi;
              matriz[x][y] = 0;
              x--;
            } else if (matriz[x - 1][y] === texto) {
                matriz[x - 1][y] = heroi;
                matriz[x][y] = 0;
                x--;

        } 
    }
break;


case "a":
    if (y > 0 && matriz[x][y - 1] !== parede) {
         if(matriz[x][y - 1] === portal){
            matriz[x][y - 1] = 0;
            matriz[x][y - 1] = heroi;
            matriz[x][y] = 0;
            y--;
        } else if (matriz[x][y - 1] === texto) {
            matriz[x][y - 1] = heroi;
            matriz[x][y] = 0;
            y--;
        } else if (matriz[x][y - 1] === 0) {
            matriz[x][y - 1] = heroi;
            matriz[x][y] = 0;
            y--;
        } 
    }
break;

case "s":
    if (x < tamanho - 1 && matriz[x + 1][y] !== parede) {
         if(matriz[x + 1][y] === portal){
            matriz[x + 1][y] = 0;
            matriz[x + 1][y] = heroi;
            matriz[x][y] = 0;
            x++;
        } else if (matriz[x + 1][y] === 0) {
            matriz[x + 1][y] = heroi;
            matriz[x][y] = 0;
            x++;
        } else if (matriz[x + 1][y] === texto) {
            matriz[x + 1][y] = heroi;
            matriz[x][y] = 0;
            x++;
        }
  }
break;
case "d":
    if (y < tamanho - 1 && matriz[x][y + 1] !== parede) {
        if(matriz[x][y + 1] === portal){
            matriz[x][y + 1] = 0;
            matriz[x][y + 1] = heroi;
            matriz[x][y] = 0;
            y++;
        } else if (matriz[x][y + 1] === 0) {
            matriz[x][y + 1] = heroi;
            matriz[x][y] = 0;
            y++;
        } else if (matriz[x][y + 1] === texto) {
            matriz[x][y] = 0;
            y++;
            matriz[x][y] = heroi;
        }
}
break;

case "i":
    if(x ==7 && y==11){
        alert("Escondi tal poder nessa tumba para afastar todos os que desejavam a habilidade, mas se você chegou até aqui, significa que é habilidoso, por isso o digo: desista da imortalidade, ela não lhe trará paz, apenas morte e dor")
        chave1=true;
    } if(x==4 && y==11){
        chave2=true;
        alert("Você não é o primeiro que irá ler isso, e com certeza também não será o último, se você for inteligente, desista, coloquei um portal que lhe teletransportará para fora dessa tumba, pelo seu própio bem, faça isso")
    } if(x==10 && y==11){
        alert("!!! DESISTA !!!")
        chave3=true;
    } if(chave1 && chave2 && chave3){
        matriz[13][0]=0;
        matriz[13][1]=0;
        matriz[13][2]=0;
        matriz[13][3]=0;
        matriz[13][4]=0;
        matriz[13][5]=0;
        matriz[13][6]=0;
        matriz[13][7]=0;
        matriz[13][8]=0;
        matriz[13][9]=0;
        matriz[13][10]=0;
        matriz[13][11]=0;
        matriz[13][12]=0;
        matriz[13][13]=0;
        matriz[13][14]=0;
    }
    
    if((x==14 && y==5) && chave1 && chave2 && chave3){
        alert("Então você fez sua escolha...");
        window.location.href="bad.html";
    }
    if((x==14 && y==9) && chave1 && chave2 && chave3){
        alert("Obrigado por entender, tenha uma boa vida...");
        window.location.href="creditos.html";
    }

 break;
}
//Verifica se o personagem saiu da posição[x][y] e recoloca algo

if ((x != 10 || y != 11)) {
     matriz[10][11] = texto; // Recoloca o texto
} if ((x != 7 || y != 11)) {
    matriz[7][11] = texto; // Recoloca o texto
} if ((x != 4 || y != 11)) {
    matriz[4][11] = texto; // Recoloca o texto
} if(x !=14 || y !=5){
    matriz[14][5] = portal;
} if(x !=14 || y !=9){
    matriz[14][9] = portal;
}
// Atualiza a tabela HTML com a nova matriz
imprimirMatriz();
});