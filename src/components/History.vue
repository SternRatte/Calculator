<template>
  <div class="history">
    <RouterLink class="el-history"
                to="/" v-for="expr in this.allExpressions"
                @click="updateMessage(expr)">{{expr}}</RouterLink>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"

export default {
  name: "History",
  computed:mapGetters(['allExpressions']),
  mounted(){
    const newHistory = JSON.parse(localStorage.getItem('history'));
    this.setHistory(newHistory);
  },
  methods: {
    ...mapMutations(['updateMessage','setHistory']),
  },
}
</script>

<style scoped>

.history{
  margin-top: 15%;
}

.el-history{
  display: block;
  text-decoration: none;
  color: #000000;
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
  border-bottom: 2px dotted #000000;
}

</style>