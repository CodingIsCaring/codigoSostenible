class SilentWizard extends Player {
    constructor(name = 'Paca', life = 10) {
        super(name, life);
    }

    say(message) {
    }

    telepathy(thought) {
        console.log(thought);
    }
}

const player2 = new SilentWizard();
player2.telepathy('Hi!!');

