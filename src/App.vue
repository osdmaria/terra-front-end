<template>
  <v-app>
    <v-main>
      <router-view class="view left-sidebar" name="left"></router-view>
      <router-view class="view main-content"></router-view>
      <!-- <router-view class="view right-sidebar" name="RightSidebar"></router-view> -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({}),
};
</script>

<style scoped>
#app {
  font-family: "Poppins", sans-serif;
}
v-app {
  align-items: center;
}
</style>
