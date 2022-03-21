class ArchMage extends Player {
    constructor(name = 'Paca', life = 10) {
        super(name, life);
    }

    fly() {
        this.y = this.y + 10;
    }
}

const player2 = new ArchMage();
player2.fly();
player2.say('Hi!!');

