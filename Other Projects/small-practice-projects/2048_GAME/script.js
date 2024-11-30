// 1. Inialization and setup
document.addEventListener('DOMContentLoaded', function(){
    const board = document.querySelector('.board');
    const scoreDisplay = document.getElementById('score');
    const squares = [];
    let score = 0;

    // 2. Creating the Game Board
    function createBoard(){
        for (let i = 0; i < 16; i++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.innerHTML = '';
            board.appendChild(square);
            squares.push(square);
        }
        generateNumber();
        generateNumber();
    }

    // 3. Generating Numbers
    function generateNumber(){
        let randomSquare = Math.floor(Math.random() * squares.length);
        if (squares[randomSquare].innerHTML === ''){
            squares[randomSquare].innerHTML = 2;
            checkForGameOver();
            checkForWin();
            updateColors();
        } else 
            generateNumber();
            
    }

    // 4. Updarte Colors
    function updateColors(){
        squares.forEach(square =>{
            square.className = 'square';
            if (square.innerHTML != ''){
                square.classList.add(`square-${square.innerHTML}`);
            }
        });
    }
    
    // 5. Movment Functions :-
    function moveRight(){
        for (let i = 0; i < 16; i += 4){
            let row = [
                squares[i].innerHTML || '', 
                squares[i + 1].innerHTML || '', 
                squares[i + 2].innerHTML || '', 
                squares[i + 3].innerHTML || ''
            ];
            let newRow = row.filter(val => val !== '');
            while (newRow.length < 4) newRow.unshift(''); // Add empty slots at the beginning

            squares[i].innerHTML = newRow[0];
            squares[i + 1].innerHTML = newRow[1];
            squares[i + 2].innerHTML = newRow[2];
            squares[i + 3].innerHTML = newRow[3];
        }
    }

    function moveLeft(){
        for (let i = 0; i < 16; i += 4){
            let row = [
                squares[i].innerHTML || '', 
                squares[i + 1].innerHTML || '', 
                squares[i + 2].innerHTML || '', 
                squares[i + 3].innerHTML || ''
            ];
    
            let newRow = row.filter(val => val !== '');
            while (newRow.length < 4) newRow.push(''); 
    
            squares[i].innerHTML = newRow[0];
            squares[i + 1].innerHTML = newRow[1];
            squares[i + 2].innerHTML = newRow[2];
            squares[i + 3].innerHTML = newRow[3];
        }
    }

    function moveUp(){
        for (let i = 0; i < 4; i++){
            let column = [
                squares[i].innerHTML || '', 
                squares[i + 4].innerHTML || '', 
                squares[i + 8].innerHTML || '', 
                squares[i + 12].innerHTML || ''
            ];
    
            let newColumn = column.filter(val => val !== '');
            while (newColumn.length < 4) newColumn.push('');
    
            squares[i].innerHTML = newColumn[0];
            squares[i + 4].innerHTML = newColumn[1];
            squares[i + 8].innerHTML = newColumn[2];
            squares[i + 12].innerHTML = newColumn[3];
        }
    }

    function moveDown(){
        for (let i = 0; i < 4; i++){
            let column = [
                squares[i].innerHTML || '', 
                squares[i + 4].innerHTML || '', 
                squares[i + 8].innerHTML || '', 
                squares[i + 12].innerHTML || ''
            ];

            let newColumn = column.filter(val => val !== '');
            while (newColumn.length < 4) newColumn.unshift('');
    
            squares[i].innerHTML = newColumn[0];
            squares[i + 4].innerHTML = newColumn[1];
            squares[i + 8].innerHTML = newColumn[2];
            squares[i + 12].innerHTML = newColumn[3];
        }
    }
    
    function combineRow(){
        for (let i = 0; i < 15; i++){
            if (squares[i].innerHTML === squares[i + 1].innerHTML && squares[i].innerHTML !== '') {
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML);
                squares[i].innerHTML = combinedTotal;
                squares[i + 1].innerHTML = '';
                score += combinedTotal;
                scoreDisplay.innerHTML = score;
            }
        }
    }
    updateColors();

    function combineColumn(){
        for (let i = 0; i < 12; i++){
            if (squares[i].innerHTML === squares[i + 4].innerHTML && squares[i].innerHTML !== '') {
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + 4].innerHTML);
                squares[i].innerHTML = combinedTotal;
                squares[i + 4].innerHTML = '';
                score += combinedTotal;
                scoreDisplay.innerHTML = score;
            }
        }
    }
    updateColors();

    function control(e){
        if (e.keyCode === 39){ // right
            keyRight();
        } else if (e.keyCode === 37){  // left
            keyLeft();
        } else if (e.keyCode === 38){  // up
            keyUp();
        } else if (e.keyCode === 40){  // down
            keyDown();
        }
    }
    document.addEventListener('keyup', control);

    function keyRight(){
        moveRight();
        combineRow();
        moveRight();
        generateNumber();
        updateColors();
    }

    function keyLeft(){
        moveLeft();
        combineRow();
        moveLeft();
        generateNumber();
        updateColors();
    }

    function keyDown(){
        moveDown();
        combineColumn();
        moveDown();
        generateNumber();
        updateColors();
    }

    function keyUp(){
        moveUp();
        combineColumn();
        moveUp();
        generateNumber();
        updateColors();
    }

    function checkForWin(){
        for (let i = 0; i < squares.length; i++){
            if (squares[i].innerHTML == 2048){
                alert('You Win!');
                document.removeEventListener('keyup', control);
            }
        }
    }

    function checkForGameOver(){
        let zero = 0;
        for (let i = 0; i < squares.length; i++){
            if (squares[i].innerHTML == ''){
                zero++;
            }
        }
        if (zero === 0){
            alert('Game Over');
            document.removeEventListener('keyup', control);
        }
    }

    const newGame = document.getElementById('newGame');
    newGame.addEventListener('click', startNewGame);

    function startNewGame(){
        squares.forEach(square =>{
            square.innerHTML = '';
        });

        generateNumber();
        generateNumber();
        score = 0;
        scoreDisplay.innerHTML = score;
        document.addEventListener('keyup', control);
    }

    createBoard();
});