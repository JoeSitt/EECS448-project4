/**
* Verifies that Game can be correctly instantiated.
*/
QUnit.test("Game constructor(...) test", function(assert) {
  var expectedGrid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
  ];
  var testGame = new Game(true);
  assert.deepEqual(testGame.grid, expectedGrid, "Verify that game grid is correctly initialized");
  assert.ok(testGame.player1Starts, "Verify that player 1 can be correctly set to start");

  var testGame = new Game(false);
  assert.notOk(testGame.player1Starts, "Verify that player 2 can be correctly set to start");
});

/**
* Verifies that Game updates after valid moves are done.
*/
QUnit.test("Game move(...) test", function(assert) {
  var expectedGrid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
  ];
  var testGame = new Game(true);
  assert.deepEqual(testGame.grid, expectedGrid, "Verify game grid before moves are done");

  assert.equal(testGame.turn, 1, "Verify turn before move");
  assert.ok(testGame.move(0), "Verify move method correctly returns that move can be done");
  assert.equal(testGame.turn, 2, "Verify turn after move");
  var expectedGrid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0]
  ];
  assert.deepEqual(testGame.grid, expectedGrid, "Verify game grid after first move is done");

  assert.equal(testGame.turn, 2, "Verify turn before move");
  assert.ok(testGame.move(2), "Verify move method correctly returns that move can be done");
  assert.equal(testGame.turn, 1, "Verify turn after move");
  var expectedGrid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 2, 0, 0, 0, 0]
  ];
  assert.deepEqual(testGame.grid, expectedGrid, "Verify game grid after second move is done");
});

/**
* Verifies that Game can be succesfully copied.
*/
QUnit.test("Game getCopy() test", function(assert) {

  var testGame = new Game(true);
  var testGameCopy = testGame.getCopy();
  assert.deepEqual(testGame.grid, testGameCopy.grid, "Verify that copied game instance has the same grid as original");
  assert.equal(testGame.turn, testGameCopy.turn, "Verify that turn corretly copied");

  testGame.move(0);
  assert.notDeepEqual(testGame.grid, testGameCopy.grid, "Verify that copied game instance is not updated when original is");
  assert.notEqual(testGame.turn, testGameCopy.turn, "Verify that copied game's turn is not updated when original is");

  testGame.grid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 2, 0, 0, 0, 0]
  ];
  testGameCopy = testGame.getCopy();
  assert.deepEqual(testGame.grid, testGameCopy.grid, "Verify that in progress game can successfully be copied");

  var testGame = new Game(false);
  var testGameCopy = testGame.getCopy();

  assert.equal(testGame.turn, testGameCopy.turn, "Verify that turn corretly copied");
});

/**
* Verifies that game state can be correctly determined.
*/
QUnit.test("Game getState() test", function(assert) {

  var testGame = new Game(true);
  var testGrid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
  ];
  testGame.grid = testGrid;
  assert.equal(testGame.getState(), -1, "Verify that empty board can have game state identified");

  var testGame = new Game(true);
  var testGrid = [
      [1, 2, 0, 0, 0, 0, 0],
      [2, 1, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 2, 0],
      [2, 1, 1, 0, 2, 1, 0],
      [2, 2, 1, 2, 1, 1, 2],
      [2, 1, 2, 2, 1, 2, 1]
  ];
  testGame.grid = testGrid;
  assert.equal(testGame.getState(), 2, "Verify that board in which player 2 has won can have game state identified");

  var testGame = new Game(true);
  var testGrid = [
      [0, 0, 1, 0, 0, 0, 2],
      [0, 0, 2, 0, 0, 0, 2],
      [0, 0, 1, 0, 0, 1, 2],
      [1, 1, 2, 0, 1, 2, 1],
      [2, 2, 2, 1, 1, 2, 1],
      [1, 2, 1, 1, 1, 2, 2]
  ];
  testGame.grid = testGrid;
  assert.equal(testGame.getState(), 1, "Verify that board in which player 1 has won can have game state identified");

  var testGame = new Game(true);
  var testGrid = [
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 2, 2, 1, 1, 1],
      [2, 1, 2, 1, 2, 2, 2],
      [1, 2, 2, 1, 1, 2, 2],
      [1, 2, 1, 2, 2, 1, 1],
      [1, 2, 2, 1, 1, 1, 2]
  ];
  testGame.grid = testGrid;
  assert.equal(testGame.getState(), 0, "Verify that tied game can be correctly identified");

  var testGame = new Game(true);
  var testGrid = [
      [1, 2, 1, 2, 1, 2, 2],
      [1, 2, 2, 2, 1, 1, 1],
      [2, 1, 2, 1, 1, 2, 2],
      [1, 2, 2, 1, 1, 2, 2],
      [1, 2, 1, 2, 2, 1, 1],
      [1, 2, 2, 1, 1, 1, 2]
  ];
  testGame.grid = testGrid;
  assert.equal(testGame.getState(), 1, "Verify that full gameboard in which player 1 has won can be identified");

  var testGame = new Game(true);
  var testGrid = [
      [1, 1, 2, 2, 1, 2, 1],
      [1, 2, 2, 2, 1, 1, 1],
      [2, 1, 2, 1, 2, 2, 2],
      [1, 2, 2, 1, 1, 2, 2],
      [1, 2, 1, 2, 2, 1, 1],
      [1, 2, 2, 1, 1, 1, 2]
  ];
  testGame.grid = testGrid;
  assert.equal(testGame.getState(), 2, "Verify that full gameboard in which player 2 has won can be identified");

  var testGame = new Game(true);
  var testGrid = [
      [1, 1, 2, 2, 1, 2, 1],
      [1, 2, 2, 2, 1, 1, 1],
      [1, 1, 2, 1, 2, 2, 2],
      [1, 2, 2, 1, 1, 2, 2],
      [2, 2, 1, 2, 2, 1, 1],
      [1, 2, 2, 1, 1, 1, 2]
  ];
  testGame.grid = testGrid;
  assert.throws(
      function() {
          testGame.getState()
      },
      "Verify that exception is thrown when both players 1 and 2 have appeared to have won"
  );
});

/**
* Verifies that potential moves can be gathered.
*/
QUnit.test("getPossibleMoves(...) test", function(assert) {
    var testGame = new Game(true);
    var testGrid = [
        [1, 1, 2, 2, 1, 2, 1],
        [1, 2, 2, 2, 1, 1, 1],
        [2, 1, 2, 1, 2, 2, 2],
        [1, 2, 2, 1, 1, 2, 2],
        [1, 2, 1, 2, 2, 1, 1],
        [1, 2, 2, 1, 1, 1, 2]
    ];
    testGame.grid = testGrid;
    assert.deepEqual(getPossibleMoves(testGame), [], "Verify that tied game can correctly have empty list of moves returned");

    var testGame = new Game(true);
    var testGrid = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];
    testGame.grid = testGrid;
    assert.deepEqual(getPossibleMoves(testGame), [0, 1, 2, 3, 4, 5, 6], "Verify that empty board has all moves indicated possible");

    var testGame = new Game(true);
    var testGrid = [
        [1, 1, 0, 2, 1, 2, 0],
        [1, 2, 2, 2, 1, 1, 1],
        [2, 1, 2, 1, 2, 2, 2],
        [1, 2, 2, 1, 1, 2, 2],
        [1, 2, 1, 2, 2, 1, 1],
        [1, 2, 2, 1, 1, 1, 2]
    ];
    testGame.grid = testGrid;
    assert.deepEqual(getPossibleMoves(testGame), [2, 6], "Verify that limited moves can be indicated possible");

    var testGame = new Game(true);
    var testGrid = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 0, 2, 0, 2, 1, 2]
    ];
    testGame.grid = testGrid;
    assert.deepEqual(getPossibleMoves(testGame), [0, 1, 2, 3, 4, 5, 6], "Verify that non-empty, early, game can have all moves indicated possible");

    var testGame = new Game(true);
    var testGrid = [
        [2, 2, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [2, 2, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [2, 2, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0]
    ];
    testGame.grid = testGrid;
    assert.deepEqual(getPossibleMoves(testGame), [2, 3, 4, 5, 6], "Verify that game with two full columns can have all moves indicated possible");

});

/**
* Verifies that next move can be found.
*/
QUnit.test("getNextMove(...) test", function(assert) {

    var testGame = new Game(true);
    var testGrid = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 0, 2, 0, 2, 1, 2]
    ];
    testGame.grid = testGrid;
    assert.equal(testGame.turn, 1, "Verify turn");
    assert.equal(getNextMove(testGame, 7), 5, "Verify that correct move 1 ahead can be located");

    var testGame = new Game(true);
    var testGrid = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];
    testGame.grid = testGrid;
    assert.equal(testGame.turn, 1, "Verify turn");
    assert.equal(getNextMove(testGame, 7), 0, "Verify that first spot is chosen for empty grid");

    var testGame = new Game(false);
    var testGrid = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 0, 2, 0, 2, 1, 2]
    ];
    testGame.grid = testGrid;
    assert.equal(testGame.turn, 2, "Verify turn");
    assert.equal(getNextMove(testGame, 7), 5, "Verify that correct move 1 ahead can be located");

    var testGame = new Game(true);
    var testGrid = [
        [0, 2, 0, 2, 0, 1, 0],
        [0, 2, 0, 1, 0, 1, 2],
        [0, 1, 0, 2, 0, 1, 2],
        [1, 2, 1, 1, 0, 2, 2],
        [1, 1, 2, 2, 0, 1, 1],
        [2, 2, 2, 1, 1, 2, 1]
    ];
    testGame.grid = testGrid;
    assert.equal(testGame.turn, 1, "Verify turn");
    assert.equal(getNextMove(testGame, 7), 6, "Verify that non-obvious move can be found");
});

/**
* Verify behavior of infinity.
*/
QUnit.test("Infinity test", function(assert) {
  assert.ok(Infinity > 1, "Verify infinity comparison");
  assert.ok(-Infinity < -1, "Verify infinity comparison");
});

/**
* Verify behavior of infinity.
*/
QUnit.test("Game move() and getCopy() test", function(assert) {
  assert.ok(Infinity > 1, "Verify infinity comparison");
  assert.ok(-Infinity < -1, "Verify infinity comparison");

  var testGame = new Game(true);
  var testGameCopy = testGame.getCopy();
  assert.equal(testGame.turn, testGameCopy.turn, "Verify game turn info copied correctly");
  assert.ok(testGameCopy.move(0), "Verify that move is a success");
  assert.notEqual(testGame.turn, testGameCopy.turn, "Verify game copy does not retain turn info");
});
