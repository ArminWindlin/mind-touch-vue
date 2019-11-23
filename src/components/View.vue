<template>
  <canvas class="view-canvas" ref="canvas" :width="gameWidth" :height="gameHeight"
          :style="'left:' + (innerWidth - gameWidth) / 2 + 'px; top:' + (innerHeight - gameHeight) / 2 + 'px'">
  </canvas>
</template>

<script>
    export default {
        name: 'view-canvas',
        props: ['character1'],
        data() {
            return {
                gameWidth: 640,
                gameHeight: 360,
                innerWidth: 0,
                innerHeight: 0,
                ctx: null,
                startTime: null,
                fps: 0,
                frameCount: 0,
                animationTestNumber: 0,
                rectSize: 0,
            };
        },
        methods: {
            // ration 16:9
            render() {
                let ctx = this.ctx;
                ctx.save();
                ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);

                //ctx.strokeRect(0, 0, this.gameWidth, this.gameHeight);

                ctx.fillStyle = 'rgba(0, 0, 255, 1)';
                //ctx.fillRect(10, 10, 100 + this.animationTestNumber, 100);

                ctx.font = 'bold 18px Verdana';
                ctx.textAlign = 'center';

                ctx.fillText(this.fps + ' FPS', this.gameWidth - 80, 20);

                // get responsive rectangle size
                this.rectSize = Math.floor(this.gameWidth / 14);
                let rectSize = this.rectSize;

                // draw character 1
                ctx.fillStyle = 'rgb(0, 0, 255)';
                ctx.fillRect(this.character1.exactX, this.character1.exactY, rectSize, rectSize);

                // grid
                for (let i = 0; i < 14; i++) {
                    for (let j = 0; j < 7; j++) {
                        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
                        ctx.strokeRect(i * rectSize, j * rectSize, rectSize, rectSize);
                    }
                }

                ctx.restore();

                const sinceStart = Date.now() - this.startTime;
                this.fps = Math.round(1000 / (sinceStart / ++this.frameCount) * 100) / 100;
                window.requestAnimationFrame(this.render);
            },
            animationTest() {
                let interval = setInterval(() => {
                    this.animationTestNumber++;
                    if (this.animationTestNumber > 150) clearInterval(interval);
                }, 30);
            },
            setGameSize() {
                if (window.innerHeight * 2 < window.innerWidth) {
                    this.gameHeight = window.innerHeight;
                    this.gameWidth = Math.round(this.gameHeight * 2);
                } else {
                    this.gameWidth = window.innerWidth;
                    this.gameHeight = Math.round(this.gameWidth / 2);
                }
                this.innerWidth = window.innerWidth;
                this.innerHeight = window.innerHeight;
            },
        },
        beforeMount() {
        },
        mounted() {
            const c = this.$refs.canvas;
            this.ctx = c.getContext('2d');
            this.startTime = Date.now();
            window.requestAnimationFrame(this.render);

            this.animationTest();

            this.setGameSize();
            window.addEventListener('resize', () => {
                this.setGameSize();
            });

        },
    };
</script>

<style lang="scss" scoped>
  .view-canvas {
    position: absolute;
    top: 0;
  }

  @media screen and (max-width: 550px) {
  }
</style>
