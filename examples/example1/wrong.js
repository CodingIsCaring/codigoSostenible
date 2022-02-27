var TennisGame3 = function (p1N, p2N) {
    this.p2 = 0;
    this.p1 = 0;

    this.p1N = p1N;
    this.p2N = p2N;
};


TennisGame3.prototype.wonPoint = function (pN) {
    if (pN == 'player1')
        this.p1 += 1;
    else
        this.p2 += 1;
};
