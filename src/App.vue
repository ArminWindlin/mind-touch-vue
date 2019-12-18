<template>
  <div id="app">
    <menuu v-if="menuC" @play="play()" @levels="levelSelectionC = true, menuC = false"></menuu>
    <level-selection v-if="levelSelectionC" @play="playLevel" @toMenu="menuC = true; levelSelectionC = false">
    </level-selection>
    <game v-if="gameC" @toMenu="menuC = true; gameC = false" @toLevelScreen="levelSelectionC = true; gameC = false"
          :initialLevel="level"></game>
  </div>
</template>

<script>
    import Menuu from './components/Menu.vue';
    import LevelSelection from './components/LevelSelection.vue';
    import Game from './components/play/Game.vue';

    export default {
        name: 'app',
        components: {Menuu, Game, LevelSelection},
        data() {
            return {
                menuC: true,
                levelSelectionC: false,
                gameC: false,
                level: 1,
            };
        },
        methods: {
            play() {
                this.menuC = false;
                this.gameC = true;
            },
            playLevel(level) {
                this.level = level;
                this.levelSelectionC = false;
                this.gameC = true;
            },
        },
        beforeMount() {
            this.level = Number(this.$localStorage.get('level')) + 1;

        },
    };
</script>

<style>
  #app {
    font-family: Verdana, Geneva, sans-serif;
  }
</style>
