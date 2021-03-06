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

    {
        number: 6,
        controls: {
            left: 'left',
            right: 'right',
            up: 'up',
            down: 'up',
        },
        grid: [
            [2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        char1Position: {
            x: 1,
            y: 5,
        },
        char2Position: {
            x: 11,
            y: 4,
        },
    },

    {
        number: 7,
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
        number: 8,
        controls: {
            left: 'right',
            right: 'left',
            up: 'up',
            down: 'up',
        },
        grid: [
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 3, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 3, 0, 0, 3, 3, 1, 3, 3, 0, 0, 0, 3, 1],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        char1Position: {
            x: 9,
            y: 5,
        },
        char2Position: {
            x: 10,
            y: 1,
        },
    },

    {
        number: 9,
        controls: {
            left: 'right',
            right: 'left',
            up: 'down',
            down: 'up',
        },
        grid: [
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        ],
        char1Position: {
            x: 0,
            y: 3,
        },
        char2Position: {
            x: 13,
            y: 3,
        },
        timer: 6
    },

    {
        number: 10,
        controls: {
            left: 'left',
            right: 'left',
            up: 'up',
            down: 'down',
        },
        grid: [
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 3, 1, 1, 0, 0, 0, 3, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        char1Position: {
            x: 0,
            y: 1,
        },
        char2Position: {
            x: 13,
            y: 1,
        }
    },

    {
        number: 11,
        controls: {
            left: 'left',
            right: 'right',
            up: 'down',
            down: 'up',
        },
        grid: [
            [0, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0],
            [3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
            [1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
            [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2],
            [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2 ,2],
        ],
        char1Position: {
            x: 2,
            y: 6,
        },
        char2Position: {
            x: 11,
            y: 4,
        }
    },

    {
        number: 12,
        controls: {
            left: 'up',
            right: 'up',
            up: 'up',
            down: 'up',
        },
        grid: [
            [0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        ],
        char1Position: {
            x: 0,
            y: 0,
        },
        char2Position: {
            x: 13,
            y: 6,
        },
        timer: 6
    },

    {
        number: 13,
        controls: {
            left: 'right',
            right: 'left',
            up: 'down',
            down: 'up',
        },
        grid: [
            [0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 3],
            [1, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 1, 0, 0],
            [3, 2, 0, 0, 0, 0, 1, 2, 0, 0, 0, 2, 0, 0],
            [1, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 3],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        ],
        char1Position: {
            x: 0,
            y: 0,
        },
        char2Position: {
            x: 13,
            y: 3,
        },
        timer: 20
    },

    {
        number: 14,
        controls: {
            left: 'right',
            right: 'left',
            up: 'down',
            down: 'up',
        },
        grid: [
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
            [0, 0, 1, 3, 1, 0, 0, 0, 0, 3, 1, 0, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
            [0, 0, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        ],
        char1Position: {
            x: 0,
            y: 0,
        },
        char2Position: {
            x: 13,
            y: 6,
        },
        timer: 20
    },

    {
        number: 15,
        controls: {
            left: 'up',
            right: 'down',
            up: 'left',
            down: 'up',
        },
        grid: [
            [1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [2, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 3, 2],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2],
            [1, 3, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1],
        ],
        char1Position: {
            x: 2,
            y: 2,
        },
        char2Position: {
            x: 11,
            y: 3,
        },
        timer: 10
    },

];