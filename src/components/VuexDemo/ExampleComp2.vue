<template>
    <div id="comp1">
        <h1>Example Comp 2</h1>
        <h3>Counter : {{ $store.state.count }}</h3> <br>
        <button class="btn btn-primary" @click="incrementNumber">incrementNumber</button> <br> <br>
        <button class="btn btn-danger" @click="decrementNumber">decrementNumber</button> <br>
        <h3>Person Age : {{ $store.getters.personAge }}</h3>
        <h3>Square Count : {{ $store.getters.squareCount }}</h3>
        <hr>
        <button @click="CallPostApi">Get Post Data</button>
    </div>
</template>

<script>
export default {
    methods: {
        incrementNumber() {
            this.$store.commit('increment')
        },
        decrementNumber() {
            this.$store.commit('decrement')
        },
        CallPostApi() {
            this.$store.dispatch('getPostAPICall')
        }
    }
}
</script>

<style lang="scss" scoped></style>