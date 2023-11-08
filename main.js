var board = [[5, 4, 3, 2, 1],
  [],
  []];

  console.log('Starting board: ')
  board.map (function (num) {
    console.log('--- ' + num.join(' '));
  });

let moveDisc = function (from , to) {

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
}
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



































































    









  























