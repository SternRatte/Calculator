<template>
  <div class="button">
    <vBtn class="num"
          :class="{'operations': ['*', '/', '+', '-'].includes(btn),
          'zero': '0'.includes(btn)}"
          v-for="btn in buttons" @click="this.input(btn)">{{btn}}
    </vBtn>
  </div>
  <div class="right">
    <vBtn class="reset" @click="this.reset">C</vBtn>
    <vBtn class="equal" @click="calculate()">=</vBtn>
  </div>
</template>

<script>
import vBtn from './Button.vue';
import {mapMutations, mapActions} from "vuex";

export default {
  name: "ButtonPanel",
  components: {
    vBtn,
  },
  data() {
    return {
      buttons: [1, 2, 3, '/', 4, 5, 6, '*', 7, 8, 9, '+', 0, '.', '-',],
    }
  },
  methods: {
    ...mapMutations(['input','reset']),
    ...mapActions(['calculated']),

    calculate(){
      this.$store.dispatch('calculated');
    },

  }
}
</script>

<style scoped>

.button{
  width: 80%;
}

.zero{
  width: 45%;
}

.num {
  background-color: #243849;
  color: #fff;
}

.operations {
  background-color: #ff9900;
  color: #000000;
}

.equal {
  background:  #1479c9;
  height: 45%;
  width: 90%;
}

.reset {
  background: #FF0000;
  height: 45%;
  width: 90%;
}

</style>