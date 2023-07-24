<template>
  <button class="cell">
    <slot/>
  </button>
</template>

<style lang="css" scoped>

.cell{
  box-shadow: inset -8px 0 8px rgba(0, 0, 0, 0.15),
  inset 0 -8px 8px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(0, 0, 0, 0.75),
  10px 20px 25px rgba(0, 0, 0, 0.4);
  margin: 8px;
  height: 50px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  width: 20%;
  cursor: pointer;
}

.cell:active {
  background-color:Silver;
}

</style>