<template>
  <div class="game">
    <view-canvas :character1="character1" :character2="character2" :grid="grid" ref="view"
                 @updateCharPositions="updateCharPositions"></view-canvas>
    <navigation-view @move="move"></navigation-view>
    <win-screen v-if="winScreenC" @continue="winScreenC = false" @menu="$emit('toMenu')"></win-screen>
  </div>
</template>

<script>
    import ViewCanvas from './View.vue';
    import NavigationView from './NavigationView.vue';
    import WinScreen from './WinScreen.vue';
    import {levels} from '../data/levels';

    export default {

        name: 'game',
        props: [],
        components: {ViewCanvas, NavigationView, WinScreen},
        data() {
            return {
                character1: {
                    x: 0,
                    y: 0,
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
                // component switches
                winScreenC: false,
            };
        },
        methods: {
            processKeyPress(keyCode) {
                let move = '';
                // LEFT
                if (keyCode === 37) move = 'left';
                // UP
                else if (keyCode === 38) move = 'up';
                // RIGHT
                else if (keyCode === 39) move = 'right';
                // DOWN
                else if (keyCode === 40) move = 'down';
                // ESC
                else if (keyCode === 27) this.$emit('toMenu');

                if (move !== '') this.move(move);

            },
            move(move) {
                if (this.moveLock) return this.nextMove = move;
                this.moveLock = true;

                switch (move) {
                    case 'left':
                        this.moveCharacters(getIntDirections('left', this.character1), 0,
                            getIntDirections('left', this.character2), 0);
                        break;
                    case 'right':
                        this.moveCharacters(getIntDirections('right', this.character1), 0,
                            getIntDirections('right', this.character2), 0);
                        break;
                    case 'up':
                        this.moveCharacters(0, getIntDirections('up', this.character1), 0,
                            getIntDirections('up', this.character2));
                        break;
                    case 'down':
                        this.moveCharacters(0, getIntDirections('down', this.character1), 0,
                            getIntDirections('down', this.character2));
                        break;
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
                let speed1 = rectSize / 10;

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
                        this.checkWin();
                        this.character1.exactX = rectSize * this.character1.x;
                        this.character1.exactY = rectSize * this.character1.y;
                        this.moveLock = false;
                        if (this.nextMove !== '') {
                            this.move(this.nextMove);
                            this.nextMove = '';
                        }
                    }
                }, 20);
            },
            isBlocked(char, XorY, dir) {
                if (XorY === 'x' &&
                    (char.x + dir < 0 || char.x + dir > this.grid[0].length - 1)) return true;
                if (XorY === 'y' &&
                    (char.y + dir < 0 || char.y + dir > this.grid.length - 1)) return true;
                return false;
            },
            checkWin() {
                // check if the two characters are next to each other
                if (!(Math.abs(Math.abs(this.character1.x) - Math.abs(this.character2.x)) === 1 &&
                        Math.abs(Math.abs(this.character1.y) - Math.abs(this.character2.y) === 0) ||
                        Math.abs(Math.abs(this.character1.x) - Math.abs(this.character2.x) === 0) &&
                        Math.abs(Math.abs(this.character1.y) - Math.abs(this.character2.y) === 1))) return;
                this.winScreenC = true;
            },
            updateCharPositions(rectSize) {
                this.character1.exactX = this.character1.x * rectSize;
                this.character1.exactY = this.character1.y * rectSize;
                this.character2.exactX = this.character2.x * rectSize;
                this.character2.exactY = this.character2.y * rectSize;
            },
        },
        beforeMount() {
        },
        mounted() {
            // key listener
            let self = this;
            document.addEventListener('keydown', function(event) {
                self.processKeyPress(event.keyCode);
            });

            this.grid = levels[1].grid;
        },
    };
</script>

<style scoped>
  @media screen and (max-width: 550px) {
  }
</style>
