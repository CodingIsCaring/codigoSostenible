const canTalk = () => ({
    say: (message) => console.log(message)
});

const canFly = (state) => ({
    fly: () => state.y = state.y + 1
});

const canSuperFly = (state) => ({
    fly: () => state.y = state.y + 1000
});

const canRideAHorse = (state) => ({
    rideAHorse: () => state.x = state.x + 10
});

const canDoTelepathy = () => ({
   telepathy: (thought) => console.log(thought)
});

