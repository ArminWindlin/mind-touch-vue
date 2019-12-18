<template>
    <div class="level-selection">
        <div class="levels-container">
            <div class="level" v-for="level in levels" :key="level.index" @click="$emit('play', level.number)"
                 :class="[{'done': progress > level.number},{'current': progress === level.number}]">
                {{level.number}}
            </div>
        </div>
        <div class="menu-button" @click="$emit('toMenu')">
            Menu
        </div>
    </div>
</template>

<script>
    import {levels} from './data/levels';

    export default {
        name: 'level-selection',
        props: [],
        data() {
            return {
                levels: [],
                progress: 1
            };
        },
        methods: {},
        beforeMount() {
            this.progress = Number(this.$localStorage.get('level')) + 1;
            this.levels = levels.slice();
            this.levels.splice(0, 1);
        },
    };
</script>

<style scoped>

    .levels-container {
        display: flex;
        flex-wrap: wrap;
        padding: 30px;
        max-height: calc(100vh - 60px);
        overflow: auto;
    }

    .level {
        border: 1px solid black;
        border-radius: 5px;
        width: 100px;
        height: 100px;
        text-align: center;
        font-weight: bold;
        font-size: 30px;
        line-height: 100px;
        margin: 10px;
    }

    .level.done {
        background-color: #6200EADD;
    }

    .level.done:hover {
        background-color: #6200EA;
    }

    .level.current {
        background-color: #8BC34ADD;
    }

    .level.current:hover {
        background-color: #8BC34A;
    }

    .menu-button {
        position: absolute;
        top: 10px;
        right: 10px;
        font-weight: bold;
        font-size: 16px;
        padding: 5px;
        background-color: rgba(50, 50, 50, 0.4);
        border-radius: 5px;
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
    }

    @media screen and (max-width: 550px) {
    }
</style>
