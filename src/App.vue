<template>
  <div id="app">
    <menuu v-if="menuC" @play="play()"></menuu>
    <game v-if="gameC" @toMenu="menuC = true; gameC = false"></game>
  </div>
</template>

<script>
    import Menuu from './components/Menu.vue';
    import Game from './components/play/Game.vue';

    export default {
        name: 'app',
        components: {Menuu, Game},
        data() {
            return {
                menuC: true,
                gameC: false,
            };
        },
        methods: {
            play() {
                this.menuC = false;
                this.gameC = true;
            },
        },
    };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
