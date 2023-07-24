<template>
  <input placeholder="0" type="text" v-model="message">
</template>

<script>

export default {
  name: "Display",
  computed: {
    message: {
      get () {
        return this.$store.state.result
      },
      set (value) {
        this.$store.commit('updateMessage', value)
      }
    }
  }
}
</script>

<style scoped >

input[type="text"] {
  height: 100px;
  border: none;
  outline: none;
  background-color: #a7af7c;
  border-radius: 10px;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.75);
  text-align: right;
  padding: 5px;
  font-size: 2em;
  margin-bottom: 20px;
}
</style>