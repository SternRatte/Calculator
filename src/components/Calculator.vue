<template>
  <div class="grid">
    <vDisplay></vDisplay>
    <vPanel></vPanel>
  </div>
</template>

<script>

import vDisplay from "@/components/Display.vue";
import vPanel from '@/components/ButtonPanel.vue'

export default {
  name: "Calculator",
  components: {
    vPanel,
    vDisplay,
  },
}
</script>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  max-height: 600px ;
  margin-top: 15% ;
  padding: 40px 30px ;
  border-radius: 20px;
  box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25),
  10px 10px 70px rgba(0, 0, 0, 0.5), inset -5px -5px 15px rgba(0, 0, 0, 0.25),
  inset 5px 5px 15px rgba(0, 0, 0, 0.25);
  background-color: DarkSlateGrey;
}
</style>