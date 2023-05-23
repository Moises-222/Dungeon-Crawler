function voltarMenu() {
    window.location.href="menu.html"
}
const matriz = [];
const tamanho = 15;
let temChave = false;
let portal = "X";
let parede = "*";
let chaveF = "@";
let chaveV = "@";
let porta = "D";
let passagem= "=";
let heroi="&";
let imortalidade = "I"

// Cria a matriz preenchida com os elementos pré definidos
function fazerMatriz() {
    for (let i = 0; i < tamanho; i++) {
    matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            if (i==7 && j==7) {
                matriz[i][j] = imortalidade;
            }else {
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
            if (matriz[x - 1][y] === chaveV) {
                matriz[x - 1][y] = 0;
                matriz[x - 1][y] = heroi;
                matriz[x][y] = 0;
                x--;
            }else if(matriz[x - 1][y] === imortalidade){
                matriz[x - 1][y] = 0;
                matriz[x - 1][y] = heroi;
                matriz[x][y] = 0;
                x--;
            }else if (matriz[x - 1][y] === chaveF) {
                matriz[x - 1][y] = 0;
                matriz[x - 1][y] = heroi;
                matriz[x][y] = 0;
                x--;
            } else if (matriz[x - 1][y] === 0) {
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
        }else if(matriz[x][y - 1] === portal){
            matriz[x][y - 1] = 0;
            matriz[x][y - 1] = heroi;
            matriz[x][y] = 0;
            y--;
        }else if (matriz[x][y - 1] === imortalidade) {
            matriz[x][y - 1] = 0;
            matriz[x][y - 1] = heroi;
            matriz[x][y] = 0;
            y--;
        } else if (matriz[x][y - 1] === 0) {
            matriz[x][y - 1] = heroi;
            matriz[x][y] = 0;
            y--;
        } else if (matriz[x][y - 1] === passagem) {
            matriz[x][y] = 0;
            y--;
            matriz[x][y] = heroi;
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
        }else if(matriz[x + 1][y] === portal){
            matriz[x + 1][y] = 0;
            matriz[x + 1][y] = heroi;
            matriz[x][y] = 0;
            x++;
        } else if(matriz[x + 1][y] === imortalidade){
            matriz[x + 1][y] = 0;
            matriz[x + 1][y] = heroi;
            matriz[x][y] = 0;
            x++;
        } else if (matriz[x + 1][y] === imortalidade) {
            matriz[x + 1][y] = 0;
        } else if (matriz[x + 1][y] === 0) {
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
        }else if(matriz[x][y + 1] === portal){
            matriz[x][y + 1] = 0;
            matriz[x][y + 1] = heroi;
            matriz[x][y] = 0;
            y++;
        }else if (matriz[x][y + 1] === chaveF) {
           matriz[x][y + 1] = 0;
        } else if (matriz[x][y + 1] === 0) {
            matriz[x][y + 1] = heroi;
            matriz[x][y] = 0;
            y++;
        } else if (matriz[x][y + 1] === imortalidade) {
            matriz[x][y] = 0;
            y++;
            matriz[x][y] = heroi;
    }
}
break;

case "i":
    if (x == 1 && y == 11) {
        matriz[1][11] = heroi; // remove a chave da matriz
        matriz[12][10] = passagem;
        temChave = true;
    }
    if (x == 12 && y == 13) {
        window.location.href="fase2Pre.html";
        }
    if(x==7 && y==7){
        alert(`eu o avisei, não posso deixar um imortal solto por esse mundo, agora fique nessa tumba infernal até o fim dos tempos`
        )
        matriz[5][3]=parede;
        matriz[6][3]=parede;
        matriz[7][3]=parede;
        matriz[8][3]=parede;
        matriz[9][3]=parede;
        ///////////////////
        matriz[5][4]=parede;
        matriz[5][5]=parede;
        matriz[5][6]=parede;
        matriz[5][7]=parede;
        matriz[5][8]=parede;
        matriz[5][9]=parede;
        matriz[5][10]=parede;
        ///////////////////
        matriz[5][10]=parede;
        matriz[6][10]=parede;
        matriz[7][10]=parede;
        matriz[8][10]=parede;
        matriz[9][10]=parede;
        //////////////////
        matriz[10][4]=parede;
        matriz[10][5]=parede;
        matriz[10][6]=parede;
        matriz[10][7]=parede;
        matriz[10][8]=parede;
        matriz[10][9]=parede;
        matriz[10][10]=parede;
        matriz[10][3]=parede;
        

    }
 break;
}
//Verifica se o personagem saiu da posição[x][y] e recoloca algo


if (x != 7 || y != 7) {
    matriz[7][7] = imortalidade; //Recoloca o portal
    }

// Atualiza a tabela HTML com a nova matriz
imprimirMatriz();
});