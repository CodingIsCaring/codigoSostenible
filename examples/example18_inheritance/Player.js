class Player {
    constructor(name = 'Paca', life = 10) {
        this.name = name;
        this.life = life;
    }

    say(message) {
        console.log(message);
    }
}

const player1 = new Player();
player1.say('Hello');