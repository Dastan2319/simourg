<template>
  <div class="container">
    <div class="main">
      <menuBar></menuBar>
      <router-view class="routerView" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import menuBar from "./components/menuBar.vue";
</script>

<style lang="scss">
.routerView{
  padding: 12px;
}
.container {
  margin: 0 auto;
  max-width: 1024px;
  width: 90%;
}
.main {
  display: flex;

  @media (max-width: 650px) { 
    flex-direction: column;
   }
}
</style>
