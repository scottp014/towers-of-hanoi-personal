var board = [[5, 4, 3, 2, 1],
  [],
  []];

const winningArr = [5, 4, 3, 2, 1];


console.log('Starting board: ')
board.map (function (num) {
  console.log('--- ' + num.join(' '));
});


window.addEventListener("click", function () {
    button.addEventListener("click", moveDisc);  
  });

  
 
const checkWinner = function () {
    let check1 = JSON.stringify(board[0, 1]) === JSON.stringify(winningArr);
    let check2 = JSON.stringify(board[0, 2]) === JSON.stringify(winningArr);

    if (check1 === true || check2 === true) {
      alert('You win! Game board is now reset to starting position.');
      board = [[5, 4, 3, 2, 1],
      [],
      []];
      
      console.log('Starting board: ')
      board.map (function (num) {
        console.log('--- ' + num.join(' '));
      });
    }
  };


const moveDisc = function (from, to) {

  from = document.getElementById("from").value; 
  to = document.getElementById("to").value;
  
  let fromPeg = board[0, from - 1];
  let toPeg = board[0, to - 1];
  let discMoved = fromPeg[fromPeg.length -1];
  let discDestination = toPeg[toPeg.length -1];
  
  
  if (discDestination === undefined || discDestination > discMoved) {
    fromPeg.pop();
    toPeg.push(discMoved);

    console.log('Move is successful, board is now: ')
    board.map (function (num) {
    console.log('--- ' + num.join(' '));
  })
  } else if (discMoved > discDestination) {
    console.log('You cannot move a larger disc on top of a smaller one, board is still: ')
    board.map (function (num) {
    console.log('--- ' + num.join(' '));
  })
  
  };

  document.getElementById('from').value = '';
  document.getElementById("to").value = '';
 

  checkWinner();
  };




































































    









  























