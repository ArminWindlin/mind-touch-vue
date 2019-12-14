<template>
    <div class="level-selection">
        <div class="levels-container">
            <div class="level" v-for="level in levels" :key="level.index" @click="$emit('play', level.number)"
                 :class="[{'done': progress > level.number},{'current': progress === level.number}]">
                {{level.number}}
            </div>
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
        padding: 10px;
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
        background-color: blue;
    }

    .level.current {
        background-color: yellow;
    }

    @media screen and (max-width: 550px) {
    }
</style>
