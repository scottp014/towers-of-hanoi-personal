var board = [[5, 4, 3, 2, 1],
  [],
  []];

const winningArr = [5, 4, 3, 2, 1];

console.log('Starting board: ')
board.map (function (num) {
  console.log('--- ' + num.join(' '));
});

// this is checking to see if the window is ready
window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById('button'); // finding button from html
  if (button) { 
     button.addEventListener('click', moveDisc, false);
  }
});

 
const checkWinner = function () {
    let check1 = JSON.stringify(board[0, 1]) === JSON.stringify(winningArr);
    let check2 = JSON.stringify(board[0, 2]) === JSON.stringify(winningArr);

    if (check1 === true || check2 === true) {
      alert('You win! Game board is now reset to starting position.');
      board = [[5, 4, 3, 2, 1],
      [],
      []];
      
    }
  };


const moveDisc = function () {

  from = document.getElementById("from").value; //adding event listener for click
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

 
 




// moveDisc(1, 3)
// moveDisc(1, 2)
// moveDisc(3, 2)
// moveDisc(1, 3)
// moveDisc(2, 1)
// moveDisc(2, 3)
// moveDisc(1, 3)
// moveDisc(1, 2)
// moveDisc(3, 2)
// moveDisc(3, 1)
// moveDisc(2, 1)
// moveDisc(3, 2)
// moveDisc(1, 3)
// moveDisc(1, 2)
// moveDisc(3, 2)
// moveDisc(1, 3)
// moveDisc(2, 3)
// moveDisc(2, 1)
// moveDisc(3, 1)
// moveDisc(2, 3)
// moveDisc(1, 3)
// moveDisc(1, 2)
// moveDisc(3, 2)
// moveDisc(3, 1)
// moveDisc(2, 3)
// moveDisc(2, 1)
// moveDisc(3, 1)
// moveDisc(2, 3)
// moveDisc(1, 3)
// moveDisc(1, 2)
// moveDisc(3, 2)
// moveDisc(1, 3)
// moveDisc(2, 1)
// moveDisc(2, 3)
// moveDisc(1, 3)



































































    









  























