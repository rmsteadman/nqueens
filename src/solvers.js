/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
// STEPS SOLUTION
// place rook in first index of board[0][index]
// iterate throughout the entire board and predicate placements for allowable placement
//if placement is possible, place rook and push in corresponding index of mirrored array
    // test if any rows on this board contain conflicts
    // this.hasAnyRowConflicts
// continue
// return results

window.findNRooksSolution = function(n) {
  // we need to initialize closure variables that each recursive call
  // can access
  var num = n;
  console.log(this);
  var solution = this.rows();
  // this logic needs to happen recursively
  // function recurse(){
      for (var i = 0; i < solution.length - 1; i++){
        for (var j = 0; j < solution.length - 1; j++){
          // var test = Board.prototype.hasAnyColConflicts.call();
          // console.log(test);
          if (!this.hasAnyColConflicts() && !this.hasAnyRowConflicts()){
            solution[i][j] = 1;
          } else {
            solution[i][j] = 0;
          }
        }
     }
   // }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
