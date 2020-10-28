// Create tic tac board
let container = document.querySelector('.wrapper');
container.insertAdjacentHTML('afterbegin', '<div class="toe_board"></div>');
let toeBoard = document.querySelector('.toe_board');

createBoard()
function createBoard(){
    for(let i = 0; i < 9; i++){
        let div = document.createElement('div');
        toeBoard.append(div);
            if(i < 3){
                div.className = 'tile'
            }else if(i < 6){
                div.className = 'tile1'
            }else if(i > 5){
                div.className = 'tile2'
            }
    }
}

//add event listener for a tile`s
Object.values(toeBoard.children).forEach(element => {
    element.addEventListener('click', draw, {once: true}) 
});


//PlayerBtn and count of turns | play againbtn
let playerBtn1 = document.querySelector('.player1');
let playerBtn2 = document.querySelector('.player2');
playerBtn1.classList.add('orange')

let countText = document.querySelector('p');
let playAgainBtn = document.querySelector('button');
playAgainBtn.addEventListener('click', pAgain);

function pAgain(){
    location.reload()
};

// Game instruction
const tile = Object.values(document.querySelectorAll('.tile'));
const tile1 = Object.values(document.querySelectorAll('.tile1'));
const tile2 = Object.values(document.querySelectorAll('.tile2'));
const count = document.querySelector('.turns_count')
let player1 = true;

function draw(e){
    if(player1){
        if(e.target.innerHTML == ''){
            e.target.innerHTML = "X";
            count.innerHTML = Number(count.innerHTML) + 1;
        }
        playerBtn1.classList.toggle('orange')
        playerBtn2.classList.toggle('orange')
    }else{
        if(e.target.innerHTML == ''){
            e.target.innerHTML = "O";
            count.innerHTML = Number(count.innerHTML) + 1;
        }
        playerBtn1.classList.toggle('orange')
        playerBtn2.classList.toggle('orange')
    }
    
    if(player1){
        player1 = false;
    }else{
        player1 = true;
    }

    for(let i = 0; i < 8; i++){
        if(i == 0){
            if(tile[0].innerHTML == tile[1].innerHTML && tile[0].innerHTML == tile[2].innerHTML && tile[0].innerHTML != ''){
                winner(tile[0])
            }
        }else if(i == 1){
            if(tile1[0].innerHTML == tile1[1].innerHTML && tile1[0].innerHTML == tile1[2].innerHTML && tile1[0].innerHTML != ''){
                winner(tile1[0])
            }
        }else if(i == 2){
            if(tile2[0].innerHTML == tile2[1].innerHTML && tile2[0].innerHTML == tile2[2].innerHTML && tile2[0].innerHTML != ''){
                winner(tile2[0])
            }
        }else if(i == 3){
            if(tile[0].innerHTML == tile1[0].innerHTML && tile[0].innerHTML == tile2[0].innerHTML && tile[0].innerHTML != ''){
                winner(tile[0])
            }
        }else if(i == 4){
            if(tile[1].innerHTML == tile1[1].innerHTML && tile[1].innerHTML == tile2[1].innerHTML && tile1[1].innerHTML != ''){
                winner(tile[1])
            }
        }else if(i == 5){
            if(tile[2].innerHTML == tile1[2].innerHTML && tile[2].innerHTML == tile2[2].innerHTML && tile[2].innerHTML != ''){
                winner(tile[2])
            }
        }else if(i == 6){
            if(tile[0].innerHTML == tile1[1].innerHTML && tile[0].innerHTML == tile2[2].innerHTML && tile[0].innerHTML != ''){
                winner(tile[0])
            }
        }else if(i == 7){
            if(tile[2].innerHTML == tile1[1].innerHTML && tile[2].innerHTML == tile2[0].innerHTML && tile[2].innerHTML != ''){
                winner(tile[2])
            }
        }
    }

    if(Number(count.innerHTML) == 9){
        winner('draw')
    }

}

//Function that display a winner
const border = document.querySelector('.board_menu')
function winner(elem){
    if(elem.innerHTML == 'X'){
        border.classList.toggle('player-win');
        border.insertAdjacentHTML('beforeend', '<h1>Player 1 win</h1>');
    }else if(elem.innerHTML == 'O'){
        border.classList.toggle('player-win');
        border.insertAdjacentHTML('beforeend', '<h1>Player 2 win</h1>')
    }else if(elem == 'draw'){
        border.classList.toggle('player-draw');
        border.insertAdjacentHTML('beforeend', '<h1>DRAW</h1>')
    }

    Object.values(toeBoard.children).forEach(element => {
        element.removeEventListener('click', draw) 
    });
}