class Wizard extends Player {
    constructor(flySpeed, name = 'Paca', life = 10) {
    super(name, life);
        this.flySpeed = flySpeed;
    }

    fly() {
        this.y = this.y + this.flySpeed;
    }
}
const player2 = new Wizard(10);
player2.fly();