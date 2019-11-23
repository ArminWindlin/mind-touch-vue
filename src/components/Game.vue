<template>
  <div class="game">
    <view-canvas :character1="character1" ref="view"></view-canvas>
    <navigation-view @move="move"></navigation-view>
  </div>
</template>

<script>
    import ViewCanvas from './View.vue';
    import NavigationView from './NavigationView.vue';

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
                },
                moveLock: false,
                nextMove: '',
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

                if (move !== '') this.move(move);

            },
            move(move) {
                if (this.moveLock) return this.nextMove = move;
                this.moveLock = true;

                if (move === 'right') this.character1.x++;
                if (move === 'up') this.character1.y--;
                if (move === 'down') this.character1.y++;

                let animationWidth = this.$refs.view.rectSize;
                let counter = 0;
                let speed1 = 4;
                if (move === 'left') this.character1.x--;

                let interval = setInterval(() => {
                    if (move === 'right') this.character1.exactX += speed1;
                    if (move === 'left') this.character1.exactX -= speed1;
                    if (move === 'up') this.character1.exactY -= speed1;
                    if (move === 'down') this.character1.exactY += speed1;
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
                }, 10);
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
        },
    };
</script>

<style scoped>
  @media screen and (max-width: 550px) {
  }
</style>
