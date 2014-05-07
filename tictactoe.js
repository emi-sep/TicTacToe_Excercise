var readline = require('readline')
	, boardData = {}
	, players = ['x', 'o'];

function buildBoard(size) {
	var data = {
		board: [],
		empty: []
	};

	for (var i = 0; i < size; i += 1) {
		var row = [];

		for (var k = 0; k < size; k += 1) {
			row.push(null);
			data.empty.push(i + ' ' + k);
		}

		data.board.push(row);
	}

	return data;
}

function addToBoard(player, pos) {
	var emptyIndex = -1;

	// Add the player's position to the board
	boardData.board[pos[0]][pos[1]] = player;

	// Remove this position from the array of empty cells
	emptyIndex = boardData.empty.indexOf(pos[0] + ' ' + pos[1]);
	boardData.empty.splice(emptyIndex, 1);
}

function printBoard() {
	var divider = '+-----------+';

	for (var i = 0; i < 3; i += 1) {
		console.log(divider);
		var row = '|';

		for (var k = 0; k < 3; k += 1) {
			if (boardData.board[i][k])
				row += ' ' + boardData.board[i][k] + ' |';
			else
				row += '   |';
		}

		console.log(row);
	}

	console.log(divider);
}

function checkBoard() {
	var board = boardData.board
		, playerStrs = [
			(players[0] + players[0] + players[0]),
			(players[1] + players[1] + players[1]) 
		]
		, winner = null
		, colStrs = ['', '', '']
		, diagStrs = ['', ''];

	for (var i = 0; i < 3; i += 1) {

		// Check each row for a winner
		var rowStr = board[i].join('');

		if (rowStr == playerStrs[0]) {
			winner = players[0];
			break;
		} else if (rowStr == playerStrs[1]) {
			winner = players[1];
			break;
		}

		// Build a string of column values
		for (var k = 0; k < 3; k += 1) {
			colStrs[k] += board[i][k];
		}

		// Build a string of diagonal values
		if (i == 0) {
			diagStrs[0] += board[i][0];
			diagStrs[1] += board[i][2];
		} else if (i == 1) {
			diagStrs[0] += board[i][1];
			diagStrs[1] += board[i][1];
		} else if (i == 2) {
			diagStrs[0] += board[i][2];
			diagStrs[1] += board[i][0];
		}
	}

	// Check the column strings for a winner
	if (colStrs.indexOf(playerStrs[0]) > -1) {
		winner = players[0];
	} else if (colStrs.indexOf(playerStrs[1]) > -1) {
		winner = players[1];
	}

	// Check the diagonals for a winner
	if (diagStrs.indexOf(playerStrs[0]) > -1) {
		winner = players[0];
	} else if (diagStrs.indexOf(playerStrs[1]) > -1) {
		winner = players[1];
	}

	if (winner) {
		console.log(winner + ' wins!');
		return true;
	}

	return false;

}

function posFromString(str) {
	var pos = str.split(' ');

	pos.forEach(function(el, i, arr) {
		arr[i] = parseInt(el);
	});

	return pos;
}

function aiMove() {
	var index = -1
		, pos = [];

	// Choose a random index from the available positions
	index = Math.floor(Math.random() * boardData.empty.length - 0);
	pos = posFromString(boardData.empty[index]);

	addToBoard(players[1], pos);
}

function processInput(input) {
	var pos = [];

	if (input == 'quit') {
		rl.close();
		return;
	}

	// Store each value in an array and convert each array element to an int
	pos = posFromString(input)

	addToBoard(players[0], pos);
	aiMove();

	console.log('\u001b[2J\u001b[0;0H');
	printBoard();

	if (checkBoard()) { // We have a winner
		rl.close();
		return;
	}

	getInput();
}

function getInput() {
	rl.question('Player ' +  players[0] + '\'s move (enter row column): ', function(input) {
		processInput(input);
	});
}


rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

boardData = buildBoard(3);

getInput();