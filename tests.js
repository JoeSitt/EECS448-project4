/**
* Verifies that Game intsance can be correctly instantiated.
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

  assert.ok(testGame.move(0), "Verify move method correctly returns that move can be done");
  var expectedGrid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0]
  ];
  assert.deepEqual(testGame.grid, expectedGrid, "Verify game grid after first move is done");

  assert.ok(testGame.move(2), "Verify move method correctly returns that move can be done");
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

  testGame.move(0);
  assert.notDeepEqual(testGame.grid, testGameCopy.grid, "Verify that copied game instance is not updated when original is");

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
});

/**
* Verifies that Game can be succesfully copied.
*/
QUnit.test("getMoveLookahead(...) test", function(assert) {

  var testGame = new Game(true);
  var testGrid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 2, 0, 0, 0, 0]
  ];
  testGame.grid = testGrid;
  assert.equal(getMoveLookahead(testGame), -1, "Verify that getMoveLookahead(...) correctly indicates that no one move win is possible");
  assert.deepEqual(testGame.grid, testGrid, "Verify that testGame's grid is left unchanged");

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
  assert.equal(getMoveLookahead(testGame), -1, "Verify that getMoveLookahead(...) correctly indicates that no one move win is possible");
  assert.deepEqual(testGame.grid, testGrid, "Verify that testGame's grid is left unchanged");

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
  assert.equal(getMoveLookahead(testGame), 5, "Verify that getMoveLookahead(...) correctly indicates that a winning move is possible");
  assert.deepEqual(testGame.grid, testGrid, "Verify that testGame's grid is left unchanged");

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
  assert.equal(getMoveLookahead(testGame), -1, "Verify that getMoveLookahead(...) correctly indicates that no one move win is possible");
  assert.deepEqual(testGame.grid, testGrid, "Verify that testGame's grid is left unchanged");
});
