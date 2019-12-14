<template>
    <div class="level-selection">
        <div class="levels-container">
            <div class="level" v-for="level in levels" :key="level.index" @click="$emit('play', level.number)">
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
                levels: levels
            };
        },
        methods: {},
        beforeMount() {
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

    @media screen and (max-width: 550px) {
    }
</style>
