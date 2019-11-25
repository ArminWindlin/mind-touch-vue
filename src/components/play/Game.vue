<template>
  <div class="game">
    <view-canvas :character1="character1" :character2="character2" :grid="grid" ref="view"
                 @updateCharPositions="updateCharPositions"></view-canvas>
    <navigation-view @move="move"></navigation-view>
  </div>
</template>

<script>
    import ViewCanvas from './View.vue';
    import NavigationView from './NavigationView.vue';
    import {levels} from '../data/levels';

    export default {

        name: 'game',
        props: [],
        components: {ViewCanvas, NavigationView},
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
                        this.moveCharacters(-1, 0, -1, 0);
                        break;
                    case 'right':
                        this.moveCharacters(1, 0, 1, 0);
                        break;
                    case 'up':
                        this.moveCharacters(0, -1, 0, -1);
                        break;
                    case 'down':
                        this.moveCharacters(0, 1, 0, 1);
                        break;
                }
            },
            moveCharacters(char1X, char1Y, char2X, char2Y) {
                let animationWidth = this.$store.state.rectSize;
                let counter = 0;
                let speed1 = animationWidth / 10;

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
                    if (counter >= animationWidth) {
                        clearInterval(interval);
                        this.character1.exactX = this.$refs.view.rectSize * this.character1.x;
                        this.character1.exactY = this.$refs.view.rectSize * this.character1.y;
                        this.moveLock = false;
                        if (this.nextMove !== '') {
                            this.move(this.nextMove);
                            this.nextMove = '';
                        }
                    }
                }, 20);
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
