const TennisGame3 = function (name1, name2) {
    this.scorePlayer1 = 0;
    this.scorePlayer2 = 0;

    this.namePlayer1 = name1;
    this.namePlayer2 = name2;
};

TennisGame3.prototype.wonPoint = function (playerName) {
    if (playerName === 'player1') {
        this.scorePlayer1 += 1;
    } else {
        this.scorePlayer2 += 1;
    }
};
