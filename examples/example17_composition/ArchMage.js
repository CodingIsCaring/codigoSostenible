const ArchMage = (name = 'Juana', life = 10) => {
    let state = {
        name,
        life,
        x: 0,
        y: 0
    };

    return Object.assign(state,
        canTalk(),
        canSuperFly(state));
};