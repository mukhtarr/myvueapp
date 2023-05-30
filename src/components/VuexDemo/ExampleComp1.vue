<template>
    <div id="comp1">
        <h1>Example Comp 1</h1>
        <h3>Counter : {{ $store.state.count }}</h3> <br>
        <button class="btn btn-primary" @click="incrementNumber">incrementNumber</button> <br> <br>
        <button class="btn btn-danger" @click="decrementNumber">decrementNumber</button> <br>
        <h3>Person Name : {{ $store.getters.personName }}</h3>
        <h3>Double Count : {{ $store.getters.doubleCount }}</h3>
        <h3 class="bg-info">Post Data : {{ $store.state.postData }}</h3>
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
        }
    }
}
</script>

<style lang="scss" scoped></style>