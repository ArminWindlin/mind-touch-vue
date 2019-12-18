<template>
  <div class="game">
    <view-canvas :character1="character1" :character2="character2" :grid="grid" ref="view"
                 @updateCharPositions="updateCharPositions"></view-canvas>
    <navigation-view @move="move" :controls2="character2.controls" :level="level" :remainingTime="remainingTime"
                     @menu="$emit('toMenu')" @levelScreen="$emit('toLevelScreen')"></navigation-view>
    <win-screen v-if="winScreenC" @continue="nextLevel()" @menu="$emit('toMenu')"></win-screen>
    <lose-screen v-if="loseScreenC" @continue="replayLevel()" @menu="$emit('toMenu')"></lose-screen>
  </div>
</template>

<script>
    import ViewCanvas from './View.vue';
    import NavigationView from './NavigationView.vue';
    import WinScreen from './WinScreen.vue';
    import LoseScreen from './LoseScreen.vue';
    import {levels} from '../data/levels';

    export default {
        name: 'game',
        props: ['initialLevel'],
        components: {
            LoseScreen,
            ViewCanvas, NavigationView, WinScreen,
        },
        data() {
            return {
                level: 1,
                levelData: levels[1],
                character1: {
                    x: 1,
                    y: 5,
                    exactX: 0,
                    exactY: 0,
                    controls: {
                        left: 'left',
                        right: 'right',
                        up: 'up',
                        down: 'down',
                    },
                },
                character2: {
                    x: 10,
                    y: 5,
                    exactX: 10,
                    exactY: 0,
                    controls: {
                        left: 'left',
                        right: 'right',
                        up: 'up',
                        down: 'down',
                    },
                },
                moveLock: false,
                nextMove: '',
                grid: [],
                timerTimeout: null,
                timerInterval: null,
                remainingTime: -1,
                // component switches
                winScreenC: false,
                loseScreenC: false,
            };
        },
        methods: {
            processKeyPress(keyCode) {
                // ESC
                if (keyCode === 27) this.$emit('toMenu');

                // ENTER
                if (keyCode === 13 && this.winScreenC) this.nextLevel();
                if (keyCode === 13 && this.loseScreenC) this.replayLevel();

                // MOVEMENT
                if (this.winScreenC || this.loseScreenC) return;
                let move = '';
                // LEFT
                if (keyCode === 37) move = 'left';
                // UP
                else if (keyCode === 38) move = 'up';
                // RIGHT
                else if (keyCode === 39) move = 'right';
                // DOWN
                else if (keyCode === 40) move = 'down';
                if (move !== '') this.move(move);
            },
            move(move) {
                if (this.moveLock) return this.nextMove = move;
                this.moveLock = true;

                this.moveCharacters(...getIntDirectionsArray(move, this.character2));

                function getIntDirectionsArray(move, char) {
                    let move2 = char.controls[move];
                    switch (move) {
                        case 'left':
                            if (move2 === 'left' || move2 === 'right')
                                return [-1, 0, getIntDirections(move, char), 0];
                            else return [-1, 0, 0, getIntDirections(move, char)];
                        case 'right':
                            if (move2 === 'left' || move2 === 'right')
                                return [1, 0, getIntDirections(move, char), 0];
                            else return [1, 0, 0, getIntDirections(move, char)];
                        case 'up':
                            if (move2 === 'left' || move2 === 'right')
                                return [0, -1, getIntDirections(move, char), 0];
                            else return [0, -1, 0, getIntDirections(move, char)];
                        case 'down':
                            if (move2 === 'left' || move2 === 'right')
                                return [0, 1, getIntDirections(move, char), 0];
                            else return [0, 1, 0, getIntDirections(move, char)];
                    }
                }

                function getIntDirections(move, char) {
                    switch (char.controls[move]) {
                        case 'left':
                            return -1;
                        case 'right':
                            return 1;
                        case 'up':
                            return -1;
                        case 'down':
                            return 1;
                    }
                }
            },
            moveCharacters(char1X, char1Y, char2X, char2Y) {
                let rectSize = this.$store.state.rectSize;
                let counter = 0;
                let speed1 = rectSize / 6;

                // check for blocking
                if (char1X !== 0 && this.isBlocked(this.character1, 'x', char1X)) char1X = 0;
                else if (this.isBlocked(this.character1, 'y', char1Y)) char1Y = 0;
                if (char2X !== 0 && this.isBlocked(this.character2, 'x', char2X)) char2X = 0;
                else if (this.isBlocked(this.character2, 'y', char2Y)) char2Y = 0;

                this.character1.x += char1X;
                this.character1.y += char1Y;
                this.character2.x += char2X;
                this.character2.y += char2Y;

                let interval = setInterval(() => {
                    this.character1.exactX += speed1 * char1X;
                    this.character1.exactY += speed1 * char1Y;
                    this.character2.exactX += speed1 * char2X;
                    this.character2.exactY += speed1 * char2Y;

                    counter += speed1;
                    if (counter >= rectSize) {
                        clearInterval(interval);
                        this.character1.exactX = rectSize * this.character1.x;
                        this.character1.exactY = rectSize * this.character1.y;
                        this.character2.exactX = rectSize * this.character2.x;
                        this.character2.exactY = rectSize * this.character2.y;
                        this.moveLock = false;
                        this.checkPortal();
                        this.checkWin();
                        this.checkLoss();
                        if (this.nextMove !== '') {
                            this.move(this.nextMove);
                            this.nextMove = '';
                        }
                    }
                }, 20);
            },
            isBlocked(char, XorY, dir) {
                if (XorY === 'x') {
                    // collision with game border
                    if ((char.x + dir < 0 || char.x + dir > this.grid[0].length - 1)) return true;
                    // collision with black object
                    if (this.grid[char.y][char.x + dir] === 1) return true;
                }
                if (XorY === 'y') {
                    // collision with game border
                    if ((char.y + dir < 0 || char.y + dir > this.grid.length - 1)) return true;
                    // collision with black object
                    if (this.grid[char.y + dir][char.x] === 1) return true;
                }
                return false;
            },
            checkLoss() {
                let c1 = this.character1;
                let c2 = this.character2;
                let grid = this.grid;
                if ((c1.x + 1 < grid[c1.y].length && grid[c1.y][c1.x + 1] === 2) ||
                    (c1.x - 1 >= 0 && grid[c1.y][c1.x - 1] === 2) ||
                    (c1.y + 1 < grid.length && grid[c1.y + 1][c1.x] === 2) ||
                    (c1.y - 1 >= 0 && grid[c1.y - 1][c1.x] === 2) ||
                    (c2.x + 1 < grid[c2.y].length && grid[c2.y][c2.x + 1] === 2) ||
                    (c2.x - 1 >= 0 && grid[c2.y][c2.x - 1] === 2) ||
                    (c2.y + 1 < grid.length && grid[c2.y + 1][c2.x] === 2) ||
                    (c2.y - 1 >= 0 && grid[c2.y - 1][c2.x] === 2)) {
                    if (!this.winScreenC) {
                        this.loseScreenC = true;
                        this.stopTimer();
                    }
                }
            },
            checkWin() {
                // check if the two characters are next to each other
                if (!((Math.abs(this.character1.x - this.character2.x) === 1 &&
                        this.character1.y - this.character2.y === 0) ||
                        (this.character1.x - this.character2.x === 0 &&
                            Math.abs(this.character1.y - this.character2.y) === 1) ||
                        (this.character1.x - this.character2.x === 0 &&
                            this.character1.y - this.character2.y === 0))) return;
                this.stopTimer();
                this.winScreenC = true;
                if (this.level > this.$localStorage.get('level'))
                    this.$localStorage.set('level', this.level);
            },
            checkPortal() {
                let c1 = this.character1;
                let c2 = this.character2;
                let grid = this.grid;
                if (grid[c1.y][c1.x] === 3) {
                    grid[c1.y][c1.x] = 0;
                    this.port(c1);
                }
                if (grid[c2.y][c2.x] === 3) {
                    grid[c2.y][c2.x] = 0;
                    this.port(c2);
                }
            },
            port(character) {
                let grid = this.grid;
                let rectSize = this.$store.state.rectSize;
                breakpoint:
                    for (let i = grid.length - 1; i >= 0; i--) {
                        for (let j = 0; j < grid[i].length; j++) {
                            if (grid[i][j] === 3) {
                                character.x = j;
                                character.y = i;
                                character.exactX = rectSize * character.x;
                                character.exactY = rectSize * character.y;
                                grid[i][j] = 0;
                                break breakpoint;
                            }
                        }
                    }
            },
            updateCharPositions(rectSize) {
                this.character1.exactX = this.character1.x * rectSize;
                this.character1.exactY = this.character1.y * rectSize;
                this.character2.exactX = this.character2.x * rectSize;
                this.character2.exactY = this.character2.y * rectSize;
            },
            nextLevel() {
                this.level++;
                if (this.level >= levels.length) this.level = 1;
                this.setLevel(this.level);
                this.winScreenC = false;
            },
            replayLevel() {
                this.setLevel(this.level);
                this.loseScreenC = false;
            },
            setLevel(level) {
                if (level >= levels.length) level = levels.length - 1;
                // clone object without reference
                this.levelData = JSON.parse(JSON.stringify(levels[level]));
                this.grid = this.levelData.grid;
                this.character2.controls = this.levelData.controls;
                this.character1.x = this.levelData.char1Position.x;
                this.character1.y = this.levelData.char1Position.y;
                this.character2.x = this.levelData.char2Position.x;
                this.character2.y = this.levelData.char2Position.y;
                this.updateCharPositions(this.$store.state.rectSize);
                // timer
                if (this.levelData.timer) this.startTimer();
            },
            startTimer() {
                this.timerTimeout = setTimeout(() => {
                    this.loseScreenC = true;
                    this.stopTimer();
                }, 1000 * this.levelData.timer);
                this.remainingTime = this.levelData.timer;
                this.timerInterval = setInterval(() => this.remainingTime--, 1000);
            },
            stopTimer() {
                clearTimeout(this.timerTimeout);
                clearInterval(this.timerInterval);
                this.remainingTime = -1;
            },
        },
        beforeMount() {
            this.level = this.initialLevel;
            if (this.level >= levels.length) this.level = levels.length - 1;
            this.setLevel(this.level);
        },
        mounted() {
            // key listener
            let self = this;
            document.addEventListener('keydown', function(event) {
                self.processKeyPress(event.keyCode);
            });
        },
        destroyed() {
            this.stopTimer();
        },
    };
</script>

<style scoped>
  @media screen and (max-width: 550px) {
  }
</style>
