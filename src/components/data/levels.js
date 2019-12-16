export const levels = [

    {number: 0},

    {
        number: 1,
        controls: {
            left: 'right',
            right: 'left',
            up: 'up',
            down: 'down',
        },
        grid: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        char1Position: {
            x: 1,
            y: 3,
        },
        char2Position: {
            x: 12,
            y: 3,
        },
    },

    {
        number: 2,
        controls: {
            left: 'right',
            right: 'left',
            up: 'up',
            down: 'down',
        },
        grid: [
            [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        ],
        char1Position: {
            x: 1,
            y: 3,
        },
        char2Position: {
            x: 12,
            y: 3,
        },
    },

    {
        number: 3,
        controls: {
            left: 'right',
            right: 'left',
            up: 'up',
            down: 'down',
        },
        grid: [
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        char1Position: {
            x: 2,
            y: 2,
        },
        char2Position: {
            x: 11,
            y: 3,
        },
    },

    {
        number: 4,
        controls: {
            left: 'up',
            right: 'down',
            up: 'up',
            down: 'left',
        },
        grid: [
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        ],
        char1Position: {
            x: 2,
            y: 2,
        },
        char2Position: {
            x: 11,
            y: 3,
        },
    },

    {
        number: 5,
        controls: {
            left: 'up',
            right: 'down',
            up: 'left',
            down: 'up',
        },
        grid: [
            [2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        char1Position: {
            x: 2,
            y: 2,
        },
        char2Position: {
            x: 11,
            y: 3,
        },
    },

    {
        number: 6,
        controls: {
            left: 'right',
            right: 'left',
            up: 'down',
            down: 'down',
        },
        grid: [
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 3, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 3, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        ],
        char1Position: {
            x: 1,
            y: 1,
        },
        char2Position: {
            x: 12,
            y: 5,
        },
    },

];