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

// Cria a matriz preenchida com os elementos pré definidos
function fazerMatriz() {
    for (let i = 0; i < tamanho; i++) {
    matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            if (i == 10 && j > 9) {
                matriz[i][j] = parede;
                } else if (i > 10 && i != 12 && j == 10) {
                matriz[i][j] = parede;
                } else if (i == j && i < 10 && i > 0) {
                matriz[i][j] = parede;
                } else if (j == 10 && i == 12) {
                matriz[i][j] = porta;
                } else if (j > 9 && j < 13 && i < 3 && j != 11) {
                matriz[i][j] = chaveF;
                } else if (i >= 0 && j == 11 && i < 8 && i != 1) {
                matriz[i][j] = chaveF;
                } else if (i == 7 && j == 12) {
                matriz[i][j] = chaveF;
                } else if (i == 5 && j == 12) {
                matriz[i][j] = chaveF;
                } else if (i == 1 && j == 11) {
                matriz[i][j] = chaveV;
                } else if (i == 12 && j == 13) {
                matriz[i][j] = portal;
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
            }else if(matriz[x - 1][y] === portal){
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
        }else if (matriz[x][y - 1] === chaveF) {
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
        }else if (matriz[x + 1][y] === chaveF) {
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
        } else if (matriz[x][y + 1] === passagem) {
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
 break;
}
//Verifica se o personagem saiu da posição[x][y] e recoloca algo

if ((x != 1 || y != 11) && !temChave) {
     matriz[1][11] = chaveV; // Recoloca a chave no lugar inicial
} 
if (x != 12 || y != 13) {
    matriz[12][13] = portal; //Recoloca o portal
    }
if ((x != 12 || y != 10) && temChave) {
    matriz[12][10] = passagem; //Recoloca a passagem
        }
// Atualiza a tabela HTML com a nova matriz
imprimirMatriz();
});