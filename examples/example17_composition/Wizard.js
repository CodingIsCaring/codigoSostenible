const Wizard = (name = 'Paco', life = 10) => {
    let state = {
        name,
        life,
        x: 0,
        y: 0
    };

    return Object.assign(state,
        canTalk(),
        canFly(state));
};

