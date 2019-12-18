<template>
  <canvas class="view-canvas" ref="canvas" :width="gameWidth" :height="gameHeight"
          :style="'left:' + (innerWidth - gameWidth) / 2 + 'px; top:' + (innerHeight - gameHeight) / 2 + 'px'">
  </canvas>
</template>

<script>
    export default {
        name: 'view-canvas',
        props: ['character1', 'character2', 'grid'],
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

                // ctx.fillText(this.fps + ' FPS', this.gameWidth - 80, 20);

                // get responsive rectangle size
                this.rectSize = Math.floor(this.gameWidth / 14);
                let rectSize = this.rectSize;

                // grid
                for (let i = 0; i < 14; i++) {
                    for (let j = 0; j < 7; j++) {
                        ctx.fillStyle = '#000000';
                        // ctx.strokeRect(i * rectSize, j * rectSize, rectSize, rectSize);
                        // black wall
                        if (this.grid[j][i] === 1) ctx.fillRect(i * rectSize, j * rectSize, rectSize, rectSize);
                        // red wall
                        ctx.fillStyle = 'rgb(244, 67, 54)';
                        if (this.grid[j][i] === 2) ctx.fillRect(i * rectSize, j * rectSize, rectSize, rectSize);
                        // portal
                        ctx.fillStyle = 'rgb(175, 82, 222)';
                        if (this.grid[j][i] === 3) ctx.fillRect(i * rectSize, j * rectSize, rectSize, rectSize);
                    }
                }

                // draw character 1
                ctx.fillStyle = '#6200EA';
                this.drawOctagon(ctx, rectSize / 1.83, this.character1.exactX + rectSize / 2, this.character1.exactY +
                    rectSize / 2);

                // draw character 2
                ctx.fillStyle = '#8BC34A';
                this.drawOctagon(ctx, rectSize / 1.83, this.character2.exactX + rectSize / 2, this.character2.exactY +
                    rectSize / 2);


                ctx.restore();

                const sinceStart = Date.now() - this.startTime;
                this.fps = Math.round(1000 / (sinceStart / ++this.frameCount) * 100) / 100;
                window.requestAnimationFrame(this.render);
            },
            drawOctagon(ctx, size, Xcenter, Ycenter) {
                let numberOfSides = 8;
                ctx.beginPath();
                ctx.moveTo(Xcenter + size * Math.cos(Math.PI / 8), Ycenter + size * Math.sin(Math.PI / 8));
                for (let i = 1; i <= numberOfSides; i += 1) {
                    ctx.lineTo(Xcenter + size *
                        Math.cos(i * 2 * Math.PI / numberOfSides + Math.PI / 8),
                        Ycenter + size *
                        Math.sin(i * 2 * Math.PI / numberOfSides + Math.PI / 8));
                }
                ctx.fill();
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
                this.$store.commit('setRectangleSize', Math.floor(this.gameWidth / 14));
                this.$emit('updateCharPositions', Math.floor(this.gameWidth / 14));
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
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 550px) {
  }
</style>
